import React, { useEffect } from 'react'
import sliderimg from '../../assests/image/slider1.jpg'
import sliderimg2 from '../../assests/image/slider2.jpg'
import sliderimg3 from '../../assests/image/slider3.jpg'
import sliderimg4 from '../../assests/image/slider4.jpg'
import mapimg from '../../assests/image/map.svg'
// import Carousel from 'react-bootstrap/Carousel';
import ActivityCard from './ActivityCard'
import Carousel from 'react-multi-carousel'
import { useSelector } from 'react-redux'

function ActivityPage() {
    const activityPageData = useSelector((state) => state.activity.activityData)
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            paritialVisibilityGutter: 60,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30,
        },
    };

    const images = [
        sliderimg, sliderimg2, sliderimg3, sliderimg4,
    ];


    return (
        <>
            {activityPageData &&
                <>

                    <div>
                        <Carousel
                            itemClass="image-item"
                            responsive={responsive}
                            swipeable={true}
                            infinite
                        >
                            {images.slice(0, 5).map((image) => {
                                return (
                                    <img className="rounded-3"
                                        src={image}
                                        height={400}
                                        loading="lazy"
                                    />
                                );
                            })}
                        </Carousel>
                    </div>
                    <div className='row mx-0'>
                        <div className='col-md-11 mx-auto'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='activity-info'>
                                    <h3 className='fw-bold text-uppercase mb-0'>{activityPageData.name}</h3>
                                    <div className='py-3'>
                                        <span className='border bg-white px-2 py-1 me-2'>
                                            <a className='text-decoration-none' href='#'>Sightseeing</a>
                                        </span>
                                        <span className='border bg-white px-2 py-1 me-2'>
                                            <a className='text-decoration-none' href='#'>COVID Proof</a>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <span>Back to the map</span>
                                    <img className='ms-3' src={mapimg} alt="Map" />
                                </div>
                            </div>
                            <div className='row mx-0'>
                                <div className='col-md-8 px-0'>
                                    <p className='text-green fw-bold'>
                                        {activityPageData.description_short}
                                    </p>
                                    <p>{activityPageData.description_long}
                                    </p>

                                    <div className='mt-2 text-lgray text-xs'>
                                        Updated on 25 November 2021
                                    </div>
                                </div>
                                <div className='col-md-4 pe-0'>

                                </div>
                                <div className='col-md-12 px-0 py-3'>
                                    <h5 className='text-green fw-bold'>Recommended Activities Nearby</h5>
                                    <div className='row mx-0'>
                                        <Carousel
                                            itemClass="card-item"
                                            responsive={responsive}
                                            swipeable={true}
                                            infinite
                                        >
                                            {images.slice(0, 5).map((image) => {
                                                return (
                                                    <ActivityCard image={image} />
                                                )

                                            })}

                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
        </>)
}

export default ActivityPage
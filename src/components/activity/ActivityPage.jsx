import React, { useEffect } from 'react'
import mapimg from '../../assests/image/map.svg'
import ActivityCard from './ActivityCard'
import Carousel from 'react-multi-carousel'
import { useSelector } from 'react-redux'
import MyMapComponent, { MapWithAMarker } from './MapImplementation'
import { useCallback } from 'react'
import { useRef } from 'react'

function ActivityPage() {
    const activityPageData = useSelector((state) => state.activity.activityData)
    const nearByActivityPageData = useSelector((state) => state.activity.nearByActivityData)
    const descriptionRef = useRef();
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

    const getDiscription = useCallback(() => {
        const text = activityPageData.description_long;
        const heading = /\*\*(.*?)\*\*/gm;
        const result = text.replace(heading, `<p style="margin-top : 10px; margin-bottom : 0px"><b>$1</b></p>`);
        descriptionRef.current.innerHTML = result;
    }, [activityPageData]);

    useEffect(() => {
        if (activityPageData) {
            getDiscription();
        }
    }, [activityPageData])

    return (
        <>
            {activityPageData &&
                <>
                    <div className='mt-3 pt-3'>
                        <Carousel
                            itemClass="image-item"
                            responsive={responsive}
                            swipeable={true}
                            infinite
                        >
                            {activityPageData.images.map((image) => {
                                return (
                                    <>
                                        <img
                                            className="rounded-3"
                                            src={image.url}
                                            height={400}
                                        />
                                        <p className='source-text'>{image.sourceText}</p>
                                    </>
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
                                            <a className='text-decoration-none' href='#'>{activityPageData.labels[0].name}</a>
                                        </span>
                                        <span className='border bg-white px-2 py-1 me-2'>
                                            <a className='text-decoration-none' href='#'>{activityPageData.labels[1].name}</a>
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
                                    <p ref={descriptionRef}>
                                    </p>

                                    <div className='mt-2 text-lgray text-xs'>
                                        Updated on 25 November 2021
                                    </div>
                                </div>
                                <div className='col-md-4 pe-0 ps-5'>
                                    <div className='bg-light rounded-3 px-5 py-5 ms-5'>
                                        <div>
                                            <h6 className='text-orange'>Tips and Tricks</h6>
                                            <ul>
                                                <li>Gets windy and the stairs are a bit steep and narrow</li>
                                            </ul>
                                            <p className='text-green'>Getting There</p>
                                            <ul>
                                                <li>By Tram: close to tram stop Gent Korenmarkt perron 4. Trams 1 and 4 stop here</li>
                                                <li>By Bus: close to bus stop Gent Korenmarkt perron 4. Bus N4 stops here</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-dark'>
                                    <MyMapComponent
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                        loadingElement={<div style={{ height: `100%` }} />}
                                        containerElement={<div style={{ height: `400px` }} />}
                                        mapElement={<div style={{ height: `100%` }} />}
                                        lat={activityPageData.latitude}
                                        lng={activityPageData.longitude}
                                        isMarkerShown={true}
                                    />
                                </div>
                                {nearByActivityPageData &&
                                    <div className='col-md-12 px-0 py-3'>
                                        <h5 className='text-green fw-bold'>Recommended Activities Nearby</h5>
                                        <div className='row mx-0'>
                                            <Carousel
                                                itemClass="card-item"
                                                responsive={responsive}
                                                swipeable={true}
                                                infinite
                                            >
                                                {nearByActivityPageData.map((data) => {
                                                    return (
                                                        <ActivityCard data={data} />
                                                    )
                                                })}
                                            </Carousel>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </>}
        </>)
}

export default ActivityPage
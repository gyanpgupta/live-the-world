import React from 'react'
import activityimg from '../../assests/image/activity1.jpg'


export default function ActivityCard() {
    return (
        <div className='px-1'>
            <div className='position-relative mb-2'>
                <img className='img-fluid rounded-3' src={activityimg} alt="Graventeen castle, Ghent, Belgium" />
                <div>
                    <button className='position-absolute save-btn text-white rounded-3 px-3'>Save</button>
                </div>
            </div>
            <h5>Castle of the Counts</h5>
            <p className='text-dgray'>While Gravensteen looks like a fairy tale, it hides a much darker history than you’d expect behind its medieval walls. ...
                <a href="#" className='read-more fw-bold text-decoration-none'>READ MORE</a>
            </p>
        </div>
    )
}

import React from 'react'
import { useDispatch } from 'react-redux'

import { addActivity, removeActivity } from '../../redux/slices/TripSlice'

export default function ActivityCard(props) {
    const dispatch = useDispatch()

    const handleLink = () => {
        window.location.replace(`/frontend/activities/slug/${props.data.slug}`)
    }

    const handleSave = () => {
        const item = {
            activityId: props.id,
            tripId: "",
            tripType: "favorite"
        }
        dispatch(addActivity(item))
    }
    const handleRemove = () => {
        const item = {
            activityId: props.id,
            tripId: "",
            tripType: "favorite"
        }
        dispatch(removeActivity(item))
    }

    return (
        <div className='px-1'>
            <div className='position-relative mb-2'>
                <img className='w-100 rounded-3' height={250} src={props.data.images[0].url} alt="Graventeen castle, Ghent, Belgium" />
                <div>
                    <button className='position-absolute save-btn text-white rounded-3 px-3' onClick={handleSave}>Save</button>
                </div>
            </div>
            <h5>{props.data.name}</h5>
            <p className='text-dgray'>{props.data.description_short}
                <button onClick={handleLink} className='read-more fw-bold text-decoration-none bg-transparent border-0 py-0'>READ MORE</button>
            </p>
        </div>
    )
}

import React from 'react'
import './styles/locationInfo.css'
const LocationInfo = ({ location }) => {

    console.log(location)

    return (
    <article className='location'>
        <h2 className='location_name'>{location?.name}</h2>
        <ul className='location_list'>
            <li className='location_item'><samp className='location_label'>Type: </samp>{location?.type}</li>
            <li className='location_item'><samp className='location_label'>Dimension: </samp>{location?.dimension}</li>
            <li className='location_item'><samp className='location_label'>Population: </samp>{location?.residents.length}</li>

        </ul>
    </article>
    )
}

export default LocationInfo
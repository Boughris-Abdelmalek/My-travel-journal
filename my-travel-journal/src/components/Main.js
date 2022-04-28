import React from 'react'
import path from '../images/Fill 219(1).png'

export default function Main(props) {
    return (
        <div className='layout'>
                <img 
                src={props.item.imageUrl}
                className='images'
                alt='images'
                />
                <div class="informations">
                    <div className='location'>
                        <img src={path} className='path--icon' alt='path-icon'/>
                        {props.item.location}
                        <span className='google-maps'>
                            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                        </span>
                    </div>
                    <div className='title'>
                        {props.item.title}
                    </div>
                    <div className='date'>
                        {props.item.startDate} - {props.item.endDate}
                    </div>
                    <div className='description'>
                        {props.item.description}
                    </div>
                </div>
        </div>
    )
}
import React from 'react'
import data from './data'
import Main from './Main'

export default function content() {
    console.log(data)
    const places = data.map(item =>{
        return (
            <Main 
            key={item.title}
            item = {item}
            />
        )
    })
    return (
        <div>
            {places}
        </div>
    )
}
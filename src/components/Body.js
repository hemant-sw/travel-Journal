import React from 'react'
import "./body.css"

export default function Body(props) {
  return (
    <div className='body'>
        <img src={props.img} alt='f'/>
        <div className='stats'>
        <div className='stats-location'>
           
           <i class="fi fi-rs-marker"/> 
           <span className='stats-city'>{props.location}</span>  
           <span className='stats-map'>View on google Maps</span>      
        </div>
        <div className='stats-heading'>
            <h3>{props.city}</h3>
        </div>
        <div className='stats-date'>
            <span>{props.datestart} - {props.dateend}</span>
        </div>
        <div className='stats-des'>
            <span>{props.des}</span>
        </div>
        </div>
    </div>
  )
}

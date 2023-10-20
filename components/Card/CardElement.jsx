import React from 'react'
import { CardContext } from './Card'

export default function CardElement() {
    
    const { cardText, cardTitle } = React.useContext(CardContext)
    
    return (
        <div className='card-el-container'>
            <div className='img-container'>
                <img src='../../images/Cloudupload.svg' alt='cloud upload' className='img-cloud'/>
            </div>
            <h4>{cardTitle}</h4>
            <p>{cardText}</p>
        </div>
    )
}
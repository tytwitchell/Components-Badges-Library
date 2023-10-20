import React from 'react'
import { TestimonialContext } from './Testimonial'

export default function TestimonialElement() {
    const { testimonialImg } = React.useContext(TestimonialContext)


    return (
        <div className='testimonial-element'>
            <img src={`../../images/${testimonialImg}`} className='img-testimonial'/>
            <img src={'../../images/quotes.png'} className='img-quotes' />
            <p className='testimonial-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
            <div className='name-container'>
                <p className='testimonial-name'>May Andersons</p>
                <p className='testimonial-position'>Workcation, CTO</p>
            </div>
            
        </div>
    )
}
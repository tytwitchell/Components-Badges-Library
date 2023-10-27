import React from 'react'
import { TestimonialContext } from './Testimonial'

export default function TestimonialElement() {
    const { 
        testimonialImg,
        testimonialText,
        testimonialName,
        testimonialWorkTitle
    } = React.useContext(TestimonialContext)


    return (
        <div className='testimonial-element'>
            <img src={`../../images/${testimonialImg}`} className='img-testimonial'/>
            <img src={'../../images/quotes.png'} className='img-quotes' />
            <p className='testimonial-text'>{testimonialText}</p>
            <div className='name-container'>
                <p className='testimonial-name'>{testimonialName}</p>
                <p className='testimonial-position'>{testimonialWorkTitle}</p>
            </div>
        </div>
    )
}
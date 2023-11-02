import React from 'react'
import { TestimonialContext } from './Testimonial'
import { ImQuotesLeft } from "react-icons/im";

export default function TestimonialElement() {
    const { 
        testimonialImg,
        testimonialText,
        testimonialName,
        testimonialWorkTitle
    } = React.useContext(TestimonialContext)


    return (
      <div className="testimonial-element">
        <img src={testimonialImg} className="img-testimonial" />
        <ImQuotesLeft className="img-quotes" size="2.5em" />
        <p className="testimonial-text">{testimonialText}</p>
        <div className="name-container">
          <p className="testimonial-name">{testimonialName}</p>
          <p className="testimonial-position">{testimonialWorkTitle}</p>
        </div>
      </div>
    );
}
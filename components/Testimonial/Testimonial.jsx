import React from 'react'

const TestimonialContext = React.createContext()
export { TestimonialContext }

export default function Testimonial({ children }) {
    
    const [testimonialImg, setTestimonialImg] = React.useState('Image.png')
    
    return (
        <TestimonialContext.Provider value={{testimonialImg}}>
            {children}
        </TestimonialContext.Provider>
    )
}
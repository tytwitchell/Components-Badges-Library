import React from 'react'
 
const BannerContext = React.createContext()
export { BannerContext }

export default function Banner({ children, text }) {
    
    const [bannerType, setBannerType] = React.useState('')
    const [bannerDescription, setBannerDescription] = React.useState(text)

    text && bannerDescription === '' 
        ? setBannerDescription(text) 
        : text === '' && bannerDescription === '' ? setBannerDescription('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.') 
        : ''
    
    return (
        <BannerContext.Provider value= {
                { 
                    bannerType,
                    setBannerType, 
                    bannerDescription, 
                    setBannerDescription 
                }
            }
        >
            <div className='banner-container'>
                {children}
            </div>
        </BannerContext.Provider>
    )
}
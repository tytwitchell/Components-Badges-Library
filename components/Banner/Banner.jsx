import React from 'react'
 
const BannerContext = React.createContext()
export { BannerContext }

export default function Banner({ children }) {
    
    const [bannerType, setBannerType] = React.useState('error')
    
/**
 * you can change the description of the banner below via state or by using the rendered input
*/
    const [bannerDescription, setBannerDescription] = React.useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.')
    bannerDescription === '' ? setBannerDescription('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.') : ''
    
    
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
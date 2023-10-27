import React from 'react'
import { BannerContext } from './Banner'

export default function BannerText() {
    
    const { bannerDescription, setBannerDescription } = React.useContext(BannerContext)
    
    function handleBannerTextUpdate(tar) {
        setTimeout(setBannerDescription(tar.target.value), 500)
    }
    
    return (
        <div className='text-container'>
            <label htmlFor='banner-text'>Text:</label>
            <input 
                type='text' 
                id='banner-text' 
                placeholder='Banner text'
                className='input-text-banner'
                onChange={handleBannerTextUpdate}
            />
        </div>
    )
}
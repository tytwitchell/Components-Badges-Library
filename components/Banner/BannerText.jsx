import React from 'react'
import { BannerContext } from './Banner'

export default function BannerText() {
    
    const { setBannerDescription } = React.useContext(BannerContext)
    
    function handleBannerTextUpdate(e) {
        setTimeout(setBannerDescription(e.target.value), 500)
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
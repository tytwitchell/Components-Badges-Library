import React from 'react'
import { BadgeContext } from './Badge'


export default function BadgeText() {
    
    const { setBadgeText, badgeText } = React.useContext(BadgeContext)
    
    function handleInputUpdate(e) {
        setTimeout(setBadgeText(e.target.value), 500)
    }
    
    
    return (
        <div className='text-container'>
            <label htmlFor='badge-text'>Text:</label>
            <input 
                type='text' 
                id='badge-text' 
                placeholder='Badge'
                className='input-text'
                onChange={handleInputUpdate}
            />
        </div>
    )
}
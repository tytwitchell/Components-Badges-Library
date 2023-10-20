import React from 'react'
import { BadgeContext } from './Badge'

export default function BadgeDropdown({ children }) {
    
    const { setBadgeColor } = React.useContext(BadgeContext)
    
    function handleSelectUpdate(e) {
        setBadgeColor(e.target.value)
    }
    
    return (
        <div className='dropdown-container' >
            <label htmlFor="colors">Color:</label>
            <select 
                className="dropdown" 
                name="colors" 
                id="colors"
                onChange={handleSelectUpdate}
            >
                {children}
            </select>
        </div>
    )
}
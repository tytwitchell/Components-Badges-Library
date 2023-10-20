import React from 'react'
import { BadgeContext } from './Badge'

export default function BadgeType() {
    const { setBadgeType } = React.useContext(BadgeContext)
    
    function handleTypeChange(e) {
        setBadgeType(e.target.value)
    }
    
    return (
        <div className='type-container'>
            <label htmlFor="type">Type:</label>
            <select 
                className="dropdown" 
                name="type" 
                id="type"
                onChange={handleTypeChange}
            >
                <option value='square'>square</option>
                <option value='pill'>pill</option>
            </select>
        </div>
    )
}
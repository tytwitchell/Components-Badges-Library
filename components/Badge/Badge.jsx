import React from 'react'
import classnames from "classnames"

const BadgeContext = React.createContext()
export { BadgeContext }

export default function Badge({ children }) {
    
///////// you can update badge styles using state below or rendered html inputs /////////
    
    // color options: 
    // 'gray', 'red', 'yellow', 'green', 'blue','indigo',  'purple', 'pink'
    const [badgeColor, setBadgeColor] = React.useState('gray')
    
    // type options:
    // 'square', 'pill'
    const [badgeType, setBadgeType] = React.useState('square')
    
    // text options: 
    // anything you want :)
    const [badgeText, setBadgeText] = React.useState('')
    badgeText === '' ? setBadgeText('Badge') : ''

/////////////////////////////////////////////////////////////////////////////////////////

    // badge classes
    let typeClass = `badge-${badgeType}`
    let colorClass = `${badgeColor}`
    const allClasses = classnames(typeClass, colorClass)
    
    return (
        <BadgeContext.Provider 
            value={{ 
                badgeText, 
                allClasses, 
                setBadgeColor, 
                setBadgeText,
                setBadgeType
            }}
        >
            <div className='badge-container'>
                {children}
            </div>
        </BadgeContext.Provider>
    )
}
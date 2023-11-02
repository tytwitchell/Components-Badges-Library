import React from 'react'
import classnames from "classnames"

const BadgeContext = React.createContext()
export { BadgeContext }

export default function Badge({ children, color, text, type }) {
    
    const [badgeColor, setBadgeColor] = React.useState(color)
    const [badgeType, setBadgeType] = React.useState(type)
    const [badgeText, setBadgeText] = React.useState(text)
    let typeClass = `badge-${badgeType}`
    let colorClass = `${badgeColor}`
    const allClasses = classnames(typeClass, colorClass)

    badgeColor === '' 
        ? setBadgeColor('green') 
        : ''

    badgeType === '' 
        ? setBadgeType('square') 
        : ''
    
    badgeText === '' 
        ? setBadgeText('Badge') 
        : ''

    
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
import React from 'react'
import { BadgeContext } from './Badge'


export default function BadgeElement() {
    const { badgeText, allClasses } = React.useContext(BadgeContext)


    return (
        <span className={allClasses}>{badgeText}</span>
    )
}

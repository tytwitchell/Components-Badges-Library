import React from 'react'
import { TooltipContext } from './Tooltip'

export default function TooltipElement() {
    
    const { 
        tooltipTitle, 
        tooltipText, 
        handleHideTip, 
        tipHidden,
        setTipHidden
    } = React.useContext(TooltipContext)
    
    return (
        <div className={`tooltip-el-container ${ tipHidden ? 'hidden' : '' } `}>
            <img src='../../images/Polygon.png' className='img-polygon' />
            <img src='../../images/Inbox.png' className='img-inbox' />
            <img 
                src='../../images/Dismiss.png' 
                className='img-dismiss' 
                onClick={handleHideTip}
            />
            <h4 className='title-tooltip'>{tooltipTitle}</h4>
            <p className='text-tooltip'>{tooltipText}</p>
        </div>
    )
}
import React from 'react'

const TooltipContext = React.createContext()
export { TooltipContext }


export default function Tooltip({children}) {
    
    ///////// update tooltip title and text here using state //////////
    const [tooltipTitle, setTooltipTitle] = React.useState('Archive notes')
    const [tooltipText, setTooltipText] = React.useState('Lorem ipsum dolor sit amet consectetur        adipisicing elit oluptatum tenetur.')
    
    const [tipHidden, setTipHidden] = React.useState(false)
    
    function handleHideTip() {
        setTipHidden(true)
        setTimeout(() => setTipHidden(false), 1000)
    }
    
    return (
        <TooltipContext.Provider value={{ 
            tooltipTitle, 
            tooltipText, 
            handleHideTip, 
            tipHidden, 
            setTipHidden
        }}>
            <div className='tooltip-wrapper'>
                {children}
            </div>
        </TooltipContext.Provider>
    )
}
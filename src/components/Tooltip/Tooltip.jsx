import React from 'react'

const TooltipContext = React.createContext()
export { TooltipContext }


export default function Tooltip({ children, titleText, bodyText }) {
    
    const [tooltipTitle, setTooltipTitle] = React.useState(titleText)
    const [tooltipText, setTooltipText] = React.useState(bodyText)
    const [tipHidden, setTipHidden] = React.useState(false)


    tooltipTitle === '' 
        ? setTooltipTitle('Archive notes') 
        : ''

    tooltipText === '' 
        ? setTooltipText('Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.') 
        : ''
    
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
import React from 'react'

export default function BadgeColors() {
    
    const colorsArr = [
        'gray', 
        'red',
        'yellow', 
        'green', 
        'blue', 
        'indigo', 
        'purple', 
        'pink'
    ]
      
    const colorOptions = colorsArr.map(color => {
        return <option value={color} key={color}>{color}</option>
    })
    
    return <>{colorOptions}</>
}
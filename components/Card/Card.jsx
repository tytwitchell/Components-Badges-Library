import React from 'react'

const CardContext = React.createContext()
export { CardContext }

export default function Card({ children }) {
    
    ////// update card text and title using state ///////
    const [cardText, setCardText] = React.useState('Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.')
    const [cardTitle, setCardTitle] = React.useState('Easy Deployment')
    
    return (
        <CardContext.Provider value={{ cardText, cardTitle}}>
            <div className='card-container'>
                {children}
            </div>
        </CardContext.Provider>
    )
}
import React from 'react'

const CardContext = React.createContext()
export { CardContext }

export default function Card({ children, bodyText, titleText }) {
    
    const [cardTitle, setCardTitle] = React.useState(titleText)
    const [cardText, setCardText] = React.useState(bodyText)

    cardTitle === '' 
        ? setCardTitle('Easy Deployment') 
        : ''

    cardText === '' 
        ? setCardText('Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.') 
        : ''
    
    return (
        <CardContext.Provider value={{ cardText, cardTitle }}>
            <div className='card-container'>
                {children}
            </div>
        </CardContext.Provider>
    )
}
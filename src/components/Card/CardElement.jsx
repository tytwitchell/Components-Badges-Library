import React from 'react'
import { CardContext } from './Card'
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function CardElement() {
    
    const { cardText, cardTitle } = React.useContext(CardContext)
    
    return (
      <div className="card-el-container">
        <div className="img-container">
          <AiOutlineCloudUpload className="img-cloud" />
        </div>
        <h4>{cardTitle}</h4>
        <p>{cardText}</p>
      </div>
    );
}
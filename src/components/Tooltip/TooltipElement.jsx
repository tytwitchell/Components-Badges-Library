import React from 'react'
import { TooltipContext } from './Tooltip'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineInbox } from "react-icons/hi";
import { BsTriangleFill } from "react-icons/bs";

export default function TooltipElement() {
    
    const { 
        tooltipTitle, 
        tooltipText, 
        handleHideTip, 
        tipHidden,
        setTipHidden
    } = React.useContext(TooltipContext)
    
    return (
      <div className={`tooltip-el-container ${tipHidden ? "hidden" : ""} `}>
        <BsTriangleFill className="img-polygon" size="1em" />
        <HiOutlineInbox className="img-inbox" size="1.5em" />
        <AiOutlineCloseCircle
          className="img-dismiss"
          onClick={handleHideTip}
          size="1.5em"
        />
        <h4 className="title-tooltip">{tooltipTitle}</h4>
        <p className="text-tooltip">{tooltipText}</p>
      </div>
    );
}
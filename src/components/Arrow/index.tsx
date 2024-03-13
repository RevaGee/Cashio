import React from "react";
import {ButtonArrow} from "../../images/icons/ButtonArrow";



 export const Arrow = () => {
    return (
        <div className="scroll-top-button" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <i className="fa-arrow-up"> <ButtonArrow/></i>
        </div>
    );
}


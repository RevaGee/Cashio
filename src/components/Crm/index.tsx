import React from "react";
import './styles.scss'
import CRM from '../../images/icons/Crm.png'
export const Crm = () => {
    return(
        <div className = 'crm'>
            <div className = 'crm_media'>
                <h1>Optimize <span>non-stop</span><br/>Check your profits
                    <span className = 'text_ml'>in a minute</span></h1>
                <img src={CRM} alt=''/>
            </div>
        </div>
    );
}

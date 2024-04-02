import React from "react";
import './styles.scss'
import CRM from '../../images/icons/Crm_1.png'
export const Crm = () => {
    return(
        <div className = 'crm'>
            <div className = 'crm_media'>
                <div className = 'loh'>
                    <h1>Optimize non-stop<br/>Check your profits in a minute</h1>
                    <img src={CRM} alt=''/>
                </div>
            </div>
        </div>
    );
}

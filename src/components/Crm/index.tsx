import React, {useEffect, useState} from "react";
import './styles.scss'
import '../../index.css'
import CRM_black from '../../images/icons/Crm_black.png'
import CRM_grey from '../../images/icons/Crm_grey.png'
export const Crm = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
    );
   /* useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);*/
    return (
        <div className='crm'>
            <div className='crm_media'>
                <h1>Optimize <span>non-stop</span><br/>Check your profits
                    <span className='text_ml'>in a minute</span></h1>
                <img src={darkMode ? CRM_grey : CRM_black} alt=''/>
            </div>
        </div>
    );
}
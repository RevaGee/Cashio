import React, { useEffect, useState } from "react";
import './styles.scss'
import '../../index.css'
import CRM_black from '../../images/icons/Crm_black.png'
import CRM_grey from '../../images/icons/Crm_grey.png'

import CRM_black_small from '../../images/icons/Crm_black_small.png'
import CRM_grey_small from '../../images/icons/CRM_grey_small.png'

import { useTheme } from "../DarkMode";

export const Crm = () => {
    const { darkMode } = useTheme();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='crm'>
            <div className='crm_media'>
                <h1>Optimize <span>non-stop</span><br/>Check your profits
                    <span className='text_ml'>in a minute</span></h1>
                { windowWidth < 768 ? (
                    darkMode ? (
                        <img src={CRM_grey_small} alt=''/>
                    ) : (
                        <img src={CRM_black_small} alt=''/>
                    )
                ) : (
                    darkMode ? (
                        <img src={CRM_grey} alt=''/>
                    ) : (
                        <img src={CRM_black} alt=''/>
                    )
                )}
            </div>
        </div>
    );
}

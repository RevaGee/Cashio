import React, { useEffect, useState } from "react";
import './styles.scss'
import '../../index.css'
import { ContainerScroll } from "../ui/container-scroll-animation";
import CRM_black from '../../images/icons/Crm_black.png'
import CRM_grey from '../../images/icons/Crm_grey.png'

import CRM_black_small from '../../images/icons/Crm_black_small.png'
import CRM_grey_small from '../../images/icons/CRM_grey_small.png'


export const Crm = () => {
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
    );
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);
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
                <ContainerScroll
                    titleComponent={
                        <h1>Optimize <span>non-stop</span><br/>Check your profits
                            <span className='text_ml'>in a minute</span></h1>
                    }
                >
                    {/*{windowWidth < 768 ? (
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
                )}*/}
                    <img className = 'lol_small' src={CRM_grey_small} alt='' style={windowWidth < 768 ? (darkMode ? {display: 'flex'} : {display: 'none'}):{display: 'none'}}/>
                    <img className = 'lol_small' src={CRM_black_small} alt='' style={windowWidth < 768 ? (darkMode ? {display: 'none'} : {display: 'flex'}):{display: 'none'}}/>
                    <img className = 'lol' src={CRM_grey} alt='' style={windowWidth > 768 ? (darkMode ? {display: 'flex'} : {display: 'none'}):{display: 'none'}}/>
                    <img className = 'lol' src={CRM_black} alt='' style={windowWidth > 768 ? (darkMode ? {display: 'none'} : {display: 'flex'}):{display: 'none'}}/>

                </ContainerScroll>
            </div>
        </div>
    );
}

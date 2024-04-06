import React, { useEffect, useState } from "react";
import './styles.scss'
import '../../index.css'
import first from '../../images/1.png'
import second from '../../images/2.png'
import third from '../../images/3.png'
import fourth from '../../images/30.png'
import fifth from '../../images/60.png'
import fifthPhone from '../../images/4.png'


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
                <h1>Optimize <span>non-stop</span><br/>Check your profits
                    <span className='text_ml'>in a minute</span>
                </h1>
                <div className='crm_collage'>
                    <div className='top_collage'>
                        <img className = 'collage_bar' src={first} alt=''/>
                        <div className='right_top'>
                            <img src={second} alt='' style={{alignSelf: 'end', marginBottom: '5%'}}/>
                            <img src={third} alt='' style={{alignSelf: 'end'}}/>
                        </div>
                    </div>
                    <div className='bottom_collage'>
                        <img src={fourth} alt='' style={{marginRight: '5%', width: '60%'}}/>
                        <img className = 'fifth' src={fifth} alt='' style={{width: '35%'}}/>
                        <img className = 'fifth_phone' src={fifthPhone} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
}

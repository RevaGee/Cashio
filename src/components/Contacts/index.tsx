import React from "react";
import "./styles.scss";
import {useTranslation} from "react-i18next";



export const Contacts = () => {

    const {t} = useTranslation();

    const handleTelegramLink = () => {
        window.open('https://t.me/zheka_revor', '_blank');
    };

    return (
        <div className='contacts'>
            <div className='left_position'>
                <div className='head_text'>
                    <div className='head_head'>
                        <p>WE’RE JUST A MESSAGE AWAY</p>
                    </div>
                    <div className='head_description'>
                        <h1>Contact Us</h1>
                    </div>
                </div>
                <div className='overlay_box '>
                    <div className='under_text'>
                        <div className='under_head'>
                            <p>Reach out to our team</p>
                        </div>
                        <div className='under_description'>
                            <p> We’re here to answer your questions and provide assistance.</p>
                        </div>
                        <button className='demo_contacts' onClick={handleTelegramLink}>
                            {t('Get a free demo')}
                        </button>
                    </div>
                </div>
            </div>
            <div className='right_position'>
                <div className='image_placeholder'></div>
            </div>
        </div>
    );
};
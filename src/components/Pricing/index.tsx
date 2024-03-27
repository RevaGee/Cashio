import React from "react";
import './styles.scss'
import {useTranslation} from "react-i18next";

export const Pricing = () => {
    const {t} = useTranslation()

    const handleTelegramLink = () => {
        window.open('https://t.me/zheka_revor', '_blank');
    };

    return (
        <div className='pricing_content'>
            <div className='box'>
                <div className='overlays_box'>
                    <div className='under_head'>
                        <p>{t('contacts.Reach out to our team')}</p>
                    </div>
                    <div className='under_description'>
                        <p> {t('contacts.We’re here to answer your questions and provide assistance')}.</p>
                    </div>
                    <button className='demo_contacts' onClick={handleTelegramLink}>
                        {t('Get a free demo')}
                    </button>
                </div>
            </div>
            <div className='box'>
                <div className='overlays_box'>
                    <div className='under_head'>
                        <p>{t('contacts.Reach out to our team')}</p>
                    </div>
                    <div className='under_description'>
                        <p> {t('contacts.We’re here to answer your questions and provide assistance')}.</p>
                    </div>
                    <button className='demo_contacts' onClick={handleTelegramLink}>
                        {t('Get a free demo')}
                    </button>
                </div>
            </div>
            <div className='box'>
                <div className='overlays_box'>
                    <div className='under_head'>
                        <p>{t('contacts.Reach out to our team')}</p>
                    </div>
                    <div className='under_description'>
                        <p> {t('contacts.We’re here to answer your questions and provide assistance')}.</p>
                    </div>
                    <button className='demo_contacts' onClick={handleTelegramLink}>
                        {t('Get a free demo')}
                    </button>
                </div>
            </div>
        </div>
    );
}

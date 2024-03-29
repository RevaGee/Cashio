import React from "react";
import './styles.scss'
import {useTranslation} from "react-i18next";

export const Pricing = () => {
    const {t} = useTranslation()

    const handleTelegramLink = () => {
        window.open('https://t.me/zheka_revor', '_blank');
    };

    return (
        <div className = 'pricing'>
            <div className = 'pricing_media'>
                <div className = 'pricing_text'>
                    <h4>AFFORDABLE SOLUTION, UNMATCHED VALUE</h4>
                    <h1>CHOOSE YOUR PLAN</h1>
                    <p>Transparent pricing plans with no surprise fees</p>
                </div>
                <div className='pricing_content'>
                    <div className='overlays_box'>
                        <div className='under_head_pricing'>
                            <h1>$650</h1>
                        </div>
                        <div className='month'>
                            <p> {t('pricing.month1')}</p>
                        </div>
                        <div className='under_description_pricing'>
                            <p> {t('pricing.billed1')}</p>
                        </div>
                        <button className='demo_contacts_pricing' onClick={handleTelegramLink}>
                            {t('Get started')}
                        </button>
                    </div>
                    <div className='overlays_box_3'>
                        <div className='under_head_pricing_3'>
                            <h1>$1700</h1>
                        </div>
                        <div className='month_3'>
                            <p> {t('pricing.month3')}</p>
                        </div>
                        <div className='under_description_pricing_3'>
                            <p> {t('pricing.billed3')}</p>
                        </div>
                        <button className='demo_contacts_pricing_main' onClick={handleTelegramLink}>
                            {t('Get started')}
                        </button>
                    </div>
                    <div className='overlays_box'>
                        <div className='under_head_pricing'>
                            <h1>$2900</h1>
                        </div>
                        <div className='month'>
                            <p> {t('pricing.month6')}</p>
                        </div>
                        <div className='under_description_pricing'>
                            <p> {t('pricing.billed6')}</p>
                        </div>
                        <button className='demo_contacts_pricing' onClick={handleTelegramLink}>
                            {t('Get started')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

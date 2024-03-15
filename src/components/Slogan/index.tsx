import React from "react";
import Imgslogan from "../../images/Imgslogan.png"
import {useTranslation} from "react-i18next";
import '../Slogan/style.scss'

export const Slogan = () => {
    const {t} = useTranslation();

    const handleTelegramLink = () => {
        window.open('https://t.me/zheka_revor', '_blank');
    };

    return (
        <div className="slogan">
            <div className="slogan_content">
                <div className="img_and_text">
                    <div className="slogan_text">
                        <div className="slogan_head_text">
                            <p>{t('Making')}</p>
                            <span>{t('Money')}</span>
                            <p>{t('Making Money')}</p>
                        </div>
                        <div className="signature">
                            <a>{t('Professionals')}</a>
                        </div>
                        <div>
                            <button className='demo_slogan' onClick={handleTelegramLink}>
                                {t('Get a free demo')}
                            </button>
                            <div className="info_text">
                                <p>250K+</p>

                                <p>500+</p>

                                <p>24/7</p>
                            </div>
                        </div>
                    </div>
                    <div className="slogan_image">
                        <img src={Imgslogan} alt="" className="img_slogan"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
import React from "react";
import ImgSlogan from "../../images/Imgslogan.png"
import {useTranslation} from "react-i18next";
import '../Slogan/style.scss'

export const Slogan = () => {
    const {t} = useTranslation();

    const handleTelegramLink = () => {
        window.open('https://t.me/zheka_revor', '_blank');
    };

    return (
        <div className="slogan">
            <div className="img_and_text">
                <div className="slogan_text">
                    <div>
                        <div className="slogan_head_text" >
                            <p>{t('Making')} <span>{t('Money')}</span> {t('Making Money')}</p>
                        </div>
                        <div className="signature">
                            <a>{t('Professionals')}</a>
                        </div>
                    </div>
                    <div className = 'button_digits'>
                        <button className='demo_slogan' onClick={handleTelegramLink}>
                            {t('Get a free demo')}
                        </button>
                        <div className="info_text">
                            <div className = "digits"><h1>250K+</h1><p>Automated processes</p></div>
                            <div className = "digits digits_margin"><h1>500+</h1><p>Full financial reports</p></div>
                            <div className = "digits"><h1>24/7</h1><p>Live support</p></div>
                        </div>
                    </div>
                </div>
                <div className="slogan_image">
                    <img src={ImgSlogan} alt="" className="img_slogan"/>
                </div>
            </div>
        </div>
    );
}
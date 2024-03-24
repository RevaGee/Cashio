import React from "react";
import ImgSlogan from "../../images/Imgslogan.png"
import {useTranslation} from "react-i18next";
import '../Slogan/style.scss'
import { motion } from "framer-motion";
import {useInView} from "react-intersection-observer";

export const Slogan = () => {
    const {t} = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleTelegramLink = () => {
        window.open('https://t.me/zheka_revor', '_blank');
    };

    return (
        <div className="slogan" ref={ref}>
            <div className="img_and_text">
                <motion.div
                    className="slogan_text"
                    initial={{opacity: 0}}
                    animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 1000}}
                    transition={{duration: 1}}
                >
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
                            <div className = "digits"><h1>250K+</h1><p>{t('anderDigits.anderDigits1')}</p></div>
                            <div className = "digits digits_margin"><h1>500+</h1><p>{t('anderDigits.anderDigits2')}</p></div>
                            <div className = "digits"><h1>24/7</h1><p>{t('anderDigits.anderDigits3')}</p></div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="slogan_image"
                    initial={{opacity: 0, x: 200}}
                    animate={{opacity: inView ? 1 : 0, x: inView ? 0 : 200}}
                    transition={{duration: 1}}
                >
                    <img src={ImgSlogan} alt="" className="img_slogan"/>
                </motion.div>
            </div>
        </div>
    );
}
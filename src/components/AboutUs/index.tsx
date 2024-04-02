import {motion} from "framer-motion";
import React from "react";
import './styles.scss'
import {useInView} from "react-intersection-observer";
import {useTranslation} from "react-i18next";

export const AboutUs = () => {
    const {t} = useTranslation();

    const [ref_about_img, inView_about_img] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [ref_about_text, inView_about_text] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <div className='about_us' id="AboutUs">
            <div className='about_us_media'>
                <motion.div
                    ref={ref_about_img}
                    className='about_us_img'
                    initial={{opacity: 0, x: 0}}
                    animate={{opacity: inView_about_img ? 1 : 0, x: inView_about_img ? 0 : -150}}
                    transition={{duration: 1}}
                />
                <motion.div
                    ref={ref_about_text}
                    className='about_us_text'
                    initial={{opacity: 0, x: 0}}
                    animate={{opacity: inView_about_text ? 1 : 0, x: inView_about_text ? 0 : 200}}
                    transition={{duration: 1}}
                >
                    <h4>{t('AboutUs.slogan')}</h4>
                    <h1>{t('AboutUs.us')}</h1>
                    <p>{t('AboutUs.CRM')}</p>
                </motion.div>
            </div>
        </div>
    );
}
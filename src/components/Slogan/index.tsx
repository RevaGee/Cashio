import React, {useEffect} from "react";
import ImgSlogan from "../../images/Imgslogan.png"
import {useTranslation} from "react-i18next";
import '../Slogan/style.scss'
import {animate, motion, useMotionValue, useTransform} from "framer-motion";
import {useInView} from "react-intersection-observer";
import ParticlesComponent from "../Paralax/particles";

export const Slogan = () => {
    const {t} = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    // Disable ESLint for the following lines
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const counts = [250, 500, 24, 7].map(initialValue => useMotionValue(0));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const roundedValues = counts.map(count => useTransform(count, Math.round));

    useEffect(() => {
        const animations = counts.map((count, index) => animate(count, [250, 500, 24, 7][index], { duration: 2 }));
        return () => animations.forEach(animation => animation.stop());
    }, [counts]);


    const handleTelegramLink = () => {
        window.open('https://t.me/Cashio_Mngr', '_blank');
    };

    return (
        <div className="slogan" ref={ref} id="Slogan">
            <div className="img_and_text">
                <motion.div
                    className="slogan_text"
                    initial={{opacity: 0, top: 0, x: 0}}
                    animate={{opacity: inView ? 1 : 0, x: inView ? 0 : -2000}}
                    transition={{duration: 1}}
                >
                    <div>
                        <div className="slogan_head_text">
                            <p>{t('Making')} <span>{t('Money')}</span> {t('Making Money')}</p>
                        </div>
                        <div className="signature">
                            <a>{t('Professionals')}</a>
                        </div>
                    </div>
                    <div className='button_digits'>
                        <button className='demo_slogan' onClick={handleTelegramLink}>
                            {t('Get a free demo')}
                        </button>
                        <div className="info_text">
                            <div className="digits">
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                    <motion.h1
                                        className={roundedValues[0] ? 'rounded' : ''}>{roundedValues[0]}</motion.h1>
                                    <h1>+</h1>
                                </div>
                                <p>{t('anderDigits.anderDigits1')}</p>
                            </div>
                            <div className="digits digits_margin">
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                    <motion.h1
                                        className={roundedValues[1] ? 'rounded' : ''}>{roundedValues[1]}</motion.h1>
                                    <h1>+</h1>
                                </div>
                                <p>{t('anderDigits.anderDigits2')}</p>
                            </div>
                            <div className="digits">
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                    <motion.h1
                                        className={roundedValues[2] ? 'rounded' : ''}>{roundedValues[2]}</motion.h1>
                                    <h1>/</h1>
                                    <motion.h1
                                        className={roundedValues[3] ? 'rounded' : ''}>{roundedValues[3]}</motion.h1>
                                </div>
                                <p>{t('anderDigits.anderDigits3')}</p></div>
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
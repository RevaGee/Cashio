import React, { useEffect, useState } from "react";
import './styles.scss'
import '../../index.css'
import first from '../../images/1.png'
import second from '../../images/2.png'
import third from '../../images/3.png'
import fourth from '../../images/30.png'
import fifth from '../../images/60.png'
import fifthPhone from '../../images/4.png'
import { motion } from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useTranslation} from "react-i18next";


export const Crm = () => {
    const {t} = useTranslation();
    const [width, setWindowWidth] = useState(window.innerWidth);
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
    const [ref_crm_text, inView_crm_text] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [ref_crm_1, inView_crm_1] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [ref_crm_2, inView_crm_2] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [ref_crm_3, inView_crm_3] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [ref_crm_4, inView_crm_4] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    const [ref_crm_5, inView_crm_5] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    const [ref_crm_6, inView_crm_6] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div className='crm'>
            <div className='crm_media'>
                <motion.h1
                    ref={ref_crm_text}
                    initial={{opacity: 0, x: 0, y: 0}}
                    animate={{opacity: inView_crm_text ? 1 : 0, x: inView_crm_text ? (width < 768 ? 0 : 0) : -130}}
                    transition={{duration: 1}}
                >
                    {t('CRM.optimize')} <span>{t('CRM.non-stop')}</span><br/>{t('CRM.check')}<span className='text_ml'>{t('CRM.inAMinute')}</span>
                </motion.h1>
                <div className='crm_collage'>
                    <div className='top_collage'>
                        <motion.img
                            ref={ref_crm_1}
                            className = 'collage_bar'
                            src={first} alt=''
                            initial={{opacity: 0, x: 0}}
                            animate={{opacity: inView_crm_1 ? 1 : 0, x: inView_crm_1 ? 0 : -100}}
                            transition={{duration: 1}}
                        />
                        <div className='right_top'>
                            <motion.img
                                ref={ref_crm_2}
                                src={second} alt=''
                                style={{alignSelf: 'end', marginBottom: '5%'}}
                                initial={{opacity: 0, x: 0, y: 0}}
                                animate={{opacity: inView_crm_2 ? 1 : 0, x: width < 768 ? (inView_crm_2 ? 0 : -100) : (inView_crm_2 ? 0 : 100), y: width < 768 ? (inView_crm_2 ? 0 : 0) : 0}}
                                transition={{duration: 1}}
                            />
                            <motion.img
                                ref={ref_crm_3}
                                src={third} alt=''
                                style={{alignSelf: 'end'}}
                                initial={{opacity: 0, x: 0}}
                                animate={{opacity: inView_crm_3 ? 1 : 0, x: inView_crm_3 ? 0 : 130}}
                                transition={{duration: 1}}
                            />
                        </div>
                    </div>
                    <div className='bottom_collage'>
                        <motion.img
                            ref={ref_crm_4}
                            src={fourth} alt=''
                            style={{marginRight: '5%', width: '60%'}}
                            initial={{opacity: 0, y: 0, x: 0}}
                            animate={{opacity: inView_crm_4 ? 1 : 0, x: inView_crm_4 ? 0 : -130, y: width < 768 ? (inView_crm_4 ? 0 : 0) : (inView_crm_4 ? 0 : 130)}}
                            transition={{duration: 1}}
                        />
                        <motion.img
                            ref={ref_crm_5}
                            className = 'fifth'
                            src={fifth} alt='' style={{width: '35%'}}
                            initial={{opacity: 0, y: 0, x: 0}}
                            animate={{opacity: inView_crm_5 ? 1 : 0, y: inView_crm_5 ? 0 : 130, x: inView_crm_5 ? 0 : 130}}
                            transition={{duration: 1}}
                        />
                        <motion.img
                            ref={ref_crm_6}
                            className = 'fifth_phone'
                            src={fifthPhone} alt=''
                            initial={{opacity: 0, x: 0}}
                            animate={{opacity: inView_crm_6 ? 1 : 0, x: inView_crm_6 ? 0 : 130}}
                            transition={{duration: 1}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

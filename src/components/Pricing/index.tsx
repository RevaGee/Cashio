import React from "react";
import './styles.scss'
import {useTranslation} from "react-i18next";
import Arrow from '../../images/icons/output-onlinegiftools.gif'
import {useInView} from "react-intersection-observer";
import { motion } from "framer-motion";


export const Pricing = () => {
    const {t} = useTranslation();
    const [ref_pricing_text, inView_pricing_text] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [ref_pricing_sticker, inView_pricing_sticker] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [ref_pricing_1, inView_pricing_1] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [ref_pricing_2, inView_pricing_2] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [ref_pricing_3, inView_pricing_3] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const handleTelegramLink = () => {
        window.open('https://t.me/Cashio_Mngr', '_blank');
    };

    return (
        <div className = 'pricing' id="Pricing">
            <div className = 'pricing_media'>
                <div className='pricing_top'>
                    <motion.div
                        ref={ref_pricing_text}
                        className='pricing_text'
                        initial={{opacity: 0, x: 0}}
                        animate={{opacity: inView_pricing_text ? 1 : 0, x: inView_pricing_text ? 0 : -200}}
                        transition={{duration: 1}}
                    >
                        <h4>{t('pricing.afford')}</h4>
                        <h1>{t('pricing.plan')}</h1>
                        <p>{t('pricing.transparent')}</p>
                    </motion.div>
                    <motion.button
                        ref={ref_pricing_sticker}
                        className = 'pricing_top_btn' onClick={handleTelegramLink}
                        initial={{opacity: 0, x: 0}}
                        animate={{opacity: inView_pricing_sticker ? 1 : 0, x: inView_pricing_sticker ? 0 : 200}}
                        transition={{duration: 1}}
                    >
                        {t('pricing.14days')}<img src={Arrow} alt='' className='gif' />
                    </motion.button>
                </div>
                <div className='pricing_content'>
                    <motion.div
                        ref={ref_pricing_1}
                        className='overlays_box'
                        initial={{opacity: 0, x: 0}}
                        animate={{opacity: inView_pricing_1 ? 1 : 0, x: inView_pricing_1 ? 0 : -150}}
                        transition={{duration: 1}}
                    >
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
                            {t('pricing.getStarted')}
                        </button>
                    </motion.div>
                    <motion.div
                        ref={ref_pricing_2}
                        className='overlays_box_3'
                        initial={{opacity: 0, y: 0}}
                        animate={{opacity: inView_pricing_2 ? 1 : 0, y: inView_pricing_2 ? 0 : 200}}
                        transition={{duration: 1}}
                    >
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
                            {t('pricing.getStarted')}
                        </button>
                    </motion.div>
                    <motion.div
                        ref={ref_pricing_3}
                        className='overlays_box'
                        initial={{opacity: 0, x: 0}}
                        animate={{opacity: inView_pricing_3 ? 1 : 0, x: inView_pricing_3 ? 0 : 150}}
                        transition={{duration: 1}}
                    >
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
                            {t('pricing.getStarted')}
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

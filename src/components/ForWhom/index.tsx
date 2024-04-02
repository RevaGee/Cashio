import React from "react";
import './styles.scss'
import Facebook from '../../images/icons/Facebook.png'
import Instagram from '../../images/icons/Instagram.png'
import GoogleAds from '../../images/icons/GoogleAds.png'
import YouTube from '../../images/icons/YouTube.png'
import TikTok from '../../images/icons/TikTok.png'
import Taboola from '../../images/icons/Taboola.png'
import Telegram from '../../images/icons/Telegram.png'
import Snapchat from '../../images/icons/Snapchat.png'
import Bing from '../../images/icons/Bing.png'
import Yahoo from '../../images/icons/Yahoo.png'
import Amazon from '../../images/icons/Amazon.png'
import Linkedin from '../../images/icons/Linkedin.png'
import {HeartSvg} from '../../images/icons/HeartSvg'
import {PokerTipSvg} from '../../images/icons/PokerTipSvg'
import {CartSvg} from '../../images/icons/CartSvg'
import {BitcoinSvg} from "../../images/icons/BitcoinSvg";
import { motion } from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useTranslation} from "react-i18next";
export const ForWhom = () => {
    const {t} = useTranslation()

    const [ref_for_whom_text, inView_for_whom_text] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [ref_for_whom_1, inView_for_whom_1] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [ref_for_whom_2, inView_for_whom_2] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [ref_for_whom_3, inView_for_whom_3] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [ref_for_whom_4, inView_for_whom_4] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return(
        <div className = 'for_whom' id ="for_whom">
            <div className = 'for_whom_media'>
                <motion.div
                    ref={ref_for_whom_text}
                    className = 'for_whom_text'
                    initial={{opacity: 0, x: 0}}
                    animate={{opacity: inView_for_whom_text ? 1 : 0, x: inView_for_whom_text ? 0 : -200}}
                    transition={{duration: 1}}
                >
                    <h1>{t('ForWhomCaps.forWhomHead')}</h1>
                </motion.div>
                <div className='for_whom_blocks'>
                    <motion.div
                        ref={ref_for_whom_1}
                        className='block_crypto block'
                        initial={{opacity: 0, y: 0}}
                        animate={{opacity: inView_for_whom_1 ? 1 : 0, y: inView_for_whom_1 ? 0 : 200}}
                        transition={{duration: 1}}
                    >
                        <BitcoinSvg/>
                        <h4>Crypto</h4>
                        <div className='block_img'>
                            <div className='img_bg'><img src={Instagram} alt=''/></div>
                            <div className='img_bg'><img src={Facebook} alt=''/></div>
                            <div className='img_bg'><img src={GoogleAds} alt=''/></div>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref_for_whom_2}
                        className='block_crypto block'
                        initial={{opacity: 0, y: 0}}
                        animate={{opacity: inView_for_whom_2 ? 1 : 0, y: inView_for_whom_2 ? 0 : 200}}
                        transition={{duration: 1.2}}
                    >
                        <HeartSvg/>
                        <h4>Dating</h4>
                        <div className='block_img'>
                            <div className='img_bg'><img src={YouTube} alt=''/></div>
                            <div className='img_bg'><img src={TikTok} alt=''/></div>
                            <div className='img_bg'><img src={Taboola} alt=''/></div>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref_for_whom_3}
                        className='block_crypto block'
                        initial={{opacity: 0, y: 0}}
                        animate={{opacity: inView_for_whom_3 ? 1 : 0, y: inView_for_whom_3 ? 0 : 200}}
                        transition={{duration: 1.4}}
                    >
                        <PokerTipSvg/>
                        <h4>Igaming</h4>
                        <div className='block_img'>
                            <div className='img_bg'><img src={Telegram} alt=''/></div>
                            <div className='img_bg'><img src={Snapchat} alt=''/></div>
                            <div className='img_bg'><img src={Bing} alt=''/></div>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref_for_whom_4}
                        className='block_crypto block'
                        initial={{opacity: 0, y: 0}}
                        animate={{opacity: inView_for_whom_4 ? 1 : 0, y: inView_for_whom_4 ? 0 : 200}}
                        transition={{duration: 1.6}}
                    >
                        <CartSvg/>
                        <h4>E-commerce</h4>
                        <div className='block_img'>
                            <div className='img_bg'><img src={Yahoo} alt=''/></div>
                            <div className='img_bg'><img src={Amazon} alt=''/></div>
                            <div className='img_bg'><img src={Linkedin} alt=''/></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

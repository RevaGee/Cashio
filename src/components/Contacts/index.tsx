import React from "react";
import "./styles.scss";
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeadset} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {useInView} from "react-intersection-observer";



export const Contacts = () => {

    const {t} = useTranslation();

    const handleTelegramLink = () => {
        window.open('https://t.me/Cashio_Mngr', '_blank');
    };
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [ref_text, inView_text] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [ref_block, inView_block] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className='contacts' ref={ref} id="contact">
            <div className = 'contacts_media' >
                <div className='left_position'>
                    <motion.div
                        ref={ref_text}
                        className='head_text'
                        initial={{opacity: 0, x: 0}}
                        animate={{opacity: inView_text ? 1 : 0, x: inView_text ? 0 : -200}}
                        transition={{duration: 1}}
                    >
                        <div className='head_head'>
                            <p>{t('contacts.WE’RE JUST A MESSAGE AWAY')}</p>
                        </div>
                        <div className='head_description'>
                            <h1>{t('contacts.Contact Us')}</h1>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        className='overlay_box'
                        initial={{opacity: 0, x: 0}}
                        animate={{opacity: inView ? 1 : 0, x: inView ? 0 : 200}}
                        transition={{duration: 1}}
                    >
                        <div className='under_text'>
                            <FontAwesomeIcon icon={faHeadset}/>
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
                    </motion.div>
                </div>
                <motion.div
                    ref={ref_block}
                    className='image_placeholder'
                    initial={{opacity: 0, x: 0}}
                    animate={{opacity: inView_block ? 1 : 0, x: inView_block ? 0 : -100}}
                    transition={{duration: 1}}
                />
            </div>
        </div>
    );
};
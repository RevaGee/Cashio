import { motion } from "framer-motion";
import React from "react";
import './styles.scss'
import {useInView} from "react-intersection-observer";
export const AboutUs = () => {
    const [ref_about_img, inView_about_img] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [ref_about_text, inView_about_text] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return(
        <div className = 'about_us'>
            <div className = 'about_us_media'>
                <motion.div
                    ref={ref_about_img}
                    className = 'about_us_img'
                    initial={{opacity: 0, x: 0}}
                    animate={{opacity: inView_about_img ? 1 : 0, x: inView_about_img ? 0 : -150}}
                    transition={{duration: 1}}
                />
                <motion.div
                    ref={ref_about_text}
                    className = 'about_us_text'
                    initial={{opacity: 0, x: 0}}
                    animate={{opacity: inView_about_text ? 1 : 0, x: inView_about_text ? 0 : 200}}
                    transition={{duration: 1}}
                >
                    <h4>BY PROFESSIONALS FOR PROFESSIONALS</h4>
                    <h1>ABOUT US</h1>
                    <p>
                        CRM created by the arbitration team (a product from professionals for professionals), taking
                        into account all the pains of the media-buying team and affiliate network.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Collage } from "./Collage";
import './styles.scss';
import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import Swiper from 'swiper';
import 'swiper/css';
import { motion } from "framer-motion";
import {
    faChartBar,
    faChartPie,
    faChartSimple,
    faEye,
    faGear,
    faHeadset, faMoneyCheckDollar,
    faRecycle, faReplyAll, faShieldHalved, faUserGroup,
    faUserSecret
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Collages = () => {
    const [showRightButton, setShowRightButton] = useState(true);
    const [showLeftButton, setShowLeftButton] = useState(true);
    const sliderRef = useRef<Slider>(null);
    const {t} = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [ref_2, inView_2] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const RightArrow = () => (
        <div className={showRightButton ? "right_arrow" : "right_arrow_hide"} onClick={() => sliderRef.current?.slickNext()} />
    );

    const LeftArrow = () => (
        <div className={showLeftButton ? "left_arrow" : "left_arrow_hide"} onClick={() => sliderRef.current?.slickPrev()} />
    );

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 6,
        rows: 2,
        afterChange: (index: number) => {
            if (index === 0) {
                setShowLeftButton(true);
                setShowRightButton(true);
            } else {
                setShowLeftButton(true);
                setShowRightButton(true);
            }
        },
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    //adaptiveHeight: true,
                    dots: true,
                    autoplaySpeed: 4000,
                    autoplay: true,
                    pauseOnDotsHover: true,
                    pauseOnFocus: true,
                    pauseOnHover: true,
                    afterChange: (index: number) => {
                        if (index === 0) {
                            setShowLeftButton(true);
                        } else {
                            setShowLeftButton(true);
                        }
                        if(index >= 3){
                            setShowRightButton(true);
                        }else{
                            setShowRightButton(true);
                        }
                    },
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    infinite: true,
                    initialSlide: 0,
                    //adaptiveHeight: true,
                    dots: true,
                    autoplaySpeed: 4000,
                    autoplay: true,
                    pauseOnDotsHover: true,
                    pauseOnFocus: true,
                    pauseOnHover: true,
                    afterChange: (index: number) => {
                        if (index === 0) {
                            setShowLeftButton(true);
                        } else {
                            setShowLeftButton(true);
                        }
                        if(index >= 10){
                            setShowRightButton(true);
                        }else{
                            setShowRightButton(true);
                        }
                    },
                }
            },
        ]
    };


    return (
        <div className = 'media_slider' id="Collages">
            <div className = 'collages' ref={ref} >
                <motion.div
                    className = 'text_buttons'
                    ref={ref}
                    animate={{opacity: inView ? 1 : 0, x: inView ? 0 : -200}}
                    transition={{duration: 0.5}}
                >
                    <div className = 'collages_text'>
                        <p>{t('Collages.collageSlogan')}</p>
                        <h1>{t('Collages.bigCollage')}</h1>
                    </div>
                    <div className = 'collages_buttons'>
                        <RightArrow />
                        <LeftArrow />
                    </div>
                </motion.div>
                <motion.div
                    className='slider-wrapper'
                    ref={ref_2}
                    initial={{opacity: 0}}
                    animate={{opacity: inView_2 ? 1 : 0, y: inView_2 ? 0 : 200}}
                    transition={{duration: 0.5}}
                >
                    <div className='slider-container'>
                        <Slider ref={sliderRef} {...settings}>
                            <Collage
                                image={faChartPie}
                                title = {t('Reports & Insights')}
                                description={t('text.Reports & Insights text')}
                            />
                            <Collage
                                image={faChartSimple}
                                title={t('Real-Time Stats')}
                                description={t('text.Real-Time Stats text')}
                            />
                            <Collage
                                image={faUserSecret}
                                title={t("Confidence")}
                                description={t("text.Confidence text")}
                            />
                            <Collage
                                image={faEye}
                                title={t("Tracking & Atribution")}
                                description={t("text.Tracking & Atribution text")}
                            />
                            <Collage
                                image={faGear}
                                title={t("Automation")}
                                description={t("text.Automation text")}
                            />
                            <Collage
                                image={faRecycle}
                                title={t("Integrations")}
                                description={t("text.Integrations text")}
                            />
                            <Collage
                                image={faHeadset}
                                title={t("Теch support")}
                                description={t("text.Теch support text")}
                            />
                            <Collage
                                image={faShieldHalved}
                                title={t("Anti-Fraud Protection")}
                                description={t("text.Anti-Fraud Protection text")}
                            />
                            <Collage
                                image={faUserGroup}
                                title={t("Workspaces & Multi-User Access")}
                                description={t("text.Workspaces & Multi-User Access text")}
                            />
                            <Collage
                                image={faChartBar}
                                title={t("Multi-Dimensional Reporting")}
                                description={t("text.Multi-Dimensional Reporting text")}
                            />
                            <Collage
                                image={faMoneyCheckDollar}
                                title={t("Multi-Cost and Payout Tracking")}
                                description={t("text.Multi-Cost and Payout Tracking text")}
                            />
                            <Collage
                                image={faReplyAll}
                                title={t("Redirect Methods")}
                                description={t("text.Redirect Methods text")}
                            />
                        </Slider>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};





import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Collage } from "./Collage";
import { CollageSvg } from "../../images/icons/Stats";
import { Security } from "../../images/icons/Security";
import { Reports } from "../../images/icons/Reports";
import { Tracking } from "../../images/icons/Tracking";
import { Automize } from "../../images/icons/Automize";
import { Integration } from "../../images/icons/Integration";
import { Support } from "../../images/icons/Support";
import { Confidence } from "../../images/icons/Confidence";
import { MultipleUser } from "../../images/icons/MultipleUser";
import { Reporting } from "../../images/icons/Reporting";
import { Payout } from "../../images/icons/Payout";
import { Redirect } from "../../images/icons/Redirect";
import './styles.scss';
import {useTranslation} from "react-i18next";

export const Collages = () => {
    const [showRightButton, setShowRightButton] = useState(true);
    const [showLeftButton, setShowLeftButton] = useState(true);
    const sliderRef = useRef<Slider>(null);
    const {t} = useTranslation();
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
        slidesToScroll: 3,
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
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    adaptiveHeight: true,
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
                    adaptiveHeight: true,
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
        <div className = 'collages'>
            <div className = 'text_buttons'>
                <div className = 'collages_text'>
                    <p>ADAPT, UPGRADE, SUCCEED</p>
                    <h1>HOW CAM CASHIO HELP GROWN YOUR BUSINESS?</h1>
                </div>
                <div className = 'collages_buttons'>
                    <RightArrow />
                    <LeftArrow />
                </div>
            </div>
            <div className='slider-wrapper'>
                <div className='slider-container'>
                    <Slider ref={sliderRef} {...settings}>
                        <Collage
                            image={<Reports/>}
                            title = {t('Reports & Insights')}
                            description={t('text.Reports & Insights text')}
                        />
                        <Collage
                            image={<CollageSvg/>}
                            title={t('Real-Time Stats')}
                            description={t('text.Real-Time Stats text')}
                        />
                        <Collage
                            image={<Confidence/>}
                            title={t("Confidence")}
                            description={t("text.Confidence text")}
                        />
                        <Collage
                            image={<Tracking/>}
                            title={t("Tracking & Atribution")}
                            description={t("text.Tracking & Atribution text")}
                        />
                        <Collage
                            image={<Automize/>}
                            title={t("Automation")}
                            description={t("text.Automation text")}
                        />
                        <Collage
                            image={<Integration/>}
                            title={t("Integrations")}
                            description={t("text.Integrations text")}
                        />
                        <Collage
                            image={<Support/>}
                            title={t("Теch support")}
                            description={t("text.Теch support text")}
                        />
                        <Collage
                            image={<Security/>}
                            title={t("Anti-Fraud Protection")}
                            description={t("text.Anti-Fraud Protection text")}
                        />
                        <Collage
                            image={<MultipleUser/>}
                            title={t("Workspaces & Multi-User Access")}
                            description={t("text.Workspaces & Multi-User Access text")}
                        />
                        <Collage
                            image={<Reporting/>}
                            title={t("Multi-Dimensional Reporting")}
                            description={t("text.Multi-Dimensional Reporting text")}
                        />
                        <Collage
                            image={<Payout/>}
                            title={t("Multi-Cost and Payout Tracking")}
                            description={t("text.Multi-Cost and Payout Tracking text")}
                        />
                        <Collage
                            image={<Redirect/>}
                            title={t("Redirect Methods")}
                            description={t("text.Redirect Methods text")}
                        />
                    </Slider>
                </div>
            </div>
        </div>
    );
};





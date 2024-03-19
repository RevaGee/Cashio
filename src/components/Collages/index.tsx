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
    const [showLeftButton, setShowLeftButton] = useState(false);
    const sliderRef = useRef<Slider>(null);
    const {t} = useTranslation();
    const RightArrow = () => (
        <div className={showRightButton ? "right_arrow" : "right_arrow_hide"} onClick={() => sliderRef.current?.slickNext()} />
    );

    const LeftArrow = () => (
        <div className={showLeftButton ? "left_arrow" : "left_arrow_hide"} onClick={() => sliderRef.current?.slickPrev()} />
    );

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
        afterChange: (index: number) => {
            if (index === 0) {
                setShowLeftButton(false);
                setShowRightButton(true);
            } else if(index > 0 && index !== 6){
                setShowLeftButton(true);
            }else{
                setShowRightButton(false);
            }
        },
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    initialSlide: 0
                }
            },
        ]
    };


    return (
        <div className='slider-wrapper'>
            <div className='slider-container'>
                <Slider ref={sliderRef} {...settings}>
                    <Collage
                        image={<Reports/>}
                        title = {t('Reports & Insights')}
                        description={t('Reports & Insights text')}
                    />
                    <Collage
                        image={<CollageSvg/>}
                        title={t('Real-Time Stats')}
                        description={t('Real-Time Stats text')}
                    />
                    <Collage
                        image={<Confidence/>}
                        title={t("Confidence")}
                        description={t("Confidence text")}
                    />
                    <Collage
                        image={<Tracking/>}
                        title={t("Tracking & Atribution")}
                        description={t("Tracking & Atribution text")}
                    />
                    <Collage
                        image={<Automize/>}
                        title={t("Automation")}
                        description={t("Automation text")}
                    />
                    <Collage
                        image={<Integration/>}
                        title={t("Integrations")}
                        description={t("Integrations text")}
                    />
                    <Collage
                        image={<Support/>}
                        title={t("Теch support")}
                        description={t("Теch support text")}
                    />
                    <Collage
                        image={<Security/>}
                        title={t("Anti-Fraud Protection")}
                        description={t("Anti-Fraud Protection text")}
                    />
                    <Collage
                        image={<MultipleUser/>}
                        title={t("Workspaces & Multi-User Access")}
                        description={t("Workspaces & Multi-User Access text")}
                    />
                    <Collage
                        image={<Reporting/>}
                        title={t("Multi-Dimensional Reporting")}
                        description={t("Multi-Dimensional Reporting text")}
                    />
                    <Collage
                        image={<Payout/>}
                        title={t("Multi-Cost and Payout Tracking")}
                        description={t("Multi-Cost and Payout Tracking text")}
                    />
                    <Collage
                        image={<Redirect/>}
                        title={t("Redirect Methods")}
                        description={t("Redirect Methods text")}
                    />
                </Slider>
            </div>
        </div>
    );
};





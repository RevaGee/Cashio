/*
import React, { useState } from "react";
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

const Collages = () => {
    const [showRightButton, setShowRightButton] = useState(true);
    const [showLeftButton, setShowLeftButton] = useState(false);
    let slider:any;

    const handleNext = () => {
        setShowRightButton(false);
        setShowLeftButton(true);
        slider.slickNext();
    };

    const handlePrev = () => {
        setShowRightButton(true);
        setShowLeftButton(false);
        slider.slickPrev();
    };
    // @ts-ignore
    const RightArrow = ({ onClick, showButton }) => (
        <div className={`right-arrow ${showButton ? '' : 'hidden'}`} onClick={onClick}>
            <Security/>
        </div>
    );

    // @ts-ignore
    const LeftArrow = ({ onClick, showButton }) => (
        <div className={`left-arrow ${showButton ? '' : 'hidden'}`} onClick={onClick}>
            <Security/>
        </div>
    );
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides at a time
        slidesToScroll: 3, // Scroll 3 slides at a time
        rows: 2, // Display 2 rows
        nextArrow: <RightArrow onClick={handleNext} showButton={showRightButton} />,
        prevArrow: <LeftArrow onClick={handlePrev} showButton={showLeftButton} />
    };


    return (
        <div className='slider-wrapper'>
            <div className='slider-container'>
                <Slider {...settings} ref={node => (slider = node)}>
                    <Collage
                        image={<Reports/>}
                        title={"Reports & Insights"}
                        description={"From personal experience, we have come to realize that the majority of losses in " +
                            "the sphere come from inattention, inaccurate and untimely analytics. Our goal was to optimize" +
                            " and simplify the analytics process for each division in the company to minimize the risk of" +
                            " losses and simplify the control of the company's indicators as much as possible"}
                    />
                    <Collage
                        image={<CollageSvg/>}
                        title={"Real-Time Stats"}
                        description={"We realize that this product is a tool for professionals and we give you the " +
                            "opportunity to make quality assessment as you need it." +
                            "Analyze baer/team/advertiser/geo/ofer/statuses/conversions/validity "}
                    />
                    <Collage
                        image={<Confidence/>}
                        title={"Confidence "}
                        description={"The system is completely secure and safe for the user. Your data belongs only to" +
                            " you. The security protocol protects against unauthorized logins and leaks. Even we as" +
                            " developers do not have access to your data without your knowledge"}
                    />
                    <Collage
                        image={<Tracking/>}
                        title={"Tracking & Atribution"}
                        description={"We pursue the principle of losslessness and transparency in traffic flow"}
                    />
                    <Collage
                        image={<Automize/>}
                        title={"Automation"}
                        description={"A lot of important metrics for the financier, affiliate/bizdev and management may" +
                            " be underestimated by the baer team and vice versa. Such connections are quite numerous and" +
                            " accounted for in our product implementation to easily work for profitability"}
                    />
                    <Collage
                        image={<Integration/>}
                        title={"Integrations"}
                        description={"Easy integration and technical support ensures security, anonymity, and timely " +
                            "fulfillment of requests"}
                    />
                    <Collage
                        image={<Support/>}
                        title={"Теch support"}
                        description={"Produced not just by the support service, but by a team of professionals who have " +
                            "developed this product and face your problems often enough to solve really difficult and" +
                            " painful problems"}
                    />
                    <Collage
                        image={<Security/>}
                        title={"Anti-Fraud Protection"}
                        description={"CRM constantly analyzes requests and filters out unwanted requests based on your " +
                            "parameters"}
                    />
                    <Collage
                        image={<MultipleUser/>}
                        title={"Workspaces & Multi-User Access"}
                        description={"Our system is an infrastructural solution with division into roles not only for " +
                            "qualitative and profitable functioning of the company but also chips like: tracking, status" +
                            " system for advertisers, block of targets and protection system against unauthorized logins"}
                    />
                    <Collage
                        image={<Reporting/>}
                        title={"Multi-Dimensional Reporting"}
                        description={"Detailed analytics on each of the team members, products, advertisers, which allows " +
                            "easy and objective decision making on optimizations of any level"}
                    />
                    <Collage
                        image={<Payout/>}
                        title={"Multi-Cost and Payout Tracking"}
                        description={"All possible spend types and payment models are taken into consideration while" +
                            " creating, making the system suitable for all available verticals"}
                    />
                    <Collage
                        image={<Redirect/>}
                        title={"Redirect Methods"}
                        description={"Prioritize, allocate, and re-allocate traffic at your personal discretion"}
                    />
                </Slider>
            </div>
        </div>
    );
}


*/
import React, { useState } from "react";
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

export const Collages = () => {
    const [showRightButton, setShowRightButton] = useState(true);
    const [showLeftButton, setShowLeftButton] = useState(false);
    let slider: any;

    const handleNext = () => {
        setShowRightButton(!showRightButton);
        slider.slickNext();
    };

    const handlePrev = () => {
        setShowRightButton(showRightButton);
        slider.slickPrev();
    };

    const RightArrow = ({ onClick }: any) => (
        <button className={showRightButton?'slick-arrow slick-next':''} onClick={onClick} />
    );

    const LeftArrow = ({ onClick }: any) => (
        <button className={showRightButton?'':'slick-arrow slick-next'} onClick={onClick} />
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        nextArrow: <RightArrow onClick={handleNext}/>,
        prevArrow: <LeftArrow onClick={handlePrev}/>
    };

    return (
        <div className='slider-wrapper'>
            <div className='slider-container'>
                <Slider {...settings} ref={node => (slider = node)}>
                    <Collage
                        image={<Reports/>}
                        title={"Reports & Insights"}
                        description={"From personal experience, we have come to realize that the majority of losses in " +
                            "the sphere come from inattention, inaccurate and untimely analytics. Our goal was to optimize" +
                            " and simplify the analytics process for each division in the company to minimize the risk of" +
                            " losses and simplify the control of the company's indicators as much as possible"}
                    />
                    <Collage
                        image={<CollageSvg/>}
                        title={"Real-Time Stats"}
                        description={"We realize that this product is a tool for professionals and we give you the " +
                            "opportunity to make quality assessment as you need it." +
                            "Analyze baer/team/advertiser/geo/ofer/statuses/conversions/validity "}
                    />
                    <Collage
                        image={<Confidence/>}
                        title={"Confidence "}
                        description={"The system is completely secure and safe for the user. Your data belongs only to" +
                            " you. The security protocol protects against unauthorized logins and leaks. Even we as" +
                            " developers do not have access to your data without your knowledge"}
                    />
                    <Collage
                        image={<Tracking/>}
                        title={"Tracking & Atribution"}
                        description={"We pursue the principle of losslessness and transparency in traffic flow"}
                    />
                    <Collage
                        image={<Automize/>}
                        title={"Automation"}
                        description={"A lot of important metrics for the financier, affiliate/bizdev and management may" +
                            " be underestimated by the baer team and vice versa. Such connections are quite numerous and" +
                            " accounted for in our product implementation to easily work for profitability"}
                    />
                    <Collage
                        image={<Integration/>}
                        title={"Integrations"}
                        description={"Easy integration and technical support ensures security, anonymity, and timely " +
                            "fulfillment of requests"}
                    />
                    <Collage
                        image={<Support/>}
                        title={"Теch support"}
                        description={"Produced not just by the support service, but by a team of professionals who have " +
                            "developed this product and face your problems often enough to solve really difficult and" +
                            " painful problems"}
                    />
                    <Collage
                        image={<Security/>}
                        title={"Anti-Fraud Protection"}
                        description={"CRM constantly analyzes requests and filters out unwanted requests based on your " +
                            "parameters"}
                    />
                    <Collage
                        image={<MultipleUser/>}
                        title={"Workspaces & Multi-User Access"}
                        description={"Our system is an infrastructural solution with division into roles not only for " +
                            "qualitative and profitable functioning of the company but also chips like: tracking, status" +
                            " system for advertisers, block of targets and protection system against unauthorized logins"}
                    />
                    <Collage
                        image={<Reporting/>}
                        title={"Multi-Dimensional Reporting"}
                        description={"Detailed analytics on each of the team members, products, advertisers, which allows " +
                            "easy and objective decision making on optimizations of any level"}
                    />
                    <Collage
                        image={<Payout/>}
                        title={"Multi-Cost and Payout Tracking"}
                        description={"All possible spend types and payment models are taken into consideration while" +
                            " creating, making the system suitable for all available verticals"}
                    />
                    <Collage
                        image={<Redirect/>}
                        title={"Redirect Methods"}
                        description={"Prioritize, allocate, and re-allocate traffic at your personal discretion"}
                    />
                </Slider>
            </div>
        </div>
    );
};



import React, { useState, useEffect } from "react";
import {ButtonArrow} from "../../images/icons/ButtonArrow";
import './style.scss'

const ArrowScroll: React.FC = () => {
    const [showScroll, setShowScroll] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const scrollProgressHandler = () => {
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.clientHeight;
        const fullHeight = document.documentElement.scrollHeight;

        const progress = (scrollTop / (fullHeight - windowHeight)) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollProgressHandler);
        return () => {
            window.removeEventListener("scroll", scrollProgressHandler);
        };
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 50) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 50) {
            setShowScroll(false);
        }
    };

    useEffect(() => {
            window.addEventListener("scroll", checkScrollTop);
            return () => {
                window.removeEventListener("scroll", checkScrollTop);
            };
        },
        [showScroll,checkScrollTop]);

    const buttonStyle: React.CSSProperties = {
        display: showScroll ? "grid" : "none",
        background: `conic-gradient(rgb(31, 168, 79) ${scrollProgress}%, rgb(215, 215, 215) ${scrollProgress}%)`
    };


    const progressBarStyle: React.CSSProperties = {

    };

    return (
        <div style={buttonStyle} onClick={scrollTop} className = 'scroll-top-button'>
            <span style={progressBarStyle} className='progress'>
                <div className="btn_arrow_up"><ButtonArrow/></div>
            </span>
        </div>
    );
};

export default ArrowScroll;

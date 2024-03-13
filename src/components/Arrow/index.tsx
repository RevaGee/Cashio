import React, { useState, useEffect } from "react";
import {ButtonArrow} from "../../images/icons/ButtonArrow";

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
    }, [showScroll]);

    const buttonStyle: React.CSSProperties = {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        fontSize: "24px",
        cursor: "pointer",
        opacity: showScroll ? 1 : 0,
        transition: "opacity 0.3s",
        zIndex: 999,
    };

    const progressBarStyle: React.CSSProperties = {
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "4px",
        backgroundColor: "#1b8f32",
        width: `${scrollProgress}%`,
    };

    return (
        <div style={buttonStyle} onClick={scrollTop}>
            <i className="fas fa-arrow-up"><ButtonArrow/></i>
            <div style={progressBarStyle}></div>
        </div>
    );
};

export default ArrowScroll;

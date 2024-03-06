import React from "react";
import "./styles.scss"
import Logo from "../../images/CASHIO_logo_black.png"


export const Header = () => {
    const handleTelegramLink = () => {
        window.open('https://t.me/zheka_revor', '_blank');
    };

    return(
        <div className="header">
            <div className = "left_side">
                <div className = "logo"><img src={Logo} alt=""/></div>
                <nav>
                    <ul className="nav__links">
                        <li><a href="#">FEATURES</a></li>
                        <li><a href="#">WHY US</a></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">PRICING</a></li>
                        <li><a href="#">CONTACTS</a></li>
                    </ul>
                </nav>
            </div>
            <div className="right_side">
                {/*<div>*/}
                {/*    <ul className="nav-links">*/}
                {/*        <li className="nav-link services">*/}
                {/*            <a>EN*/}
                {/*                <span className="material-icons dropdown-icon">*/}
                {/*                    <ArrowUp/>*/}
                {/*                </span>*/}
                {/*            </a>*/}
                {/*            <ul className="drop-down">*/}
                {/*                <li>EN</li>*/}
                {/*                <li>UA</li>*/}
                {/*                <li>RU</li>*/}
                {/*            </ul>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <button className="demo"
                    onClick={handleTelegramLink}>
                    Get a free demo
                    <div className = "button_icon"></div>
                </button>
            </div>
        </div>
    );
}
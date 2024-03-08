import React, {useState} from "react";
import "./styles.scss"
import Logo from "../../images/CASHIO_logo_black.png"
import {ArrowUp} from "../../images/icons/ArrowUp";
import DarkMode from "../DarkMode/DarkMode";

export const Header = () => {
    const[open, isOpen] = useState(false);
    const handleTelegramLink = () => {
        window.open('https://t.me/zheka_revor', '_blank');
    };
    const handleClick = () => {
        isOpen(!open);
    };
    return(
        <div className={open ? "mobile_header" : "header"}>
            <div className = "left_side">
                <div className = "logo"><img src={Logo} alt=""/></div>
                <div>
                    <nav className={open ? "show_menu" : "navigation"}>
                        <ul className="nav__links">
                            <li><a href="#">FEATURES</a></li>
                            <li><a href="#">WHY US</a></li>
                            <li><a href="#">ABOUT US</a></li>
                            <li><a href="#">PRICING</a></li>
                            <li><a href="#">CONTACTS</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="right_side">
                <DarkMode/>
                <div className="language">
                    <ul className="nav-links">
                        <li className="nav-link services">
                            <a>EN
                                <span className="material-icons dropdown-icon">
                                    <ArrowUp/>
                                </span>
                            </a>
                            <ul className="drop-down">
                                <li>EN</li>
                                <li>UA</li>
                                <li>RU</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button className="demo" onClick={handleTelegramLink}>
                    Get a free demo
                </button>
                <label className = "burger">
                    <input type = "checkbox"  name = ""/>
                    <div className = "bar" onClick={handleClick}>
                        <span className = "top"></span>
                        <span className = "middle"></span>
                        <span className = "bottom"></span>
                    </div>
                </label>
            </div>
        </div>
    );
}
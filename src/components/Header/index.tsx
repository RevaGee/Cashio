import React from "react";
import "./styles.scss"
import Logo from "../../images/CASHIO_logo_black.png"
import {ArrowUp} from "../../images/icons/ArrowUp";

export const Header = () => {
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
                <div className = "language">
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
                <button className="demo">
                    Get a free demo
                </button>
            </div>
        </div>
    );
}
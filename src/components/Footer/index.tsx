import React from "react";
import "./styles.scss"
import Logo from "../../images/CASHIO_logo_black.png";


export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="logo_footer"><img src={Logo} alt=""/></div>
                <div className="footer__text">
                    <p>Grow your business with CASHIO</p>
                </div>
                <div className='footer__borders'>
                    <div className="footer__copyright">
                        <p>Copyright ©CASHIO 2024 · All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
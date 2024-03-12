import React, {useState} from "react";
import "./styles.scss"
import Logo from "../../images/CASHIO_logo_black.png";

export const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer_start_content">
                    <div className="logo_footer"><img src={Logo} alt=""/></div>

                    <div className="footer__text">
                        <p>Grow your business with CASHIO</p>
                    </div>
                </div>
                <div className="footer_end_content">
                    <div className="footer__copyright">
                        <p>Copyright ©CASHIO 2024 · All Rights Reserved</p>
                    </div>
                    <div className="modal_prv_content" onClick={openModal}>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal__content">
                        <button onClick={closeModal}>Close</button>
                        <p>Modal Content Here</p>
                    </div>
                </div>
            )}
        </div>
    );
}

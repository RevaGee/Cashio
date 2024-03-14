import React, {useState} from 'react';
import './styles.scss';
import {ArrowUp} from '../../images/icons/ArrowUp';
import {Logo} from "../../images/icons/CASHIO_logo_black";
import DarkMode from "../DarkMode/DarkMode";
import {useTranslation} from "react-i18next";
import i18n from "../../translation/i18n";

export const Header = () => {
    const [open, isOpen] = useState(false);
    const [languages, isLanguages] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en');


    const {t} = useTranslation();


    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    };
    const handleTelegramLink = () => {
        window.open('https://t.me/zheka_revor', '_blank');
    };
    const handleClick = () => {
        isOpen(!open);
    };
    const handleLanguageClick = () => {
        isLanguages(!languages);
    };


    return (
        <div className={open ? 'mobile_header' : 'header'}>
            <div className='left_side'>
                <div className='logo'>
                    <Logo/>
                </div>
                <div className="nav_block">
                    <nav className={open ? 'show_menu' : 'navigation'}>
                        <ul className='nav__links'>
                            <li>
                                <a href='#'>{t('Features')}</a>
                            </li>
                            <li>
                                <a href='#'>{t('Why Us')}</a>
                            </li>
                            <li>
                                <a href='#'>{t('About Us')}</a>
                            </li>
                            <li>
                                <a href='#'>{t('Pricing')}</a>
                            </li>
                            <li>
                                <a href='#'>{t('Contacts')}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='right_side'>
                <div className='language'>
                    <ul className='nav-links'>
                        <li className='nav-link services' onClick={handleLanguageClick}>
                            <a>
                                {selectedLanguage.toUpperCase()}
                                <span className='material-icons dropdown-icon'
                                      style={languages ? {transform: "rotate(180deg)"} : {}}>
									<ArrowUp/>
								</span>
                            </a>
                            <ul className='drop-down'
                                style={languages ? {display: 'block', justifyContent: 'center'} : {}}>
                                <li onClick={() => {
                                    handleLanguageChange('en');
                                    setIsActive(isActive);
                                }}>EN
                                </li>
                                <div className='location-line'></div>
                                <li onClick={() => {
                                    handleLanguageChange('ua');
                                    setIsActive(isActive);
                                }}>UA
                                </li>
                                <div className='location-line'></div>
                                <li onClick={() => {
                                    handleLanguageChange('ru');
                                    setIsActive(isActive);
                                }}>RU
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button className='demo' onClick={handleTelegramLink}>
                    {t('Get a free demo')}
                </button>
                <DarkMode/>
                <label className='burger'>
                    <input type='checkbox' name=''/>
                    <div className='bar' onClick={handleClick}>
                        <span className='top'></span>
                        <span className='middle'></span>
                        <span className='bottom'></span>
                    </div>
                </label>
            </div>

        </div>
    );
};

import React, { useEffect, useState } from 'react';
import './styles.scss';
import { ArrowUp } from '../../images/icons/ArrowUp';
import { LogoFooter } from '../../images/icons/iconizer-CASHIO_logo_green';
import DarkMode from '../DarkMode/DarkMode';
import { useTranslation } from 'react-i18next';
import i18n from '../../translation/i18n';

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [languages, setLanguages] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem('language') || 'en'
    );
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
    );

    const { t } = useTranslation();
    const [showScroll, setShowScroll] = useState(false);
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 50) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 50) {
            setShowScroll(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString()); // Convert to string before saving
    }, [darkMode]);

    const handleLanguageChange = (language:string) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    };

    const handleTelegramLink = () => {
        window.open('https://t.me/zheka_revor', '_blank');
    };

    const handleClick = () => {
        setOpen(!open);
    };

    const handleLanguageClick = () => {
        setLanguages(!languages);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div
            className={open ? 'mobile_header' : 'header'}
            style={{
                backgroundColor: showScroll ? `var(--header_color)` : 'transparent',
            }}
        >
            <div className="media">
                <div className="left_side">
                    <div className="logo">
                        <LogoFooter />
                    </div>
                    <div className="nav_block">
                        <nav className={open ? 'show_menu' : 'navigation'}>
                            <ul className="nav__links">
                                <li>
                                    <a href="#">{t('Features')}</a>
                                </li>
                                <li>
                                    <a href="#">{t('Why Us')}</a>
                                </li>
                                <li>
                                    <a href="#">{t('About Us')}</a>
                                </li>
                                <li>
                                    <a href="#">{t('Pricing')}</a>
                                </li>
                                <li>
                                    <a href="#">{t('Contacts')}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="right_side">
                    <div className="language">
                        <ul className="nav-links">
                            <li className="nav-link services" onClick={handleLanguageClick}>
                                <a>
                                    {selectedLanguage.toUpperCase()}
                                    <span
                                        className="material-icons dropdown-icon"
                                        style={languages ? { transform: 'rotate(180deg)' } : {}}
                                    >
                    <ArrowUp />
                  </span>
                                </a>
                                <ul
                                    className="drop-down"
                                    style={languages ? { display: 'block', justifyContent: 'center' } : {}}
                                >
                                    <li
                                        onClick={() => {
                                            handleLanguageChange('en');
                                            setLanguages(false);
                                        }}
                                    >
                                        EN
                                    </li>
                                    <div className="location-line"></div>
                                    <li
                                        onClick={() => {
                                            handleLanguageChange('ua');
                                            setLanguages(false);
                                        }}
                                    >
                                        UA
                                    </li>
                                    <div className="location-line"></div>
                                    <li
                                        onClick={() => {
                                            handleLanguageChange('ru');
                                            setLanguages(false);
                                        }}
                                    >
                                        RU
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <button className="demo" onClick={handleTelegramLink}>
                        {t('Get a free demo')}
                    </button>
                    <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <label className="burger">
                        <input type="checkbox" name="" />
                        <div className="bar" onClick={handleClick}>
                            <span className="top"></span>
                            <span className="middle"></span>
                            <span className="bottom"></span>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

import React, {useEffect, useState} from 'react';
import './styles.scss';
import {ArrowUp} from '../../images/icons/ArrowUp';
import {LogoFooter} from '../../images/icons/iconizer-CASHIO_logo_green';
import DarkMode from '../DarkMode/DarkMode';
import {useTranslation} from 'react-i18next';
import i18n from '../../translation/i18n';
import {useTheme} from "../DarkMode";


export const Header = () => {
    const { darkMode, setDarkMode } = useTheme();
    const [open, setOpen] = useState(false);
    const [languages, setLanguages] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem('language') || 'en'
    );

    const {t} = useTranslation();
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
        localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);


    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    };

    const handleTelegramLink = () => {
        window.open('https://t.me/quantumop', '_blank');
    };

    const handleClick = () => {
        setOpen(!open);
        if(!open){
            setIsChecked(true)
        }else {
            setIsChecked(false)
        }

    };

    const handleLanguageClick = () => {
        setLanguages(!languages);
    };

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
    };

    const scrollToSection = (e: React.SyntheticEvent, sectionId: string) => {
        e.preventDefault();
        const id = sectionId.replace('#', '');
        const element = document.getElementById(id);

        if (element) {
            const topOffset = 100;
            const topPos = element.getBoundingClientRect().top + window.pageYOffset - topOffset;
            window.scrollTo({ top: topPos, behavior: 'smooth' });
            setOpen(false)
        }
        setIsChecked(false);

    }

    return (
        <div
            className={open ? 'mobile_header' : 'header'}
        >
            <div className="media">
                <div className="left_side">
                    <div className="logo">
                        <LogoFooter/>
                    </div>
                    <div className="nav_block">
                        <nav className={open ? 'show_menu' : 'navigation'}>
                            <ul className="nav__links">
                                <li>
                                    <a href="#Slogan" onClick={(e) => scrollToSection(e,'Slogan')}>{t('Features')}</a>
                                </li>
                                <li>
                                    <a href="#Collages" onClick={(e) => scrollToSection(e,'Collages')}>{t('Why Us')}</a>
                                </li>
                                <li>
                                    <a href="#AboutUs" onClick={(e) => scrollToSection(e,'AboutUs')}>{t('About Us')}</a>
                                </li>
                                <li>
                                    <a href="#Pricing" onClick={(e) => scrollToSection(e,'Pricing')}>{t('Pricing')}</a>
                                </li>
                                <li>
                                    <a href="#contacts" onClick={(e) => scrollToSection(e,'contact')}>{t('Contacts')}</a>
                                </li>
                                <li>
                                    <a href="#Questions" onClick={(e) => scrollToSection(e, 'Questions')}>{t('Questions')}</a>
                                </li>
                                <li>
                                    <a href="#for_whom" onClick={(e) => scrollToSection(e, 'for_whom')}>{t('ForWhom')}</a>
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
                                        style={languages ? {transform: 'rotate(180deg)'} : {}}
                                    >
                    <ArrowUp/>
                  </span>
                                </a>
                                <ul
                                    className="drop-down"
                                    style={languages ? {display: 'block', justifyContent: 'center'} : {}}
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
                    <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                    <label className="burger">
                        <input type="checkbox" checked={isChecked} name=""/>
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

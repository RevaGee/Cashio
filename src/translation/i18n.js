import React, { useEffect } from 'react';
import en from './en.json';
import ru from './ru.json';
import ua from './ua.json';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

const resources = {
    en: {
        translation: en,
    },
    ru: {
        translation: ru,
    },
    ua: {
        translation: ua,
    },
};

const useSaveLanguageToCookies = (language) => {
    useEffect(() => {
        Cookies.set('language', language, { expires: 365 });
    }, [language]);
};

const InitializeI18n = () => {
    const { i18n } = useTranslation();

    const savedLanguage = Cookies.get('language') || 'en';

    useEffect(() => {
        i18n.init({
            resources,
            lng: savedLanguage,
            fallbackLng: 'en',
        });
    }, [i18n, savedLanguage]);

    useSaveLanguageToCookies(i18n.language); // Викликаємо хук безпосередньо тут

    return null; // Функціональні компоненти повинні повертати JSX або null
};

export default InitializeI18n;

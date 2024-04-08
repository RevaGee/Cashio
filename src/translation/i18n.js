import en from './en.json';
import ru from './ru.json';
import ua from './ua.json';

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
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

const savedLanguage = Cookies.get('language');

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage || 'en',
        fallbackLng: 'en',
    });

const saveLanguageToCookies = (language) => {
    Cookies.set('language', language, { expires: 365 }); // Зберігаємо мову на рік
};

i18n.on('languageChanged', (lng) => {
    saveLanguageToCookies(lng);
});

export default i18n;

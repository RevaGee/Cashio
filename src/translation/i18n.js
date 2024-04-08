import en from './en.json';
import ru from './ru.json';
import ua from './ua.json';

import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const resources = {
    en: {
        translation: en,
    },
    ru: {
        translation: ru,
    },
    ua: {
        translation: ua,
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('language') || 'en',
        fallbackLng: 'en'
    })
export default i18n;
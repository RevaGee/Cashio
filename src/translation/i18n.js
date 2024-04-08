import en from './en.json';
import ru from './ru.json';
import ua from './ua.json';

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

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

// Зчитуємо значення мови з localStorage
const savedLanguage = localStorage.getItem('language');

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage || 'en', // Використовуємо збережене значення мови або англійську, якщо немає збереженого значення
        fallbackLng: 'en',
    });

// Прослуховуємо подію зміни мови і зберігаємо нове значення у localStorage
i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng);
});

// Зберігаємо список доступних мов у localStorage
localStorage.setItem('availableLanguages', JSON.stringify(Object.keys(resources)));

export default i18n;

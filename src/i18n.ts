// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { useLanguageStore } from './store/LanguageStore';


const fallbackLng = ['en'];
const availableLanguages = ['en', 'ar'];

const LANGUAGES: { [key: string]: { dir: string } } = {
  en: { dir: "ltr" },
  ar: { dir: "rtl" },
};

i18n
  .use(Backend) // load translations using http
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    fallbackLng,
    debug: true,
    supportedLngs: availableLanguages,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
  });

i18n.on('languageChanged', (lng) => {
  const { setLanguage } = useLanguageStore.getState();
  const direction = LANGUAGES[lng]?.dir as "ltr" | "rtl" || "ltr";
  setLanguage(lng, direction);
  document.documentElement.dir = direction;
});

export default i18n;

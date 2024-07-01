// src/components/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../store/LanguageStore';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { language, setLanguage } = useLanguageStore();

  const changeLanguage = (lng: string) => {
    const direction = lng === 'ar' ? 'rtl' : 'ltr';
    i18n.changeLanguage(lng);
    setLanguage(lng, direction);
    document.documentElement.dir = direction;
  };

  return (
    <button
      onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
    >
      {language === 'en' ? 'English' : 'العربية'}
    </button>
  );
};

export default LanguageSwitcher;

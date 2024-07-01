// src/components/About.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{t('about')}</h1>
      <p className="text-lg">{t('aboutPage')}</p>
    </div>
  );
};

export default About;

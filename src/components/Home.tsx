// src/components/Home.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{t('home')}</h1>
      <p className="text-lg">{t('homePage')}</p>
    </div>
  );
};

export default Home;

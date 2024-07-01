import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home')}</h1>
      <p>{t('homePage')}</p>
    </div>
  );
};

export default Home;

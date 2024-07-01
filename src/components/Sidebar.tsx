import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <aside className="sidebar bg-gray-900 text-white w-64 h-screen fixed flex flex-col justify-between">
      <nav className="flex-grow">
        <ul className="space-y-4 mt-8">
          <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded-md">
            <Link to="/" className="text-white hover:text-gray-300">{t('home')}</Link>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded-md">
            <Link to="/about" className="text-white hover:text-gray-300">{t('about')}</Link>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded-md">
            <Link to="/cats" className="text-white hover:text-gray-300">{t('cats')}</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <LanguageSwitcher />
      </div>
    </aside>
  );
};

export default Sidebar;

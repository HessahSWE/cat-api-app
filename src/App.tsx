import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import './App.css';
import CatList from './pages/CatList';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="App">
        <header className="bg-blue-600 p-4 text-white text-center">
          <h1>{t('welcome')}</h1>
          <nav>
            <ul className="flex justify-center space-x-4">
              <li><Link to="/" className="text-white">{t('home')}</Link></li>
              <li><Link to="/about" className="text-white">{t('about')}</Link></li>
              <li><Link to="/cats" className="text-white">{t('cats')}</Link></li>
            </ul>
          </nav>
          <LanguageSwitcher />
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cats" element={<CatList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

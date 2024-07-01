import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Sidebar from './components/Sidebar';
import { useTranslation } from 'react-i18next';
import './App.css';
import CatList from './pages/CatList';
import { useLanguageStore } from './store/languageStore';

const App: React.FC = () => {
  const { t } = useTranslation();
  const { direction } = useLanguageStore();

  React.useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  return (
    <Router>
      <div className={`App flex ${direction === 'rtl' ? 'rtl' : 'ltr'}`}>
        <Sidebar />
        <div className={`flex-1 p-4 ${direction === 'rtl' ? 'mr-64' : 'ml-64'}`}>
          <header className="bg-blue-600 p-4 text-white text-center rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">{t('welcome')}</h1>
          </header>
          <main className="mt-4 p-4 bg-white rounded-lg shadow-md">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cats" element={<CatList />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CatList from './components/CatList';
import './App.css';
import Home from './components/Home';
import About from './components/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="bg-blue-600 p-4 text-white text-center">
          <h1>The CatAPI - Documentation Portal</h1>
          <nav>
            <ul className="flex justify-center space-x-4">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/about" className="text-white">About</Link></li>
              <li><Link to="/cats" className="text-white">Cats</Link></li>
            </ul>
          </nav>
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

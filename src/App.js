import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="App">
      <Header />
      <nav className="nav-tabs">
        <button 
          className={activeTab === 'home' ? 'active' : ''} 
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button 
          className={activeTab === 'experience' ? 'active' : ''} 
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
      </nav>
      <main style={{ flex: 1 }}>
        {activeTab === 'home' && <Home />}
        {activeTab === 'experience' && <Experience />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

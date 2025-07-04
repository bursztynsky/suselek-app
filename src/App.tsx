// src/App.tsx
import React from 'react';
import './index.scss';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <Header/>
            <main>
                <HeroSection/>
                {/* Tutaj będziemy dodawać kolejne sekcje: Features, About, Contact */}
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default App;

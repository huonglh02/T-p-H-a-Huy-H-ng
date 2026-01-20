import React from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-grow">
        <Hero />
        <Catalog />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;
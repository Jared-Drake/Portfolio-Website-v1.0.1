import React from 'react';
import Navbar from './sections/navbar.jsx';
import Hero from './sections/hero.jsx'; // Changed the import path to match the correct file name

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
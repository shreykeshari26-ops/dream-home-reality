import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Plots from './pages/Plots';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-on-background font-body-md text-body-md antialiased overflow-x-hidden min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/plots" element={<Plots />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

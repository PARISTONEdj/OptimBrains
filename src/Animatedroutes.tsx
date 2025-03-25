
import React from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';

function Animatedroutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
         <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}

export default Animatedroutes

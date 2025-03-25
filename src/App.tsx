import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Animatedroutes from './Animatedroutes';

function App() {
  return (
    <Router> {/* ✅ Router doit englober tout */}
      <div className="min-h-screen bg-navy-900 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Animatedroutes /> {/* ✅ useLocation() est dans un Router maintenant */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


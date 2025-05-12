import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Animatedroutes from './Animatedroutes';

function App() {

  const [simpleVisits, setSimpleVisits] = useState(0);
  const [realVisits, setRealVisits] = useState(0);

  useEffect(() => {
    // Incrémente les visites
    fetch("https://apioptimbrains.onrender.com/api/visits/increment", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        console.log("Visite enregistrée !");
        setSimpleVisits(data.simple);
        setRealVisits(data.real);
      })
      .catch((err) => console.error("Erreur :", err));

    // Récupère les visites totales
    // fetch("http://localhost:5000/visits")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setSimpleVisits(data.simple);
    //     setRealVisits(data.real);
    //   })
    //   .catch((err) => console.error("Erreur :", err));
  }, []);

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


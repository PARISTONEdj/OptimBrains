import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin } from 'lucide-react';
import inteligence from "../images/intelligence-artificielle-2-v.jpg";
import AfterHeader from '../components/Afterheader';
import MapFrame from '../components/MapFrame';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      if (response.data.success) {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Erreur lors de l’envoi du message.');
      }
    } catch (error) {
      setStatus('Erreur de connexion au serveur.');
    }
  };

  return (
    <div className="pt-24 px-6">
      <div className="container mx-auto">
        <AfterHeader titre={'Contactez-nous'} description={''} imageURL={inteligence} />
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Contactez-nous</h1>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Envoyer le message
              </button>
            </form>
            {status && <p className="text-center text-white mt-4">{status}</p>}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Nos coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-medium">Adresse</h3>
                  <p className="text-gray-300">Agoè-Anomé, Lomé, Togo</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-medium">Téléphone</h3>
                  <p className="text-gray-300">+33 7 53 48 19 39 / +228 91 26 22 89</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-300">optimbrains@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-navy-800 p-6 rounded-lg">
              <h3 className="text-white font-medium mb-4">Horaires d'ouverture</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Lundi - Vendredi: 8h00 - 17h00</li>
                <li>Samedi - Dimanche: Fermé</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <MapFrame latitude={6.2062592} longitude={1.1862016} />
    </div>
  );
};

export default Contact;

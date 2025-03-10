import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Contactez-nous</h1>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Nos coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-medium">Adresse</h3>
                  <p className="text-gray-300">Agoè-Anomé, au nord de la clôture de l'EPP Anomé<br />Lomé, Togo</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-medium">Téléphone</h3>
                  <p className="text-gray-300">+33 7 53 48 19 39/+228 91 26 22 89 </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-300">optimbrains@gmail.com/secretariat@optimbrains.com</p>
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
    </div>
  );
};

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-webcontainer-core-internal/main/turbo/examples/basic/apps/web/public/optimbrains-logo.png" 
              alt="OptimBrains" 
              className="h-12 mb-4"
            />
            <p className="text-gray-300 mb-4">
              OPTIMISER, DÉCIDER, INNOVER
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Accueil</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">À Propos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-navy-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-lg transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>Copyright © {new Date().getFullYear()} OptimBrains. Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
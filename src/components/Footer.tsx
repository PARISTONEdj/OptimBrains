import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../images/Logo.png";
import { Mail } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaTiktok } from "react-icons/fa";
import axios from 'axios';

const Footer = () => {
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const abonnement = async (e: React.FormEvent) => {
    e.preventDefault(); // Correction de e.preventedDefault()

    if (!email) {
      setMessage("Veuillez entrer un email valide.");
      return;
    }

    try {
      const response = await axios.post("https://apioptimbrains.onrender.com/api/subscribers/abonnement", {
        email: email,
      });

      setMessage(response.data.message); // Afficher le message de succès
      setEmail(""); // Réinitialiser l'input après abonnement
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data?.message || "Erreur lors de l'abonnement");
      } else {
        setMessage("Une erreur inconnue est survenue.");
      }
    }
  };


  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img
              src={logo}
              alt="OptimBrains"
              className="h-20 mb-4"
            />
            <p className="text-gray-300 mb-4">
              OPTIMISER, DÉCIDER, INNOVER
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className={`transition-colors ${location.pathname === '/' ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`transition-colors ${location.pathname === '/services' ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`transition-colors ${location.pathname === '/about' ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                >
                  À Propos
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className={`transition-colors ${location.pathname.startsWith('/blog') ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`transition-colors ${location.pathname === '/contact' ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4" onSubmit={abonnement}>
              <div className="flex">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
            {message && <p>{message}</p>}
            <div className="flex space-x-4 mt-10">
              <a href="https://www.facebook.com/optimbrains"> <FaFacebook size={24} />
              </a>
              <a href="https://www.linkedin.com/company/106504123/admin/page-posts/published/"> <FaLinkedin size={24} /> </a>
              <a href="https://x.com/OPTIMBRAINS"> <FaTwitter size={24} /> </a>
              <a href="https://www.instagram.com/optimbrains/"> <FaInstagram size={24} /> </a>
              <a href="mailto:optimbrains@gmail.com">  <FaEnvelope size={24} /> </a>
              <a href="https://www.tiktok.com/@optimbrains"> <FaTiktok size={24} /> </a>
            </div>
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

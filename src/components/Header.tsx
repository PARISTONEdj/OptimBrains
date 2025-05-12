import React, {useState, useEffect} from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import logo from "../images/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false); // Ferme le menu mobile après le clic
    }
  };

  useEffect(() => {
    console.log("Current path:", location.pathname);
  }, [location]);

  return (
    <header className="fixed w-full bg-navy-900/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={handleLinkClick}>
            <img src={logo} alt="OptimBrains" className="h-12" />
          </Link>

          {/* Desktop Navigation (affiché à partir de 1035px, utilisant lg:block) */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              onClick={handleLinkClick}
              className={`transition-colors ${location.pathname === '/' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
            >
              Accueil
            </Link>
            <Link
              to="/services"
              onClick={handleLinkClick}
              className={`transition-colors ${location.pathname === '/services' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
            >
              Services
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className={`transition-colors ${location.pathname === '/about' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
            >
              À Propos
            </Link>
            <Link
              to="/blog"
              onClick={handleLinkClick}
              className={`transition-colors ${location.pathname.startsWith('/blog') ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className={`transition-colors ${location.pathname === '/contact' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
            >
              Contact
            </Link>
            {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors">
              Démonstration
            </button> */}
          </div>

          {/* Mobile menu button, visible en dessous de 1035px */}
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation (affiché uniquement quand isOpen est true) */}
        {isOpen && (
          <div className="lg:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={handleLinkClick}
                className={`transition-colors ${location.pathname === '/' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
              >
                Accueil
              </Link>
              <Link
                to="/services"
                onClick={handleLinkClick}
                className={`transition-colors ${location.pathname === '/services' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
              >
                Services
              </Link>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className={`transition-colors ${location.pathname === '/about' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
              >
                À Propos
              </Link>
              <Link
                to="/blog"
                onClick={handleLinkClick}
                className={`transition-colors ${location.pathname === '/blog' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className={`transition-colors ${location.pathname === '/contact' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
              >
                Contact
              </Link>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors">
                Démonstration
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

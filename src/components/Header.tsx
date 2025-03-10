import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="fixed w-full bg-navy-900/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-webcontainer-core-internal/main/turbo/examples/basic/apps/web/public/optimbrains-logo.png" 
              alt="OptimBrains" 
              className="h-12"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-white hover:text-blue-400 transition-colors ${location.pathname === '/' ? 'text-blue-400' : ''}`}>
              Accueil
            </Link>
            <Link to="/services" className={`text-white hover:text-blue-400 transition-colors ${location.pathname === '/services' ? 'text-blue-400' : ''}`}>
              Services
            </Link>
            <Link to="/about" className={`text-white hover:text-blue-400 transition-colors ${location.pathname === '/about' ? 'text-blue-400' : ''}`}>
              À Propos
            </Link>
            <Link to="/blog" className={`text-white hover:text-blue-400 transition-colors ${location.pathname === '/blog' ? 'text-blue-400' : ''}`}>
              Blog
            </Link>
            <Link to="/contact" className={`text-white hover:text-blue-400 transition-colors ${location.pathname === '/contact' ? 'text-blue-400' : ''}`}>
              Contact
            </Link>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors">
              Démonstration
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={`text-white hover:text-blue-400 transition-colors ${location.pathname === '/' ? 'text-blue-400' : ''}`}>
                Accueil
              </Link>
              <Link to="/services" className={`text-white hover:text-blue-400 transition-colors ${location.pathname === '/services' ? 'text-blue-400' : ''}`}>
                Services
              </Link>
              <Link to="/about" className={`text-white hover:text-blue-400 transition-colors ${location.pathname === '/about' ? 'text-blue-400' : ''}`}>
                À Propos
              </Link>
              <Link to="/blog" className={`text-white hover:text-blue-400 transition-colors ${location.pathname === '/blog' ? 'text-blue-400' : ''}`}>
                Blog
              </Link>
              <Link to="/contact" className={`text-white hover:text-blue-400 transition-colors ${location.pathname === '/contact' ? 'text-blue-400' : ''}`}>
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
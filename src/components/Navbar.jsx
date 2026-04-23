import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Languages } from 'lucide-react';

const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navbar.home, path: '/' },
    { name: t.navbar.guidance, path: '/guidance' },
    { name: t.navbar.interview, path: '/interview' },
    { name: t.navbar.about, path: '/about' },
    { name: t.navbar.contact, path: '/contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/patil_logo.png" alt="Patil Institute Logo" style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }} />
          <span>Patil Institute</span>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
              style={({ isActive }) => ({ color: isActive ? 'white' : 'var(--text-muted)' })}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <button onClick={toggleLanguage} className="lang-switch">
            <Languages size={18} />
            {lang === 'en' ? 'मराठी' : 'English'}
          </button>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`site-header ${isScrolled || isOpen ? 'is-scrolled' : ''}`}>
      <Link to="/" className="brand" aria-label="Dobar Health Consultants home">
        <span className="brand-mark">DH</span>
        <span>Dobar Health Consultants</span>
      </Link>

      <button 
        className="nav-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="sr-only">Toggle navigation</span>
        {isOpen ? <X color="currentColor" /> : <Menu color="currentColor" />}
      </button>

      <nav className={`site-nav ${isOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
        <Link to="/">Home</Link>
        <Link to="/#services">Services</Link>
        <Link to="/#process">Process</Link>
        <Link to="/contact" className="nav-cta">Contact</Link>
      </nav>
    </header>
  );
}

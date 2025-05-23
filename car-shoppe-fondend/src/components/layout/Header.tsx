
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Car, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-car-primary text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Car size={28} className="text-car-highlight" />
          <span className="text-xl font-bold tracking-tight">AutoMarket</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="nav-link py-2 active">Accueil</Link>
          <Link to="/vehicles" className="nav-link py-2">Véhicules</Link>
          <Link to="/services" className="nav-link py-2">Services</Link>
          <Link to="/about" className="nav-link py-2">À Propos</Link>
          <Link to="/contact" className="nav-link py-2">Contact</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="bg-car-accent hover:bg-car-accent/80">
            Mon Compte
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-car-primary border-t border-gray-700">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="py-2 px-4 hover:bg-car-dark rounded-md" onClick={toggleMenu}>Accueil</Link>
            <Link to="/vehicles" className="py-2 px-4 hover:bg-car-dark rounded-md" onClick={toggleMenu}>Véhicules</Link>
            <Link to="/services" className="py-2 px-4 hover:bg-car-dark rounded-md" onClick={toggleMenu}>Services</Link>
            <Link to="/about" className="py-2 px-4 hover:bg-car-dark rounded-md" onClick={toggleMenu}>À Propos</Link>
            <Link to="/contact" className="py-2 px-4 hover:bg-car-dark rounded-md" onClick={toggleMenu}>Contact</Link>
            <div className="flex items-center mt-2">
              <Button className="w-full bg-car-accent hover:bg-car-accent/80">
                Mon Compte
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

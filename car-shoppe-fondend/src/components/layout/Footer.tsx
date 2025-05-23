
import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-car-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car size={24} className="text-car-highlight" />
              <span className="text-xl font-bold">AutoMarket</span>
            </div>
            <p className="text-gray-300 mb-4">
              Votre destination de confiance pour trouver le véhicule de vos rêves. 
              Nous proposons une large gamme de voitures neuves et d'occasion.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-car-highlight transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-car-highlight transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-car-highlight transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/vehicles" className="text-gray-300 hover:text-white transition-colors">Nos Véhicules</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/financing" className="text-gray-300 hover:text-white transition-colors">Financement</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">À Propos de Nous</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Car Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li><Link to="/vehicles/sedan" className="text-gray-300 hover:text-white transition-colors">Berlines</Link></li>
              <li><Link to="/vehicles/suv" className="text-gray-300 hover:text-white transition-colors">SUVs</Link></li>
              <li><Link to="/vehicles/luxury" className="text-gray-300 hover:text-white transition-colors">Voitures de Luxe</Link></li>
              <li><Link to="/vehicles/electric" className="text-gray-300 hover:text-white transition-colors">Véhicules Électriques</Link></li>
              <li><Link to="/vehicles/used" className="text-gray-300 hover:text-white transition-colors">Véhicules d'Occasion</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-car-highlight shrink-0 mt-1" />
                <span className="text-gray-300">123 Rue de l'Automobile, 75000 Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-car-highlight shrink-0" />
                <span className="text-gray-300">+33 01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-car-highlight shrink-0" />
                <span className="text-gray-300">contact@automarket.fr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AutoMarket. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

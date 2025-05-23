
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-car-accent to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Prêt à trouver votre prochaine voiture ?</h2>
            <p className="text-lg opacity-90 mb-6">
              Nos conseillers sont à votre disposition pour vous aider à trouver le véhicule qui correspond à vos besoins et à votre budget.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Phone size={20} />
                </div>
                <span>+33 01 23 45 67 89</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Mail size={20} />
                </div>
                <span>contact@automarket.fr</span>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-white text-car-accent hover:bg-white/90">
              <Link to="/contact" className="flex items-center gap-2">
                Nous contacter
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Demande de rappel</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm mb-1">Prénom</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm mb-1">Nom</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm mb-1">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm mb-1">Message</label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Comment pouvons-nous vous aider?"
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-white text-car-accent hover:bg-white/90">
                Envoyer ma demande
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

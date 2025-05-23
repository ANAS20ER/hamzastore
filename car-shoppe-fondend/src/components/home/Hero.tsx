
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero background */}
      <div className="hero-gradient w-full h-[600px] absolute top-0 left-0 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute w-full h-full top-0 left-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjIuNCAxLjguOWwtOS4xIDE2Yy0uMy41LTEuNi41LTEuOSAwbC05LTE2Yy0uNC0uNS42LS45IDEuOC0uOWgxNi40eiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-10 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Trouvez la voiture de vos rêves
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Explorez notre large sélection de véhicules neufs et d'occasion. La meilleure expérience d'achat automobile en ligne.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-car-highlight text-car-dark hover:bg-car-highlight/90">
                <Link to="/vehicles">
                  Voir nos véhicules
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            {/* Car image placeholder - in a real app you would use an actual image */}
            <div className="relative h-[350px] w-full rounded-xl bg-gradient-to-r from-car-accent/20 to-car-highlight/20 overflow-hidden flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury car" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-car-dark/50 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-white">
          <div className="p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-car-highlight mb-2">500+</div>
            <div className="opacity-80">Véhicules disponibles</div>
          </div>
          <div className="p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-car-highlight mb-2">10+</div>
            <div className="opacity-80">Marques partenaires</div>
          </div>
          <div className="p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-car-highlight mb-2">5000+</div>
            <div className="opacity-80">Clients satisfaits</div>
          </div>
          <div className="p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-car-highlight mb-2">4.8/5</div>
            <div className="opacity-80">Note client moyenne</div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-12">
          <div className="animate-bounce">
            <ArrowRight size={24} className="text-white rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

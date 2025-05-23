
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophie Martin',
    position: 'Paris',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    content: 'J\'ai trouvé la voiture de mes rêves sur AutoMarket. Le processus était incroyablement simple et transparent. Le service client a été exceptionnel du début à la fin.',
    rating: 5
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    position: 'Lyon',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    content: 'AutoMarket offre des prix compétitifs et une sélection de véhicules impressionnante. J\'ai économisé beaucoup de temps et d\'argent en achetant ma voiture ici.',
    rating: 4
  },
  {
    id: 3,
    name: 'Emma Bernard',
    position: 'Marseille',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    content: 'Le financement proposé par AutoMarket était parfaitement adapté à ma situation. Je suis très satisfaite de mon achat et je recommande fortement leur service.',
    rating: 5
  },
  {
    id: 4,
    name: 'Lucas Moreau',
    position: 'Nantes',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    content: 'L\'équipe d\'AutoMarket a été très professionnelle et attentionnée. Ils ont répondu à toutes mes questions et m\'ont aidé à trouver exactement ce que je cherchais.',
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const showPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const showNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <section className="py-16 bg-car-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="opacity-80">
            Découvrez les témoignages de nos clients satisfaits qui ont trouvé leur véhicule idéal grâce à AutoMarket.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial content */}
          <div className="bg-car-dark/30 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-car-highlight" 
              />
              
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-car-highlight text-car-highlight" />
                  ))}
                  {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i + testimonials[activeIndex].rating} size={18} className="text-gray-400" />
                  ))}
                </div>
                <h3 className="text-xl font-semibold">{testimonials[activeIndex].name}</h3>
                <p className="opacity-80">{testimonials[activeIndex].position}</p>
              </div>
            </div>
            
            <p className="text-lg italic">"{testimonials[activeIndex].content}"</p>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={showPrevious}
              className="bg-car-dark/50 hover:bg-car-dark w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={showNext}
              className="bg-car-dark/50 hover:bg-car-dark w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index ? 'bg-car-highlight w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import { useState, useEffect } from 'react';

const brands = [
  { id: 1, name: 'Audi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/220px-Audi-Logo_2016.svg.png' },
  { id: 2, name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png' },
  { id: 3, name: 'Mercedes-Benz', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/200px-Mercedes-Logo.svg.png' },
  { id: 4, name: 'Peugeot', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_Peugeot_2021.svg/200px-Logo_Peugeot_2021.svg.png' },
  { id: 5, name: 'Renault', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Renault_2009_logo.svg/200px-Renault_2009_logo.svg.png' },
  { id: 6, name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/200px-Toyota_carlogo.svg.png' },
  { id: 7, name: 'Volkswagen', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/200px-Volkswagen_logo_2019.svg.png' },
  { id: 8, name: 'Citroën', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Logo_Citro%C3%ABn.svg/200px-Logo_Citro%C3%ABn.svg.png' },
];

const BrandSlider = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % 100);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Nos Marques Partenaires</h2>
          <p className="text-gray-600 mt-2">Découvrez notre large sélection de marques automobiles</p>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          className="flex items-center gap-16"
          style={{
            transform: `translateX(-${offset}%)`,
            width: `${brands.length * 200}px`,
            transition: 'transform 0.5s ease',
          }}
        >
          {brands.concat(brands).map((brand, index) => (
            <div 
              key={`${brand.id}-${index}`} 
              className="w-32 h-32 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="max-w-[70%] max-h-[70%] object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;

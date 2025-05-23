
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CarCard from '../cars/CarCard';
import { getCars } from '@/services/carService';
import { Car } from '@/types/car';

const FeaturedCars = () => {
  const [featuredCars, setFeaturedCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadFeaturedCars = async () => {
      try {
        setIsLoading(true);
        // In a real app, we'd fetch from an API
        const cars = getCars();
        setFeaturedCars(cars.filter(car => car.featured).slice(0, 4));
      } catch (error) {
        console.error('Error loading featured cars:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadFeaturedCars();
  }, []);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Véhicules en Vedette</h2>
            <p className="text-gray-600">Découvrez nos meilleurs véhicules sélectionnés pour vous.</p>
          </div>
          <Button asChild variant="ghost" className="hidden md:flex items-center gap-1">
            <Link to="/vehicles">
              Voir tous les véhicules
              <ChevronRight size={18} />
            </Link>
          </Button>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="animate-pulse bg-white rounded-lg h-72"></div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            
            <div className="mt-10 flex justify-center md:hidden">
              <Button asChild>
                <Link to="/vehicles">
                  Voir tous les véhicules
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedCars;

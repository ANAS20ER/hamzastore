
import React from 'react';
import { Link } from 'react-router-dom';
import { Fuel, Calendar, Gauge } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Car } from '@/types/car';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="car-card bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100">
      <div className="relative">
        <img 
          src={car.imageUrl} 
          alt={`${car.make} ${car.model}`}
          className="w-full h-48 object-cover" 
        />
        {car.isNew && (
          <Badge className="absolute top-2 right-2 bg-car-highlight text-black">
            Nouveau
          </Badge>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">
            {car.make} {car.model}
          </h3>
          <span className="text-car-highlight font-bold">
            {car.price.toLocaleString('fr-FR')} €
          </span>
        </div>
        
        <div className="grid grid-cols-3 gap-2 my-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel size={16} />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge size={16} />
            <span>{car.mileage.toLocaleString('fr-FR')} km</span>
          </div>
        </div>
        
        <div className="flex gap-2 mt-4">
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/vehicles/${car.id}`}>Détails</Link>
          </Button>
          <Button className="flex-1 bg-car-accent hover:bg-car-accent/90">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

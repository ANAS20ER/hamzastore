
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';

interface CarFilterProps {
  onFilterChange: (filters: any) => void;
}

const CarFilter: React.FC<CarFilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    minYear: '',
    maxYear: '',
    minPrice: '',
    maxPrice: '',
    fuelType: '',
  });
  
  const handleChange = (key: string, value: string) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <h2 className="text-xl font-bold mb-4">Rechercher un véhicule</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="make" className="text-sm font-medium">Marque</label>
            <Select
              value={filters.make}
              onValueChange={(value) => handleChange('make', value)}
            >
              <SelectTrigger id="make">
                <SelectValue placeholder="Toutes les marques" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="audi">Audi</SelectItem>
                <SelectItem value="bmw">BMW</SelectItem>
                <SelectItem value="mercedes">Mercedes</SelectItem>
                <SelectItem value="peugeot">Peugeot</SelectItem>
                <SelectItem value="renault">Renault</SelectItem>
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="volkswagen">Volkswagen</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="model" className="text-sm font-medium">Modèle</label>
            <Input
              id="model"
              placeholder="Tous les modèles"
              value={filters.model}
              onChange={(e) => handleChange('model', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="fuelType" className="text-sm font-medium">Type de carburant</label>
            <Select
              value={filters.fuelType}
              onValueChange={(value) => handleChange('fuelType', value)}
            >
              <SelectTrigger id="fuelType">
                <SelectValue placeholder="Tous les carburants" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="essence">Essence</SelectItem>
                <SelectItem value="diesel">Diesel</SelectItem>
                <SelectItem value="electrique">Électrique</SelectItem>
                <SelectItem value="hybride">Hybride</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="minYear" className="text-sm font-medium">Année min</label>
            <Input
              id="minYear"
              placeholder="Min"
              type="number"
              value={filters.minYear}
              onChange={(e) => handleChange('minYear', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="maxYear" className="text-sm font-medium">Année max</label>
            <Input
              id="maxYear"
              placeholder="Max"
              type="number"
              value={filters.maxYear}
              onChange={(e) => handleChange('maxYear', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="priceRange" className="text-sm font-medium">Prix (€)</label>
            <div className="flex gap-2">
              <Input
                id="minPrice"
                placeholder="Min"
                type="number"
                value={filters.minPrice}
                onChange={(e) => handleChange('minPrice', e.target.value)}
              />
              <Input
                id="maxPrice"
                placeholder="Max"
                type="number" 
                value={filters.maxPrice}
                onChange={(e) => handleChange('maxPrice', e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <Button type="submit" className="w-full mt-6 bg-car-accent hover:bg-car-accent/90">
          <Search className="w-4 h-4 mr-2" />
          Rechercher
        </Button>
      </form>
    </div>
  );
};

export default CarFilter;

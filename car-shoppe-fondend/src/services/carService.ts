
import { Car } from '@/types/car';

// Mock car data
const cars: Car[] = [
  {
    id: '1',
    make: 'Peugeot',
    model: '308',
    year: 2022,
    price: 24990,
    mileage: 12500,
    fuelType: 'Diesel',
    transmission: 'Automatique',
    engineSize: '1.5L',
    power: '130 ch',
    color: 'Gris Platinium',
    description: 'Peugeot 308 en excellent état. Première main, carnet d\'entretien complet, faible kilométrage.',
    features: ['GPS', 'Bluetooth', 'Climatisation', 'Régulateur de vitesse', 'Caméra de recul'],
    imageUrl: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=800&auto=format&fit=crop',
    ],
    condition: 'Excellent',
    isNew: false,
    featured: true,
  },
  {
    id: '2',
    make: 'Renault',
    model: 'Clio',
    year: 2023,
    price: 19990,
    mileage: 5000,
    fuelType: 'Essence',
    transmission: 'Manuelle',
    engineSize: '1.0L',
    power: '90 ch',
    color: 'Rouge Flamme',
    description: 'Renault Clio dernière génération avec toutes les options. Véhicule très économique et fiable.',
    features: ['Écran tactile', 'Apple CarPlay', 'Android Auto', 'Aide au stationnement', 'Alerte franchissement de ligne'],
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    ],
    condition: 'Comme neuf',
    isNew: true,
    featured: true,
  },
  {
    id: '3',
    make: 'Audi',
    model: 'A3 Sportback',
    year: 2021,
    price: 31900,
    mileage: 18000,
    fuelType: 'Hybride',
    transmission: 'Automatique',
    engineSize: '1.4L',
    power: '204 ch',
    color: 'Noir Mythic',
    description: 'Audi A3 Sportback hybride rechargeable. Finition S-Line avec nombreuses options. Véhicule premium en parfait état.',
    features: ['Sièges cuir', 'Toit panoramique', 'Système audio premium', 'Phares LED Matrix', 'Cockpit virtuel'],
    imageUrl: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542282811-943ef1a977c3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=800&auto=format&fit=crop',
    ],
    condition: 'Très bon',
    isNew: false,
    featured: true,
  },
  {
    id: '4',
    make: 'BMW',
    model: 'Serie 3',
    year: 2022,
    price: 42500,
    mileage: 15000,
    fuelType: 'Diesel',
    transmission: 'Automatique',
    engineSize: '2.0L',
    power: '190 ch',
    color: 'Bleu Portimao',
    description: 'BMW Série 3 avec pack M Sport. Véhicule haut de gamme avec toutes les options de confort et sécurité.',
    features: ['Navigation professionnelle', 'Sièges chauffants', 'Head-up Display', 'Harman Kardon', 'Assistance au stationnement'],
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=800&auto=format&fit=crop',
    ],
    condition: 'Excellent',
    isNew: false,
    featured: true,
  },
  {
    id: '5',
    make: 'Mercedes',
    model: 'Classe A',
    year: 2023,
    price: 38900,
    mileage: 8000,
    fuelType: 'Essence',
    transmission: 'Automatique',
    engineSize: '1.3L',
    power: '163 ch',
    color: 'Blanc Polaire',
    description: 'Mercedes Classe A AMG Line, voiture compacte premium avec des finitions haut de gamme et technologies de pointe.',
    features: ['MBUX', 'Réalité augmentée', 'Sièges sport', 'Éclairage d\'ambiance', '64 couleurs', 'Système Keyless-Go'],
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop',
    ],
    condition: 'Comme neuf',
    isNew: true,
    featured: false,
  },
  {
    id: '6',
    make: 'Toyota',
    model: 'Yaris Cross',
    year: 2022,
    price: 26500,
    mileage: 11000,
    fuelType: 'Hybride',
    transmission: 'Automatique',
    engineSize: '1.5L',
    power: '116 ch',
    color: 'Bronze Imperial',
    description: 'Toyota Yaris Cross Hybride, SUV urbain économique et fiable avec système hybride avancé.',
    features: ['Caméra 360°', 'Toyota Safety Sense', 'Chargeur à induction', 'JBL Audio', 'Toit panoramique'],
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
    ],
    condition: 'Très bon',
    isNew: false,
    featured: false,
  },
];

/*
export const getCars = (): Car[] => {
  return cars;
};
*/
export const getCars = async (): Promise<Car[]> => {
  try {
    const response = await fetch('http://localhost:3000/api/cars');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des voitures:", error);
    return [];
  }
};


/*******/


export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};

export const filterCars = (filters: any): Car[] => {
  return cars.filter(car => {
    let match = true;
    
    if (filters.make && filters.make !== '') {
      match = match && car.make.toLowerCase() === filters.make.toLowerCase();
    }
    
    if (filters.model && filters.model !== '') {
      match = match && car.model.toLowerCase().includes(filters.model.toLowerCase());
    }
    
    if (filters.minYear && filters.minYear !== '') {
      match = match && car.year >= parseInt(filters.minYear);
    }
    
    if (filters.maxYear && filters.maxYear !== '') {
      match = match && car.year <= parseInt(filters.maxYear);
    }
    
    if (filters.minPrice && filters.minPrice !== '') {
      match = match && car.price >= parseInt(filters.minPrice);
    }
    
    if (filters.maxPrice && filters.maxPrice !== '') {
      match = match && car.price <= parseInt(filters.maxPrice);
    }
    
    if (filters.fuelType && filters.fuelType !== '') {
      match = match && car.fuelType.toLowerCase() === filters.fuelType.toLowerCase();
    }
    
    return match;
  });
};

import React, { useEffect, useState } from 'react';
import { fetchCars } from '../services/cars';

export default function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars()
      .then(setCars)
      .catch((err) => console.error("فشل في جلب البيانات:", err));
  }, []);

  const getBrandImage = (brand: string) => {
    const imageName = brand.trim().toLowerCase() + ".svg";
    return `/images/${imageName}`;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🚗 قائمة السيارات</h1>
      <ul className="grid grid-cols-2 gap-4">
        {cars.map((car, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 bg-white shadow p-4 rounded"
            style={{ minHeight: 70, minWidth: 70 }}
          >
            <img
  src={getBrandImage(car.marque)}
  alt={car.marque}
  style={{
    width: 64,
    height: 64,
    objectFit: 'contain',
    display: 'block',
    transform: 'scale(5)', // تكبير الصورة داخلياً
    transformOrigin: 'center',
  }}
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "/placeholder.svg";
  }}
/>
            <span className="text-lg">{car.nom} - {car.marque}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

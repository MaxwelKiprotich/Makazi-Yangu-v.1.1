
import { useState } from "react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  imageUrl: string;
}

const PropertyCard = ({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  imageUrl,
}: PropertyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/properties/${id}`}
      className="property-card block bg-white rounded-lg overflow-hidden shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div 
          className="h-64 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute top-4 right-4 bg-makazi text-white px-3 py-1 rounded-full text-sm font-medium">
          {price}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-makazi-dark mb-1 line-clamp-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </p>
        
        <div className="flex justify-between text-sm text-gray-600 border-t pt-3">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{bedrooms} Beds</span>
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{bathrooms} Baths</span>
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
            <span>{area}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;

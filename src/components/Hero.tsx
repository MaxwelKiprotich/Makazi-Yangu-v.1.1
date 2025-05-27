
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showSearchBar?: boolean;
}

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  showSearchBar = false 
}: HeroProps) => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search params:', { location, propertyType, priceRange });
    // In a real application, this would navigate to the properties page with these filters
  };

  return (
    <div 
      className="relative min-h-[600px] flex items-center justify-center dark-overlay"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 reveal stagger-1">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto reveal stagger-2">
          {subtitle}
        </p>
        
        {showSearchBar && (
          <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg p-4 md:p-6 shadow-lg reveal stagger-3">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="City, neighborhood"
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Property Type
                </label>
                <select
                  id="property-type"
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Any Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Price Range
                </label>
                <select
                  id="price-range"
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <option value="">Any Price</option>
                  <option value="0-100000">$0 - $100,000</option>
                  <option value="100000-250000">$100,000 - $250,000</option>
                  <option value="250000-500000">$250,000 - $500,000</option>
                  <option value="500000-1000000">$500,000 - $1,000,000</option>
                  <option value="1000000+">$1,000,000+</option>
                </select>
              </div>
              
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-makazi text-white font-medium rounded-md hover:bg-makazi-dark transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        )}
        
        {!showSearchBar && (
          <Link
            to="/properties"
            className="inline-block bg-makazi hover:bg-makazi-dark text-white font-medium px-6 py-3 rounded-md transition-colors reveal stagger-3"
          >
            Explore Properties
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;

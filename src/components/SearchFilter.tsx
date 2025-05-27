
import { useState } from 'react';

interface SearchFilterProps {
  onFilter: (filters: FilterParams) => void;
}

interface FilterParams {
  query: string;
  propertyType: string;
  priceMin: string;
  priceMax: string;
  bedrooms: string;
  bathrooms: string;
}

const SearchFilter = ({ onFilter }: SearchFilterProps) => {
  const [filters, setFilters] = useState<FilterParams>({
    query: '',
    propertyType: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
  });
  
  const [expanded, setExpanded] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };
  
  const resetFilters = () => {
    setFilters({
      query: '',
      propertyType: '',
      priceMin: '',
      priceMax: '',
      bedrooms: '',
      bathrooms: '',
    });
    onFilter({
      query: '',
      propertyType: '',
      priceMin: '',
      priceMax: '',
      bedrooms: '',
      bathrooms: '',
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md mb-8">
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <input
              type="text"
              id="query"
              name="query"
              placeholder="Location, property name, keyword..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={filters.query}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-makazi text-white font-medium rounded-md hover:bg-makazi-dark transition-colors"
            >
              Search
            </button>
          </div>
          
          <div>
            <button
              type="button"
              className="w-full md:w-auto px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Less Filters' : 'More Filters'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 transform transition-transform ${
                  expanded ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
        
        {expanded && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 animate-fade-in pt-4 border-t">
            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={filters.propertyType}
                onChange={handleChange}
              >
                <option value="">Any Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="priceMin"
                  placeholder="Min"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={filters.priceMin}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="priceMax"
                  placeholder="Max"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={filters.priceMax}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                Bedrooms
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={filters.bedrooms}
                onChange={handleChange}
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1">
                Bathrooms
              </label>
              <select
                id="bathrooms"
                name="bathrooms"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={filters.bathrooms}
                onChange={handleChange}
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            
            <div className="md:col-span-4 flex justify-end">
              <button
                type="button"
                className="px-4 py-2 text-gray-600 hover:text-makazi transition-colors"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchFilter;

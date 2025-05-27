
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PropertyCard from '@/components/PropertyCard';
import SearchFilter from '@/components/SearchFilter';

interface PropertyData {
  id: number;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  imageUrl: string;
  propertyType: string;
}

interface FilterParams {
  query: string;
  propertyType: string;
  priceMin: string;
  priceMax: string;
  bedrooms: string;
  bathrooms: string;
}

const Properties = () => {
  // Sample properties data
  const allProperties: PropertyData[] = [
    {
      id: 1,
      title: 'Modern Apartment with City View',
      price: ' KShs 25,000,000',
      location: 'Nairobi CBD, Kenya',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,200 sq ft',
      imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      propertyType: 'apartment',
    },
    {
      id: 2,
      title: 'Luxury Villa with Pool',
      price: ' KShs 75,000,000',
      location: 'Karen, Nairobi',
      bedrooms: 4,
      bathrooms: 3,
      area: '3,500 sq ft',
      imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      propertyType: 'house',
    },
    {
      id: 3,
      title: 'Cozy Family Home',
      price: ' KShs 35,000,000',
      location: 'Westlands, Nairobi',
      bedrooms: 3,
      bathrooms: 2,
      area: '2,100 sq ft',
      imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      propertyType: 'house',
    },
    {
      id: 4,
      title: 'Penthouse with Rooftop Garden',
      price: ' KShs 50,000,000',
      location: 'Kilimani, Nairobi',
      bedrooms: 3,
      bathrooms: 3,
      area: '2,800 sq ft',
      imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVudGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      propertyType: 'apartment',
    },
    {
      id: 5,
      title: 'Beachfront Cottage',
      price: ' KShs 42,500,000',
      location: 'Diani, Mombasa',
      bedrooms: 2,
      bathrooms: 1,
      area: '1,500 sq ft',
      imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      propertyType: 'house',
    },
    {
      id: 6,
      title: 'Commercial Office Space',
      price: ' KShs 30,000,000',
      location: 'Upper Hill, Nairobi',
      bedrooms: 0,
      bathrooms: 2,
      area: '2,000 sq ft',
      imageUrl: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwc3BhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      propertyType: 'commercial',
    },
    {
      id: 7,
      title: 'Lakeside Villa',
      price: ' KShs 68,000,000',
      location: 'Naivasha, Kenya',
      bedrooms: 4,
      bathrooms: 3,
      area: '3,200 sq ft',
      imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      propertyType: 'house',
    },
    {
      id: 8,
      title: 'Studio Apartment',
      price: ' KShs 12,000,000',
      location: 'South B, Nairobi',
      bedrooms: 1,
      bathrooms: 1,
      area: '600 sq ft',
      imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGlvJTIwYXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      propertyType: 'apartment',
    },
    {
      id: 9,
      title: 'Prime Land for Development',
      price: ' KShs 85,000,000',
      location: 'Kitengela, Kenya',
      bedrooms: 0,
      bathrooms: 0,
      area: '5 acres',
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      propertyType: 'land',
    },
  ];
  
  const [filteredProperties, setFilteredProperties] = useState<PropertyData[]>(allProperties);
  const [loading, setLoading] = useState(false);
  
  const handleFilter = (filters: FilterParams) => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let results = allProperties;
      
      // Filter by search query
      if (filters.query) {
        const query = filters.query.toLowerCase();
        results = results.filter(
          (property) =>
            property.title.toLowerCase().includes(query) ||
            property.location.toLowerCase().includes(query)
        );
      }
      
      // Filter by property type
      if (filters.propertyType) {
        results = results.filter(
          (property) => property.propertyType === filters.propertyType
        );
      }
      
      // Filter by bedrooms
      if (filters.bedrooms) {
        const bedroomsMin = parseInt(filters.bedrooms);
        results = results.filter(
          (property) => property.bedrooms >= bedroomsMin
        );
      }
      
      // Filter by bathrooms
      if (filters.bathrooms) {
        const bathroomsMin = parseInt(filters.bathrooms);
        results = results.filter(
          (property) => property.bathrooms >= bathroomsMin
        );
      }
      
      // Filter by price range
      if (filters.priceMin) {
        const priceMin = parseInt(filters.priceMin.replace(/[^0-9]/g, ''));
        results = results.filter((property) => {
          const propertyPrice = parseInt(property.price.replace(/[^0-9]/g, ''));
          return propertyPrice >= priceMin;
        });
      }
      
      if (filters.priceMax) {
        const priceMax = parseInt(filters.priceMax.replace(/[^0-9]/g, ''));
        results = results.filter((property) => {
          const propertyPrice = parseInt(property.price.replace(/[^0-9]/g, ''));
          return propertyPrice <= priceMax;
        });
      }
      
      setFilteredProperties(results);
      setLoading(false);
    }, 500);
  };
  
  useEffect(() => {
    // Animation on scroll effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [filteredProperties]);

  return (
    <div className="min-h-screen bg-pattern">
      <Navbar />      
          
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchFilter onFilter={handleFilter} />
           <iframe
                  title="Makazi Yangu Location"
                  className="w-full h-64 md:h-72 lg:h-80"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.277444357475!2d36.81982240659724!3d-1.2833562990628387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d499a78c7d%3A0xa3db7eca7304e8d4!2sNairobi%20CBD%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1661854614999!5m2!1sen!2ske"
                  allowFullScreen
                  loading="lazy"
            ></iframe>
            <br/>
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-makazi"></div>
            </div>
          ) : filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <div 
                  key={property.id} 
                  className={`reveal-on-scroll ${
                    index % 3 === 1 ? 'stagger-2' : index % 3 === 2 ? 'stagger-3' : ''
                  }`}
                >
                  <PropertyCard {...property} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No properties found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search criteria.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Properties;

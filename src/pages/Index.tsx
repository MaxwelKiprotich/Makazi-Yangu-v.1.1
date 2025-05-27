
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Link } from 'react-router-dom';

const Index = () => {
  // Sample featured properties data
  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Apartment with City View',
      price: ' KShs 25,000,000',
      location: 'Nairobi CBD, Kenya',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,200 sq ft',
      imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
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
    },
  ];
  
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      content: "Makazi Yangu helped me find my dream home in just two weeks. The staff were incredibly helpful and made the process so easy.",
      author: "Sam Zeddy",
      role: "Homeowner",
      avatar: "https://i.ibb.co/p6yfxrcD/zeddy.jpg",
    },
    {
      id: 2,
      content: "I've worked with many real estate agencies, but none compare to the service and professionalism of Makazi Yangu. Highly recommended!",
      author: "Rosemary Kerubo",
      role: "Property Investor",
      avatar: "https://i.ibb.co/QFkY49QZ/rosemary.jpg",
    },
    {
      id: 3,
      content: "The team really understood my needs and budget constraints. They found me a perfect property that checked all my boxes.",
      author: "Jane Chumba",
      role: "First-time Buyer",
      avatar: "https://i.ibb.co/JFncnF9r/jane.jpg",
    },
  ];
  
  // Animation on scroll effect
  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen bg-pattern">
      <Navbar />
      
      <Hero
        title="Find Your Dream Home"
        subtitle="Discover beautiful properties across Kenya"
        backgroundImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlJTIwYWVyaWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
        showSearchBar={true}
      />
      
      {/* Featured Properties Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-3xl font-bold text-makazi-dark mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties, each offering quality living spaces in prime locations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="reveal-on-scroll">
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 reveal-on-scroll">
            <Link
              to="/properties"
              className="inline-block bg-white border border-makazi text-makazi font-medium px-6 py-3 rounded-md hover:bg-makazi hover:text-white transition-colors"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="bg-makazi-light py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-3xl font-bold text-makazi-dark mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive real estate services to help you buy, sell, or rent properties with ease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md reveal-on-scroll">
              <div className="bg-makazi text-white h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-makazi-dark mb-3 text-center">Property Sales</h3>
              <p className="text-gray-600 text-center">
                Find your dream home or sell your property with our expert guidance through every step of the process.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md reveal-on-scroll stagger-2">
              <div className="bg-makazi text-white h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-makazi-dark mb-3 text-center">Property Rentals</h3>
              <p className="text-gray-600 text-center">
                Discover premium rental properties or find qualified tenants for your investment property.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md reveal-on-scroll stagger-3">
              <div className="bg-makazi text-white h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-makazi-dark mb-3 text-center">Property Management</h3>
              <p className="text-gray-600 text-center">
                Let us handle the day-to-day management of your properties, from maintenance to tenant relations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-3xl font-bold text-makazi-dark mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't take our word for it - hear what our satisfied clients have to say about their experiences with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`bg-white p-6 rounded-lg shadow-md reveal-on-scroll ${
                  index === 1 ? 'stagger-2' : index === 2 ? 'stagger-3' : ''
                }`}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-makazi-dark">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-makazi text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
            <p className="text-xl mb-8">
              Let us help you navigate the real estate market with ease and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/properties"
                className="bg-white text-makazi font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Browse Properties
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white font-medium px-8 py-3 rounded-md hover:bg-white hover:text-makazi transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;


import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import "./About.css"

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Joseph Kemboi',
      position: 'Founder & CEO',
      bio: 'Sarah has over 15 years of experience in real estate and founded Makazi Yangu with a vision to revolutionize property finding in Kenya.',
      imageUrl: 'https://i.ibb.co/fzLWg0WG/485726770-1217211533301955-3550867969765296596-n.jpg',
    },
    {
      name: 'David Mwangi',
      position: 'Head of Sales',
      bio: 'David brings his wealth of knowledge in property valuation and market analysis to help clients make informed decisions.',
      imageUrl: 'https://randomuser.me/api/portraits/men/54.jpg',
    },
    {
      name: 'Grace Ochieng',
      position: 'Property Manager',
      bio: 'Grace ensures all our listed properties meet the highest standards and manages client relationships with utmost professionalism.',
      imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      name: 'James Kamau',
      position: 'Marketing Director',
      bio: 'James leads our marketing efforts, ensuring our properties reach the right audience through innovative strategies.',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  ];
  
  // Values data
  const values = [
    {
      title: 'Integrity',
      description: 'We believe in transparent and honest dealings with all our clients and partners.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Excellence',
      description: 'We strive to exceed expectations in every aspect of our service delivery.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: 'Client Focus',
      description: 'Your satisfaction is our top priority, and we tailor our services to meet your unique needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description: 'We continuously evolve and adopt new technologies to improve our services.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
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
        title="About Us"
        subtitle="Welcome to Makazi Yangu - Your Trusted Real Estate Partner"
        backgroundImage="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
      />
      
      {/* Our Story Section */}
      <section className="py-16 ">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <h2 className="text-3xl font-bold text-makazi-dark mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
              Makazi Yangu was born out of a simple observation — finding a home in Kenya was unnecessarily difficult, time-consuming, and often unreliable. From misleading listings to unresponsive agents, we realized the real estate experience needed a serious upgrade. That’s when we set out to build a platform that puts transparency, convenience, and trust at the heart of every property search.
              </p>
              <p className="text-gray-600 mb-4">
              What started as a small idea quickly grew into a mission to transform how Kenyans buy, rent, and sell property. We combined local real estate knowledge with modern technology to create an intuitive platform where users can easily explore properties, connect with verified agents, and make informed decisions — all from their phones or laptops. Our team is made up of real estate enthusiasts, tech developers, and customer care professionals who are passionate about helping people find their perfect space.

              </p>
              <p className="text-gray-600">
              Today, Makazi Yangu is more than just a property website — it’s a growing community of buyers, sellers, renters, and agents working together to make homeownership and real estate investment more accessible across Kenya. As we continue to grow, our goal remains the same: to simplify real estate for every Kenyan, no matter where they are on their journey.
              </p>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl reveal-on-scroll stagger-2">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVhbCUyMGVzdGF0ZSUyMHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                alt="Makazi Yangu Team"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-makazi-dark to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <img
                  src="https://i.ibb.co/SDMhk5Y6/Whats-App-Image-2025-05-14-at-2-41-44-PM-removebg-preview.png"
                  alt="Makazi Yangu Logo"
                  className="h-20 w-20 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-makazi-light">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-3xl font-bold text-makazi-dark mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape our approach to serving our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className={`bg-white p-6 rounded-lg shadow-md text-center reveal-on-scroll ${
                  index === 1 ? 'stagger-1' : index === 2 ? 'stagger-2' : index === 3 ? 'stagger-3' : ''
                }`}
              >
                <div className="text-makazi mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-makazi-dark mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
     {/*  Our Team Section *}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-3xl font-bold text-makazi-dark mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated professionals work tirelessly to help you find the perfect property solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 about-section">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name} 
                className={`bg-white rounded-lg overflow-hidden shadow-md reveal-on-scroll ${
                  index === 1 ? 'stagger-1' : index === 2 ? 'stagger-2' : index === 3 ? 'stagger-3' : ''
                }`}
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-makazi-dark mb-1">{member.name}</h3>
                  <p className="text-makazi font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-gray-500 hover:text-makazi transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-makazi transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-makazi transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
    {/*  Awards and Recognition Section *
      <section className="py-16 bg-makazi-light">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-3xl font-bold text-makazi-dark mb-4">Awards & Recognition</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to have received recognition for our commitment to excellence in real estate.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            <div className="p-6 reveal-on-scroll">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center shadow-md mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-makazi" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <p className="text-center font-medium">Best Real Estate Agency 2023</p>
            </div>
            
            <div className="p-6 reveal-on-scroll stagger-1">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center shadow-md mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-makazi" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <p className="text-center font-medium">Excellence in Customer Service</p>
            </div>
            
            <div className="p-6 reveal-on-scroll stagger-2">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center shadow-md mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-makazi" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-center font-medium">Most Innovative Agency 2022</p>
            </div>
            
            <div className="p-6 reveal-on-scroll stagger-3">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center shadow-md mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-makazi" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-center font-medium">Top Property Management Firm</p>
            </div>
          </div>
        </div>
      </section>
      */}
      <Footer />
    </div>
  );
};

export default About;

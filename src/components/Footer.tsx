
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links data
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/makaziyangu',
      icon: <Facebook className="h-5 w-5" />,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/ld.maxie',
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/makaziyangu',
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/makaziyangu',
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/makaziyangu',
      icon: <Youtube className="h-5 w-5" />,
    }
  ];

  return (
    <footer className="bg-makazi text-white pt-12 pb-6">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://i.ibb.co/SDMhk5Y6/Whats-App-Image-2025-05-14-at-2-41-44-PM-removebg-preview.png" 
                alt="Makazi Yangu Logo" 
                className="h-20 w-20 mr-3"
              />
              <span className="font-bold text-xl">Makazi Yangu</span>
            </div>
            <p className="text-sm text-gray-300">
              Your premier destination for finding your dream home in the heart of quality living.
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors" 
                  aria-label={`Visit our ${social.name} page`}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/properties" className="text-gray-300 hover:text-white transition-colors">Properties</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">123 Real Estate Avenue</p>
              <p className="mb-2">Nairobi, Kenya</p>
              <p className="mb-2">
                <a href="tel:+254123456789" className="hover:text-white transition-colors">+254 123 456 789</a>
              </p>
              <p>
                <a href="mailto:info@makaziyangu.com" className="hover:text-white transition-colors">
                  info@makaziyangu.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-300 text-sm">
            &copy; {currentYear} Makazi Yangu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

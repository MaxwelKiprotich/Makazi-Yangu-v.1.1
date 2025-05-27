
import { useState } from 'react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setLoading(false);
      toast.success('Your message has been sent successfully!');
    }, 1500);
  };

  // Social media links data
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/makaziyangu',
      icon: <Facebook className="h-5 w-5" />,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/ld.maxie',
      icon: <Instagram className="h-5 w-5" />,
      color: 'bg-pink-600 hover:bg-pink-700',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/makaziyangu',
      icon: <Twitter className="h-5 w-5" />,
      color: 'bg-sky-500 hover:bg-sky-600',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/makaziyangu',
      icon: <Linkedin className="h-5 w-5" />,
      color: 'bg-blue-700 hover:bg-blue-800',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/makaziyangu',
      icon: <Youtube className="h-5 w-5" />,
      color: 'bg-red-600 hover:bg-red-700',
    }
  ];

  return (
    <div className="min-h-screen bg-pattern">
      <Navbar />
      
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for any inquiries"
        backgroundImage="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBlc3RhdGUlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
      />
      
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal-on-scroll">
              <h2 className="text-3xl font-bold text-makazi-dark mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-makazi focus:border-makazi"
                      placeholder="Maxwel Kiprotich"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-makazi focus:border-makazi"
                      placeholder="mrmax@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-makazi focus:border-makazi"
                      placeholder="+254 123 456 789"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-makazi focus:border-makazi"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="property">Property Inquiry</option>
                      <option value="sell">Selling Property</option>
                      <option value="rent">Renting Property</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-makazi focus:border-makazi"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full md:w-auto px-8 py-3 bg-makazi text-white font-medium rounded-md hover:bg-makazi-dark transition-colors ${
                      loading ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            <div className="reveal-on-scroll stagger-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <iframe
                  title="Makazi Yangu Location"
                  className="w-full h-64 md:h-72 lg:h-80"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.277444357475!2d36.81982240659724!3d-1.2833562990628387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d499a78c7d%3A0xa3db7eca7304e8d4!2sNairobi%20CBD%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1661854614999!5m2!1sen!2ske"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-makazi-dark mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-makazi mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <address className="not-italic text-gray-600">
                             
                          Nairobi, Kenya
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-makazi mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-gray-600">
                          <a href="tel:+254123456789" className="hover:text-makazi transition-colors">
                            +254117435891
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-makazi mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-600">
                          <a href="mailto:info@makaziyangu.com" className="hover:text-makazi transition-colors">
                              info@makaziyangu.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-makazi mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Business Hours</h4>
                        <p className="text-gray-600">
                          Monday - Friday: 9AM - 5PM<br />
                          Saturday: 10AM - 2PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Follow Us</h4>
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((social, index) => (
                        <a 
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center rounded-lg p-2.5 text-white transition-all duration-200 ${social.color}`}
                          aria-label={`Visit our ${social.name} page`}
                        >
                          {social.icon}
                          <span className="sr-only">{social.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-makazi-light">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-3xl font-bold text-makazi-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md reveal-on-scroll">
                <h3 className="text-xl font-semibold text-makazi-dark mb-3">How do I schedule a property viewing?</h3>
                <p className="text-gray-600">
                  You can schedule a property viewing by contacting us through our website, email, or phone. Our team will arrange a convenient time for you to visit the property with one of our agents.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md reveal-on-scroll stagger-1">
                <h3 className="text-xl font-semibold text-makazi-dark mb-3">What documents do I need when buying a property?</h3>
                <p className="text-gray-600">
                  When buying a property, you'll need identification documents, proof of income, bank statements, and any other financial documentation required by your lender. Our team will guide you through the specific requirements for your situation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md reveal-on-scroll stagger-2">
                <h3 className="text-xl font-semibold text-makazi-dark mb-3">How long does the buying process take?</h3>
                <p className="text-gray-600">
                  The property buying process typically takes between 30-90 days, depending on various factors such as financing arrangements, property inspections, and legal requirements. Our experienced team works to make the process as smooth and efficient as possible.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md reveal-on-scroll stagger-3">
                <h3 className="text-xl font-semibold text-makazi-dark mb-3">What services do you offer for property sellers?</h3>
                <p className="text-gray-600">
                  We offer comprehensive services for property sellers, including market analysis, property valuation, professional photography, marketing across multiple platforms, handling viewings, negotiating offers, and guiding you through the legal aspects of the sale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;

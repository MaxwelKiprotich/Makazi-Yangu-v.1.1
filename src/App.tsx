
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductItem from "./pages/ProductItem";

const queryClient = new QueryClient();

const App = () => {
  // Add fade-in animation to the whole page
  useEffect(() => {
    document.body.classList.add('bg-pattern');
    
    // Initialize animation on scroll
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
    
    // Find all elements with reveal-on-scroll class after they're rendered
    setTimeout(() => {
      const revealElements = document.querySelectorAll(".reveal-on-scroll");
      revealElements.forEach((element) => {
        observer.observe(element);
      });
    }, 100);
    
    return () => {
      document.body.classList.remove('bg-pattern');
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/properties/:property_id" element={<ProductItem />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

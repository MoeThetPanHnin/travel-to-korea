
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

// List of Korean dishes for the carousel
const cuisineItems = [
  {
    id: 1,
    name: "Kimchi",
    description: "Korea's famous spicy fermented cabbage, a staple side dish in Korean cuisine.",
    image: "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    id: 2,
    name: "Bibimbap",
    description: "A colorful rice bowl topped with vegetables, meat, egg, and gochujang (chili pepper paste).",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    id: 3,
    name: "Korean BBQ",
    description: "Marinated meat grilled at your table, served with various side dishes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwb25t9zHuGY1YWkQLSNP31ImwE6V-m5P6UA&s"
  },
  {
    id: 4,
    name: "Tteokbokki",
    description: "Chewy rice cakes in a sweet and spicy sauce, a popular Korean street food.",
    image: "https://www.simplyrecipes.com/thmb/1dEnXGBvPCrko8fBGhyCiJuvpUg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Tteokbokki-LEAD-9d-63d62a9c129a48feb3427a9eb48799a7.jpg?auto=format&fit=crop&q=80&w=600&h=400"
  }
];

const CuisineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Reveal animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const childElements = sectionRef.current?.querySelectorAll('.reveal');
    childElements?.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  // Auto-rotate the carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cuisineItems.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section 
      id="cuisine" 
      className="py-16 bg-korea-blue text-white korean-pattern"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Delicious <span className="text-korea-blossom">Korean Cuisine</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Savor the unique flavors and culinary traditions of Korea
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative h-80 lg:h-96 overflow-hidden rounded-xl shadow-lg reveal">
            {cuisineItems.map((item, index) => (
              <div 
                key={item.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  index === activeIndex ? "opacity-100" : "opacity-0"
                )}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                </div>
              </div>
            ))}
            
           {/* Description for the active dish */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {cuisineItems.map((_, index) => (
                <button 
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === activeIndex ? "bg-korea-blossom" : "bg-white/50"
                  )}
                  onClick={() => setActiveIndex(index)}
                ></button>
              ))}
            </div>
          </div>
          
          {/* Description */}
          <div className="space-y-6 reveal">
            <h3 className="text-2xl font-semibold text-korea-blossom">
              {cuisineItems[activeIndex].name}
            </h3>
            <p className="text-gray-300">
              {cuisineItems[activeIndex].description}
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-korea-gold text-lg mr-2">✓</span>
                <span>Fresh, high-quality ingredients</span>
              </div>
              <div className="flex items-center">
                <span className="text-korea-gold text-lg mr-2">✓</span>
                <span>Balance of flavors and nutrition</span>
              </div>
              <div className="flex items-center">
                <span className="text-korea-gold text-lg mr-2">✓</span>
                <span>Rich cultural history in every dish</span>
              </div>
            </div>
            <button className="bg-korea-blossom hover:bg-white hover:text-korea-blue text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              Explore Food Tours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuisineSection;

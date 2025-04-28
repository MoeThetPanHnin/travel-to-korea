
import { useEffect, useRef } from 'react';
import DestinationCard from './DestinationCard';

const destinations = [
  {
    id: 1,
    title: "Gyeongbokgung Palace",
    location: "Seoul",
    image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&q=80&w=600&h=400",
    description: "The main royal palace of the Joseon dynasty, with stunning architecture and beautiful gardens.",
    rating: 4.8
  },
  {
    id: 2,
    title: "Jeju Island",
    location: "Jeju",
    image: "https://myseoulbox.com/cdn/shop/articles/VS_21_8c757746-f032-413d-9d52-160afacd7397.png?v=1722517895&auto=format&fit=crop&q=80&w=600&h=400",
    description: "A volcanic island with stunning beaches, waterfalls, and the iconic Hallasan Mountain.",
    rating: 4.9
  },
  {
    id: 3,
    title: "Namsan Tower",
    location: "Seoul",
    image: "https://images.squarespace-cdn.com/content/v1/5d8cb5275e0a4b5357bc0f87/1593424953184-5M14NNFR1Z34E4BFD4YQ/History+of+Namsan+Tower&auto=format&fit=crop&q=80&w=600&h=400",
    description: "Iconic tower offering panoramic views of Seoul with love locks and cultural exhibits.",
    rating: 4.6
  },
  {
    id: 4,
    title: "Bukchon Hanok Village",
    location: "Seoul",
    image: "https://b1945558.smushcdn.com/1945558/wp-content/uploads/2019/12/bukchon-hanok-village-gahoe-dong-seoul-hanbok.jpg?lossy=2&strip=1&webp=10",
    description: "A traditional Korean village featuring hundreds of hanoks (traditional Korean houses).",
    rating: 4.7
  }
];

const DestinationsSection = () => {
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
  
  return (
    <section id="destinations" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-korea-blue mb-4">
            Popular Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the most beautiful and culturally rich destinations across South Korea
          </p>
        </div>
        
        {/* Destinations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className="reveal" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <DestinationCard 
                title={destination.title}
                location={destination.location}
                image={destination.image}
                description={destination.description}
                rating={destination.rating}
              />
            </div>
          ))}
        </div>
        {/* View all button */}
        <div className="text-center mt-10 reveal">
          <button className="bg-white text-korea-blue border-2 border-korea-blue hover:bg-korea-blue hover:text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;

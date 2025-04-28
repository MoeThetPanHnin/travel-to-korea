
import { useEffect, useRef } from 'react';

// List of cultural experiences
const cultureItems = [
  {
    id: 1,
    title: "K-Pop & Entertainment",
    icon: "🎵",
    description: "Experience the global phenomenon of K-pop and Korean entertainment that has captivated audiences worldwide.",
    image: "https://i.etsystatic.com/23564009/r/il/f4133f/6488235023/il_fullxfull.6488235023_dvc4.jpg"
  },
  {
    id: 2,
    title: "Traditional Hanbok",
    icon: "👘",
    description: "Try on the beautiful traditional Korean attire known for its vibrant colors and elegant design.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkZ3xiWlxfwMUn4oRPFr1VPxqvCc6TtQyuA&s"
  },
  {
    id: 3,
    title: "Temple Stay",
    icon: "🏮",
    description: "Immerse yourself in Buddhist culture with an overnight stay at a traditional Korean temple.",
    image: "https://ik.imgkit.net/3vlqs5axxjf/TAW/uploadedImages/All_Gateways/ASPAC/Asia/KoreanTempleStays_HERO.jpg?tr=w-1200%2Cfo-auto"
  }
];

const CultureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Add reveal animation when section is in view
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
    <section id="culture" className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-korea-blue mb-4">
            Cultural Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in the rich cultural heritage of Korea through these authentic experiences
          </p>
        </div>
        
        {/* Culture cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cultureItems.map((item, index) => (
            <div 
              key={item.id}
              className="reveal" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-soft h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-korea-blue mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-korea-blossom font-medium hover:text-korea-blue transition-colors">
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;

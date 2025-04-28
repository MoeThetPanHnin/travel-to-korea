import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Hero section with a background image, title, and search bar
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect for the background image
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white bg-korea-blue"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26, 58, 90, 0.7), rgba(26, 58, 90, 0.9)), url('https://images.unsplash.com/photo-1538669715315-157b35add22e?auto=format&fit=crop&q=80&w=1920&h=1080')",
      }}
    >
      {/* Decorative overlay */}
      <div className="absolute inset-0 korean-pattern opacity-20"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">
          Discover the Beauty of <span className="text-deep-primaryGold">Korea</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-shadow">
          Experience the perfect blend of ancient traditions and modern innovations
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto">
          <div className="flex items-center">
            <span className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-deep-sageGreen pointer-events-none" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full py-3 pl-10 pr-4 rounded-l-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-deep-primaryGold"
              />
            </span>
            <Button
              className="rounded-l-none bg-deep-primaryGold hover:bg-deep-gray text-white transition-colors duration-300 h-[48px] px-6"
              style={{ height: "48px" }} 
            >
              Search
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
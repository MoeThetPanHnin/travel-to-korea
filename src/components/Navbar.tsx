import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Navbar component with simple logic and clear structure
function Navbar({ transparent = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Change navbar style when scrolling
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "#destinations" },
    { name: "Culture", href: "#culture" },
    { name: "Cuisine", href: "#cuisine" },
    { name: "Plan Your Trip", href: "#plan" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !transparent
          ? "bg-korea-blue shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">
            Korea<span className="text-deep-primaryGold">Travel</span>
          </span>
        </a>
 
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-white transition-colors hover:text-deep-primaryGold"
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-deep-primaryGold hover:bg-deep-gray text-white transition-colors duration-300">
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        >
          {showMobileMenu ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-korea-blue">
          <div className="container mx-auto py-4 px-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white font-medium py-2 hover:text-deep-primaryGold"
                  onClick={() => setShowMobileMenu(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-deep-primaryGold hover:bg-deep-gray text-white w-full transition-colors duration-300">
                Book Now
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
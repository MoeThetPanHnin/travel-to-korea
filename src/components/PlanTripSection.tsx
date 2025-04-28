import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Plane, Hotel, Navigation } from "lucide-react";

// This is the main section for planning a trip
const PlanTripSection = () => {
  // This state keeps track of which tab is active (flights, hotels, etc.)
  const [activeTab, setActiveTab] = useState('flights');
  // This ref is used for scroll animations
  const sectionRef = useRef<HTMLDivElement>(null);

  // These are the tabs for the booking section
  const tabs = [
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'hotels', label: 'Hotels', icon: Hotel },
    { id: 'tours', label: 'Tours', icon: Navigation },
    { id: 'packages', label: 'Packages', icon: Calendar },
  ];

  // This effect adds a reveal animation when the section is in view
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
    // Main section for planning
    <section 
      id="plan" 
      className="py-16 bg-gray-100"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-korea-blue mb-4">
              Plan Your Korean Adventure
            </h2>
            <p className="text-gray-600">
              Start planning your perfect trip to Korea with our easy-to-use tools
            </p>
          </div>
          
          {/* Booking Tabs */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden reveal">
            {/* Tab Navigation */}
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  // Highlight the active tab
                  className={`flex items-center justify-center py-4 px-6 text-sm md:text-base font-medium flex-1 min-w-[120px] transition-colors border-b-2 ${
                    activeTab === tab.id
                      ? 'text-korea-blossom border-korea-blossom'
                      : 'text-gray-500 border-transparent hover:text-korea-blue'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="p-6">
              {/* Flights Tab */}
              {activeTab === 'flights' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                      <input 
                        type="text" 
                        placeholder="Departure City"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                      <input 
                        type="text" 
                        placeholder="Seoul, Korea"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Departure Date</label>
                      <input 
                        type="date"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
                      <input 
                        type="date"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                      <select 
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      >
                        <option>1 Adult</option>
                        <option>2 Adults</option>
                        <option>3 Adults</option>
                        <option>4 Adults</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-korea-blossom hover:bg-korea-blue text-white font-medium py-3">
                    Search Flights
                  </Button>
                </div>
              )}
              
              {/* Hotels Tab */}
              {activeTab === 'hotels' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                      <input 
                        type="text" 
                        placeholder="Seoul, Korea"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Name (Optional)</label>
                      <input 
                        type="text" 
                        placeholder="Hotel name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                      <input 
                        type="date"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                      <input 
                        type="date"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                      <select 
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      >
                        <option>1 Room, 2 Guests</option>
                        <option>1 Room, 1 Guest</option>
                        <option>2 Rooms, 3 Guests</option>
                        <option>2 Rooms, 4 Guests</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-korea-blossom hover:bg-korea-blue text-white font-medium py-3">
                    Search Hotels
                  </Button>
                </div>
              )}
              
              {/* Tours Tab */}
              {activeTab === 'tours' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                      <input 
                        type="text" 
                        placeholder="Seoul, Korea"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tour Type</label>
                      <select 
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      >
                        <option>All Tours</option>
                        <option>Cultural Tours</option>
                        <option>Food Tours</option>
                        <option>Adventure Tours</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <input 
                        type="date"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of People</label>
                      <select 
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      >
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4+ People</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-korea-blossom hover:bg-korea-blue text-white font-medium py-3">
                    Find Tours
                  </Button>
                </div>
              )}
              
              {/* Packages Tab */}
              {activeTab === 'packages' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Departure City</label>
                      <input 
                        type="text" 
                        placeholder="Your City"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
                      <select 
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      >
                        <option>All Packages</option>
                        <option>Seoul City Break</option>
                        <option>Korea Highlights</option>
                        <option>K-Culture Experience</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                      <input 
                        type="date"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                      <select 
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      >
                        <option>5-7 Days</option>
                        <option>8-10 Days</option>
                        <option>11-14 Days</option>
                        <option>15+ Days</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                      <select 
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-korea-blossom"
                      >
                        <option>2 Travelers</option>
                        <option>1 Traveler</option>
                        <option>3 Travelers</option>
                        <option>4+ Travelers</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-korea-blossom hover:bg-korea-blue text-white font-medium py-3">
                    Find Packages
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTripSection;
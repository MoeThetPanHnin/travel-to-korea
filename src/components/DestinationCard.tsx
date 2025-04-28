
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  title: string;
  location: string;
  image: string;
  description: string;
  rating: number;
}

const DestinationCard = ({ title, location, image, description, rating }: DestinationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "group rounded-xl overflow-hidden shadow-soft bg-white transform transition-all duration-300",
        isHovered ? "scale-[1.02]" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        
        {/* Rating */}
        <div className="absolute top-3 right-3 bg-white/90 rounded-full py-1 px-2 text-sm font-semibold text-korea-blue flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg 
              key={i} 
              className={cn(
                "w-4 h-4 fill-current", 
                i < Math.floor(rating) ? "text-korea-gold" : "text-gray-300"
              )} 
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
          <span className="ml-1">{rating.toFixed(1)}</span>
        </div>
        
        {/* Location */}
        <div className="absolute bottom-3 left-3 flex items-center text-white">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm font-medium">{location}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-korea-blue mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <button className="text-korea-blossom font-medium text-sm hover:underline">
            View Details
          </button>
          <span className="text-korea-blue text-sm font-medium">
            Popular Choice
          </span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;

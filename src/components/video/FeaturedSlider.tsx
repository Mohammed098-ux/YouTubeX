import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Badge from '../common/Badge';

interface FeaturedItemProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  badges?: readonly ('ai' | 'sponsored' | 'hot' | 'new')[];
}

interface FeaturedSliderProps {
  items: FeaturedItemProps[];
}

const FeaturedSlider: React.FC<FeaturedSliderProps> = ({ items }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { current: container } = sliderRef;
      const scrollAmount = container.clientWidth;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative mb-8">
      <div 
        ref={sliderRef}
        className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
      >
        {items.map((item, index) => (
          <div 
            key={item.id}
            className="min-w-full snap-start"
          >
            <FeaturedItem {...item} />
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-background-primary/50 backdrop-blur-sm text-white hover:bg-background-primary/80 transition-colors"
        onClick={() => handleScroll('left')}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-background-primary/50 backdrop-blur-sm text-white hover:bg-background-primary/80 transition-colors"
        onClick={() => handleScroll('right')}
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === 0 ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const FeaturedItem: React.FC<FeaturedItemProps> = ({
  title,
  description,
  thumbnail,
  badges = []
}) => {
  return (
    <div className="relative h-[50vh] min-h-[400px]">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/60 to-transparent" />
      </div>
      
      {/* Content */}
      <motion.div 
        className="relative h-full flex flex-col justify-end p-6 md:p-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex gap-2 mb-4">
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge} />
            ))}
          </div>
        )}
        
        <h1 className="text-2xl md:text-4xl font-poppins font-bold mb-3">{title}</h1>
        <p className="text-text-secondary text-sm md:text-base mb-6 max-w-2xl">{description}</p>
        
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-gradient-accent text-black font-medium py-2 px-4 rounded-full hover:opacity-90 transition-opacity">
            <Play size={18} fill="currentColor" />
            <span>Watch Now</span>
          </button>
          
          <button className="flex items-center gap-2 bg-background-tertiary text-white font-medium py-2 px-4 rounded-full hover:bg-background-secondary transition-colors">
            <span>Learn More</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedSlider;
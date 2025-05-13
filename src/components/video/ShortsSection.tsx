import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ShortVideoCard from './ShortVideoCard';

interface ShortsSectionProps {
  shorts: Array<{
    id: string;
    thumbnail: string;
    title: string;
    views: number;
  }>;
}

const ShortsSection: React.FC<ShortsSectionProps> = ({ shorts }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef;
      const scrollAmount = container.clientWidth * 0.8;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div 
      className="mb-8 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between mb-4 px-4">
        <div className="flex items-center gap-3">
          <svg height="24" viewBox="0 0 24 24" width="24" focusable="false">
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" fill="currentColor"></path>
          </svg>
          <h2 className="text-lg font-poppins font-semibold">Shorts</h2>
        </div>
        <div className="flex gap-2">
          <button 
            className="p-1.5 rounded-full bg-background-tertiary hover:bg-background-secondary transition-colors"
            onClick={() => handleScroll('left')}
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            className="p-1.5 rounded-full bg-background-tertiary hover:bg-background-secondary transition-colors"
            onClick={() => handleScroll('right')}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide"
      >
        {shorts.map((short) => (
          <div 
            key={short.id} 
            className="flex-shrink-0 w-[180px]"
          >
            <ShortVideoCard {...short} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ShortsSection;
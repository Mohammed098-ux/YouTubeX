import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VideoCard from './VideoCard';

interface Video {
    id: string;
    thumbnail: string;
    title: string;
    channelName: string;
    channelAvatar?: string;
    views: number;
    timeAgo: string;
    duration: string;
  badges?: readonly ('ai' | 'sponsored' | 'hot' | 'new')[];
}

interface CategoryRowProps {
  title: string;
  videos: Video[];
}

const CategoryRow: React.FC<CategoryRowProps> = ({ title, videos }) => {
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
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-lg font-poppins font-semibold">{title}</h2>
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
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="flex-shrink-0 w-full sm:w-[300px]"
          >
            <VideoCard {...video} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryRow;
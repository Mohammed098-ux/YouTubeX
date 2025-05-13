import React from 'react';
import { motion } from 'framer-motion';
import { formatViews } from '../../utils/format';

interface ShortVideoCardProps {
  thumbnail: string;
  title: string;
  views: number;
}

const ShortVideoCard: React.FC<ShortVideoCardProps> = ({
  thumbnail,
  title,
  views
}) => {
  return (
    <motion.div 
      className="card group cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      {/* Thumbnail with higher aspect ratio for shorts */}
      <div className="relative overflow-hidden rounded-t-xl aspect-[9/16]">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="font-medium text-sm line-clamp-2 text-white">{title}</h3>
          <p className="text-white/80 text-xs mt-1">{formatViews(views)} views</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ShortVideoCard;
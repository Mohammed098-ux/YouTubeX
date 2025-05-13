import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MoreVertical, Play, Clock } from 'lucide-react';
import Badge from '../common/Badge';
import AddToStudyButton from './AddToStudyButton';
import { formatViews, formatTimeAgo } from '../../utils/format';

interface VideoCardProps {
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

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  thumbnail,
  title,
  channelName,
  channelAvatar,
  views,
  timeAgo,
  duration,
  badges = []
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="card group cursor-pointer"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.2 }}
    >
      {/* Thumbnail section */}
      <div className="relative overflow-hidden rounded-t-xl aspect-video">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 bg-background-primary/80 text-white text-xs px-1 py-0.5 rounded">
          {duration}
        </div>
        
        {/* Hover overlay */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex gap-3">
              <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                <Play size={20} className="text-white" fill="white" />
              </button>
              <AddToStudyButton videoId={id} className="backdrop-blur-sm" />
              <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                <Clock size={20} className="text-white" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Badges */}
        {badges.length > 0 && (
          <div className="absolute top-2 left-2 flex gap-1">
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge} />
            ))}
          </div>
        )}
      </div>

      {/* Content section */}
      <div className="p-3">
        <div className="flex gap-3">
          {/* Channel avatar */}
          {channelAvatar && (
            <div className="flex-shrink-0 w-9 h-9 rounded-full overflow-hidden">
              <img 
                src={channelAvatar} 
                alt={channelName} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="flex-1">
            <h3 className="font-medium text-sm line-clamp-2 mb-1">{title}</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-xs">{channelName}</p>
                <p className="text-text-secondary text-xs">
                  {formatViews(views)} views • {formatTimeAgo(timeAgo)}
                </p>
              </div>
              <button className="text-text-secondary hover:text-text-primary p-1">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
import React from 'react';
import { motion } from 'framer-motion';
import { BookMarked, BookmarkPlus } from 'lucide-react';
import { useStudyMode } from '../../store/useStudyMode';

interface AddToStudyButtonProps {
  videoId: string;
  className?: string;
}

const AddToStudyButton: React.FC<AddToStudyButtonProps> = ({ videoId, className }) => {
  const { addToStudy, removeFromStudy, isInStudyMode } = useStudyMode();
  const isStudy = isInStudyMode(videoId);

  const handleToggle = () => {
    if (isStudy) {
      removeFromStudy(videoId);
    } else {
      addToStudy(videoId);
    }
  };

  return (
    <motion.button
      className={`rounded-full p-2 transition-colors ${
        isStudy
          ? 'bg-accent-green/20 text-accent-green'
          : 'bg-background-tertiary/50 text-text-secondary hover:bg-background-tertiary'
      } ${className}`}
      onClick={handleToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isStudy ? <BookMarked size={18} /> : <BookmarkPlus size={18} />}
    </motion.button>
  );
};

export default AddToStudyButton;
import React from 'react';
import FeaturedSlider from '../components/video/FeaturedSlider';
import ShortsSection from '../components/video/ShortsSection';
import CategoryRow from '../components/video/CategoryRow';
import VideoCard from '../components/video/VideoCard';
import { useStudyMode } from '../store/useStudyMode';
import { useNavigate } from 'react-router-dom';

import { 
  featuredContent, 
  shortsData, 
  aiContent,
  startupContent,
  webDevContent
} from '../data/mockData';

const HomePage: React.FC = () => {
  const { isStudyMode, studyVideos } = useStudyMode();
  const navigate = useNavigate();

  const allVideos = [...aiContent, ...startupContent, ...webDevContent];
  const studyModeVideos = allVideos.filter(video => studyVideos.includes(video.id));

  if (isStudyMode) {
    return (
      <div className="pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 pt-6">
            <h1 className="text-2xl font-poppins font-semibold mb-2">Study Mode</h1>
            <p className="text-text-secondary">Focus on what matters. Your selected study materials.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyModeVideos.map(video => (
              <div key={video.id}>
                <VideoCard {...video} />
              </div>
            ))}
          </div>
          {studyModeVideos.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary">No videos added to study mode yet.</p>
              <p className="text-text-secondary mt-2">Click the bookmark icon on videos to add them here.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="pb-10">
      <FeaturedSlider items={featuredContent} />
      <ShortsSection shorts={shortsData} />
      <CategoryRow title="AI Tools & Tutorials" videos={aiContent} />
      <CategoryRow title="Startup & Business" videos={startupContent} />
      <CategoryRow title="Web Development" videos={webDevContent} />
    </div>
  );
};

export default HomePage;
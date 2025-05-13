import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StudyModeState {
  isStudyMode: boolean;
  studyVideos: string[];
  toggleStudyMode: () => void;
  addToStudy: (videoId: string) => void;
  removeFromStudy: (videoId: string) => void;
  isInStudyMode: (videoId: string) => boolean;
}

export const useStudyMode = create<StudyModeState>()(
  persist(
    (set, get) => ({
      isStudyMode: false,
      studyVideos: [],
      toggleStudyMode: () => set(state => ({ isStudyMode: !state.isStudyMode })),
      addToStudy: (videoId) => set(state => ({
        studyVideos: [...state.studyVideos, videoId]
      })),
      removeFromStudy: (videoId) => set(state => ({
        studyVideos: state.studyVideos.filter(id => id !== videoId)
      })),
      isInStudyMode: (videoId) => get().studyVideos.includes(videoId)
    }),
    {
      name: 'study-mode-storage'
    }
  )
);
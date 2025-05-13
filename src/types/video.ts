export interface Video {
  id: string;
  title: string;
  channel: string;
  watched: string;
  thumbnailUrl: string;
}

export interface HistoryCategory {
  id: string;
  name: string;
  isActive: boolean;
} 
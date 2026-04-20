export interface Project {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '',
    category: 'Generative Narrative',
    videoUrl: 'https://www.youtube.com/embed/o02xudukEno?autoplay=1',
    thumbnailUrl: 'https://img.youtube.com/vi/o02xudukEno/maxresdefault.jpg',
    aspectRatio: 'landscape',
    description: 'Cinematic AI exploration.'
  },
];

export const BRAND_PROJECTS: Project[] = [
  {
    id: 'b1',
    title: 'Visual Synthesis',
    category: 'Motion / Abstract',
    videoUrl: 'https://www.youtube.com/embed/ryFeT0xQP0E',
    thumbnailUrl: 'https://img.youtube.com/vi/ryFeT0xQP0E/hqdefault.jpg',
    aspectRatio: 'portrait',
    description: 'Generative motion study.'
  },
  {
    id: 'b2',
    title: 'Neural Flow',
    category: 'Campaign / Visual',
    videoUrl: 'https://www.youtube.com/embed/K_tM16Y2JDk',
    thumbnailUrl: 'https://img.youtube.com/vi/K_tM16Y2JDk/hqdefault.jpg',
    aspectRatio: 'portrait',
    description: 'Neural simulation for collaborative project.'
  }
];

export const SOCIAL_LINKS = [
  { name: 'INSTAGRAM', url: '#' },
  { name: 'VIMEO', url: '#' },
  { name: 'X / TWITTER', url: '#' },
  { name: 'EMAIL', url: 'mailto:studio@aether.ai' }
];

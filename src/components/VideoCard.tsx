import { motion } from 'motion/react';
import { Project } from '../types';
import React from 'react';

interface VideoCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ project, onOpen, index }) => {
  const getLayoutClasses = () => {
    switch (project.aspectRatio) {
      case 'landscape':
        return 'md:col-span-2 aspect-video';
      case 'square':
        return 'col-span-1 aspect-square';
      case 'portrait':
      default:
        return 'col-span-1 aspect-[9/16]';
    }
  };

  const isLandscape = project.aspectRatio === 'landscape';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onOpen(project)}
      className={`relative group cursor-pointer overflow-hidden bg-bg-surface border border-border-subtle hover:border-white/20 transition-all duration-500
        ${getLayoutClasses()}`}
    >
      {/* Thumbnail */}
      <motion.img
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        src={project.thumbnailUrl}
        alt={project.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700"
      />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white transition-all duration-300"
        >
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white ml-0.5" />
        </motion.div>
      </div>

      {/* Label */}
      {project.title && isLandscape && (
        <div className="absolute bottom-4 left-4 flex gap-4 items-center">
          <span className="text-[10px] tracking-[0.1em] uppercase text-[#666] font-medium">
            {`0${index + 1} — ${project.title}`}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default VideoCard;

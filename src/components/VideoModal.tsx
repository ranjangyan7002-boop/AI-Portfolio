import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Project } from '../types';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-xl" 
            onClick={onClose} 
          />

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-[110] p-4 text-white hover:opacity-50 transition-opacity"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Video Container */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={`relative z-[105] w-full max-w-6xl overflow-hidden rounded-sm bg-black 
              ${project.aspectRatio === 'landscape' ? 'aspect-video' : 'max-w-md aspect-[9/16]'}`}
          >
            {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? (
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <video 
                src={project.videoUrl}
                autoPlay
                controls
                className="w-full h-full object-contain"
              />
            )}
          </motion.div>

          {/* Caption */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="absolute bottom-10 left-0 right-0 text-center pointer-events-none"
          >
            <h2 className="text-xl font-medium tracking-tight text-white mb-2">{project.title}</h2>
            <p className="text-sm text-white/50">{project.description}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

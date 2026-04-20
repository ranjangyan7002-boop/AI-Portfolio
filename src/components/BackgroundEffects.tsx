import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

const BackgroundEffects: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Feature 6: Dynamic Background Smoke/Neural Liquid */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-[1000px] h-[1000px] rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2 }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] blur-[100px]" />
      </motion.div>

      {/* Drifting Smoke Layers */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.9, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 -left-1/4 w-[1200px] h-[1200px] bg-white/[0.015] rounded-[40%] blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, -70, 60, 0],
          y: [0, 50, -60, 0],
          scale: [1, 0.95, 1.05, 1],
          rotate: [0, -8, 8, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-1/4 -right-1/4 w-[1400px] h-[1400px] bg-white/[0.01] rounded-[45%] blur-[200px]"
      />

      {/* Additional "Neural" Pulse layer */}
      <motion.div
        animate={{
          opacity: [0.01, 0.03, 0.01],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5"
      />
    </div>
  );
};

export default BackgroundEffects;

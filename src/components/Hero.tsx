import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="flex flex-col">
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-[42px] font-bold tracking-[-0.04em] leading-[43.2px] text-white uppercase whitespace-pre-line text-left"
      >
        GYANARANJAN<br />SENDHA
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-[12px] tracking-[0.2em] font-medium uppercase text-text-dim mt-4"
      >
        Generative Visual Artist
      </motion.p>
    </div>
  );
}

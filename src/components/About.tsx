import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="max-w-[320px]">
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="text-[16px] leading-[1.6] text-[#ccc]"
      >
        Exploring the boundaries between neural architecture and cinematic storytelling. Every frame is a dialogue between human intent and machine imagination.
      </motion.p>
    </div>
  );
}

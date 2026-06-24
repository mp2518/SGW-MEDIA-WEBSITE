import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed right-4 md:right-8 top-0 bottom-0 z-30 flex items-center pointer-events-none">
      <div className="relative h-[40vh] w-[2px] bg-stone/30 overflow-hidden">
        <motion.div
          style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
          className="absolute inset-0 bg-copper"
        />
      </div>
    </div>
  );
}
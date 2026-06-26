import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  const sectionRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Background video layer */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
        <div className="absolute inset-0 bg-obsidian/60 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://media.base44.com/videos/public/6a1ecf53da4a1b04db9d706d/ceec82100_generated_video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Grain overlay */}
      <div className="absolute inset-0 z-20 opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-30 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16"
      >
        <div className="max-w-[90rem] mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-blue-500 font-heading font-bold text-sm tracking-[0.3em] uppercase mb-6"
          >
            Web · Software · Social Media
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '120%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-alabaster font-display font-black text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-[-0.03em]"
              style={{
                transform: `translate(${mouse.x * 0.3}px, ${mouse.y * 0.3}px)`,
              }}
            >
              We build digital
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '120%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-alabaster font-display font-black italic text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-[-0.03em]"
              style={{
                transform: `translate(${mouse.x * 0.5}px, ${mouse.y * 0.5}px)`,
              }}
            >
              engines for growth.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-alabaster/60 font-body text-lg mt-8 max-w-xl leading-relaxed"
          >
            From startups to Fortune 500s—we build the websites, software,
            and social media presence that turn businesses into category leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button
              onClick={scrollToContact}
              className="bg-[#1f0bdf] text-white px-8 py-4 font-heading font-bold text-sm tracking-[0.15em] uppercase hover:bg-[#1f0bdf]/90 transition-colors duration-300"
            >
              Start Your Project
            </button>
            <button
              onClick={scrollToWork}
              className="border border-alabaster/30 text-alabaster px-8 py-4 font-heading font-bold text-sm tracking-[0.15em] uppercase hover:border-alabaster transition-colors duration-300"
            >
              View Our Work
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToWork}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-alabaster/40 hover:text-copper transition-colors duration-500"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
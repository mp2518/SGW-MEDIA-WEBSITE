import { motion } from 'framer-motion';

const words = ['Websites', 'Software', 'Social Media', 'E-Commerce', 'Automation', 'Mobile Apps', 'SEO', 'Growth'];

export default function MarqueeSection() {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden border-y border-stone/30">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="flex whitespace-nowrap"
      >
        {[...words, ...words].map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-[clamp(2rem,5vw,4rem)] text-foreground/10 mx-6 md:mx-10">
              {word}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#1f0bdf]/40 mx-4" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
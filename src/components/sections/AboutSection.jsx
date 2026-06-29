import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const beliefs = [
  { text: 'Small business energy. Enterprise-level execution.', desc: 'Whether you\'re a 3-person shop or a 3,000-person company, you get the same relentless standard.' },
  { text: 'We build it. We manage it. We grow it.', desc: 'No passing the baton between agencies—we own your digital presence end to end.' },
  { text: 'Technology should serve people, not confuse them.', desc: 'Every site and software we ship is intuitive, fast, and built to convert.' },
  { text: 'Social media is a business tool, not a vanity play.', desc: 'Every post, story, and campaign we run has a measurable business objective behind it.' },
];

function AnimatedLine({ belief, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-stone/40 pb-8 group"
    >
      <p className="font-display font-bold text-2xl md:text-3xl text-foreground leading-snug group-hover:text-alabaster transition-colors duration-300">
        {belief.text}
      </p>
      <p className="font-body font-medium text-muted-foreground text-sm mt-2">
        {belief.desc}
      </p>
    </motion.div>
  );
}

export default function AboutSection({ aboutImage }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} className="relative py-32 md:py-48 px-6 md:px-16 bg-obsidian text-alabaster overflow-hidden">
      {/* Grain overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.04]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      />

      <div className="max-w-[90rem] mx-auto relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#1f0bdf] font-heading font-bold text-sm tracking-[0.3em] uppercase mb-4"
          >
            The Persona
          </motion.p>
          <div className="overflow-visible pb-2">
            <motion.h2
              initial={{ y: '100%' }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-alabaster"
            >
              Your full-stack <br />
              <span className="italic">digital partner.</span>
            </motion.h2>
          </div>
        </div>

        {/* Editorial spread */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isImageInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&auto=format&fit=crop"
              alt="Digital marketing strategy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
          </motion.div>

          {/* Beliefs */}
          <div className="flex flex-col justify-center">
            <p className="font-body text-alabaster/70 text-lg leading-relaxed mb-12">
              We are developers, designers, and social media strategists who work as one
              unified team. From a startup's first website to a corporation's custom
              internal platform—we handle the full digital stack so you can focus on
              running your business.
            </p>

            <div className="space-y-8">
              <p className="text-copper font-heading font-bold text-xs tracking-[0.3em] uppercase">
                How We Work
              </p>
              {beliefs.map((belief, index) => (
                <AnimatedLine key={index} belief={belief} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
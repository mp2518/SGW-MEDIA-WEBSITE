import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Askisi Sport Performance',
    category: 'Web Design',
    tag: 'websites',
    description: 'A high-performance sports training website built to elevate athletes.',
    stats: '',
    size: 'large',
    image: 'https://media.base44.com/images/public/6a1ecf53da4a1b04db9d706d/c02122151_Screenshot2025-08-11at63156PM.png',
  },
  {
    title: 'PerformaFlexMR',
    category: 'Web Design',
    tag: 'websites',
    description: 'Muscle Rub Balm brand website with a clean, performance-driven digital presence.',
    stats: '',
    size: 'small',
    image: 'https://media.base44.com/images/public/6a1ecf53da4a1b04db9d706d/7fcf8450e_Screenshot2026-06-18at125750PM.png',
  },
  {
    title: 'WestSide TKD',
    category: 'Web Design',
    tag: 'websites',
    description: 'Community-driven taekwondo academy website showcasing programs and class schedules.',
    stats: '',
    size: 'small',
    image: 'https://media.base44.com/images/public/6a1ecf53da4a1b04db9d706d/007a52288_Screenshot2025-08-11at63444PM.png',
  },
  {
    title: 'Nubeat Consulting',
    category: 'Web Design',
    tag: 'websites',
    description: 'Professional consulting firm website with 30 years of entrepreneurial expertise.',
    stats: '',
    size: 'small',
    image: 'https://media.base44.com/images/public/6a1ecf53da4a1b04db9d706d/f111225d7_Screenshot2025-06-18at34453PM.png',
  },
  {
    title: 'App — Coming Soon',
    category: 'Custom Software',
    tag: 'software',
    description: 'A powerful custom application currently in development.',
    stats: 'Coming Soon',
    size: 'large',
    placeholder: true,
    comingSoon: true,
  },
  {
    title: 'Social Media',
    category: 'Social Campaign',
    tag: 'social',
    description: 'Social media campaign work coming soon.',
    stats: 'Coming Soon',
    size: 'small',
    placeholder: true,
    comingSoon: true,
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Websites', value: 'websites' },
  { label: 'Software', value: 'software' },
  { label: 'Social', value: 'social' },
];

function Lightbox({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-obsidian/95 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-5xl w-full bg-background overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/80 text-white flex items-center justify-center hover:bg-[#1f0bdf] transition-colors duration-300"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="aspect-video overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 justify-between">
          <div>
            <p className="text-[#1f0bdf] font-heading font-bold text-xs tracking-[0.3em] uppercase mb-2">{project.category}</p>
            <h3 className="font-display font-black text-3xl md:text-4xl text-foreground">{project.title}</h3>
            <p className="text-muted-foreground font-body mt-3 leading-relaxed max-w-lg">{project.description}</p>
          </div>
          <div className="shrink-0 self-end">
            <div className="bg-[#1f0bdf] text-white px-6 py-4 text-center">
              <p className="font-display font-black text-3xl">{project.stats}</p>
              <p className="font-heading font-bold text-xs tracking-widest uppercase mt-1 opacity-70">Result</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group cursor-pointer ${project.size === 'large' ? 'md:col-span-2' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* Image / Placeholder */}
      <div className="relative overflow-hidden bg-stone/20">
        <div className={`overflow-hidden ${project.size === 'large' ? 'aspect-[16/9] md:aspect-[16/7]' : 'aspect-[4/3]'}`}>
          {project.placeholder ? (
            <div className="w-full h-full bg-stone/10 border border-dashed border-stone/30 flex flex-col items-center justify-center gap-3">
              {project.comingSoon ? (
                <span className="font-heading font-bold text-xs tracking-[0.3em] uppercase text-[#1f0bdf] px-4 py-2 border border-[#1f0bdf]/40">
                  Coming Soon
                </span>
              ) : (
                <span className="font-heading font-bold text-xs tracking-[0.3em] uppercase text-muted-foreground/40">
                  Your Project Here
                </span>
              )}
            </div>
          ) : (
            <motion.img
              src={project.image}
              alt={project.title}
              animate={{ scale: hovered ? 1.06 : 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          )}
        </div>

        {/* Dark overlay with reveal text — appears on scroll */}
        {project.image && (
          <>
            <motion.div
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute inset-0 bg-obsidian/60 items-end p-6 md:p-8 hidden md:flex"
            >
              <div className="flex items-end justify-between w-full">
                <p className="text-white font-body text-sm leading-relaxed max-w-sm">{project.description}</p>
                {project.stats && (
                  <div className="bg-white text-black px-4 py-2 font-heading font-bold text-sm shrink-0 ml-4">
                    {project.stats}
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 8, y: isInView ? 0 : -8 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute top-4 right-4 w-10 h-10 bg-white text-black flex items-center justify-center"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </>
        )}
      </div>

      {/* Meta */}
      <div className="mt-4 md:mt-5">
        <p className="text-muted-foreground font-heading font-bold text-xs tracking-[0.2em] uppercase mb-1">
          {project.category}
        </p>
        <h3 className={`font-display font-black text-xl md:text-3xl transition-colors duration-300 ${project.comingSoon ? 'text-muted-foreground/50' : 'text-foreground group-hover:text-copper'}`}>
          {project.title}
        </h3>
        {!project.placeholder && (
          <p className="text-muted-foreground font-body text-sm mt-1 leading-relaxed md:hidden">
            {project.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function WorkSection({ images }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.tag === activeFilter);

  // Cycle through provided images
  const getImage = (index) => images[index % images.length];

  return (
    <>
      <section id="work" className="relative py-20 md:py-48 px-4 md:px-16 bg-background">
        <div className="max-w-[90rem] mx-auto">

          {/* Header */}
          <div ref={headerRef} className="mb-10 md:mb-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#1f0bdf] font-heading font-bold text-sm tracking-[0.3em] uppercase mb-4"
            >
              Selected Work
            </motion.p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%' }}
                  animate={isHeaderInView ? { y: 0 } : {}}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-foreground"
                >
                  Built for business. <br className="hidden md:block" />
                  <span className="italic">Proven by results.</span>
                </motion.h2>
              </div>

              {/* Filter tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-2 flex-wrap"
              >
                {filters.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActiveFilter(f.value)}
                    className={`px-5 py-2 font-heading font-bold text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${
                      activeFilter === f.value
                        ? 'bg-black text-white border-black'
                        : 'border-stone/40 text-muted-foreground hover:border-[#1f0bdf] hover:text-[#1f0bdf]'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-20">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <div
                  key={project.title}
                  className={project.size === 'large' ? 'md:col-span-2' : ''}
                  onClick={() => project.image && setLightbox({ project })}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                  />
                </div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            project={lightbox.project}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
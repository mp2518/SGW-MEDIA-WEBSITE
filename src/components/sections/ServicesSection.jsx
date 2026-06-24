import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Code2, Share2, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    number: '01',
    title: 'Website Design & Development',
    description: 'High-performance, conversion-focused websites built for every scale—from local business landing pages to enterprise-grade web platforms.',
  },
  {
    icon: Code2,
    number: '02',
    title: 'Custom Software',
    description: 'iOS and Android compatible applications, internal tools, CRMs, and automation systems engineered to replace manual work and unlock operational scale.',
  },
  {
    icon: Share2,
    number: '03',
    title: 'Social Media Management',
    description: 'Full-service content creation, scheduling, community management, and paid social—turning followers into loyal customers.',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Growth & Analytics',
    description: 'SEO, performance reporting, and data-driven strategy sessions to ensure every dollar you invest moves the needle on revenue.',
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group border-t border-stone/30 pt-8 hover:border-copper/50 transition-colors duration-500"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-copper font-heading text-xs tracking-[0.2em]">{service.number}</span>
        <Icon className="w-5 h-5 text-stone/60 group-hover:text-copper transition-colors duration-300" />
      </div>
      <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3 group-hover:text-copper transition-colors duration-300">
        {service.title}
      </h3>
      <p className="font-body text-muted-foreground text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 md:py-48 px-6 md:px-16 bg-background">
      <div className="max-w-[90rem] mx-auto">
        <div ref={headerRef} className="mb-20 md:mb-32 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#1f0bdf] font-heading font-bold text-sm tracking-[0.3em] uppercase mb-4"
          >
            Capabilities
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-foreground"
            >
              Multiple teams. <span className="italic">Multiple channels.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
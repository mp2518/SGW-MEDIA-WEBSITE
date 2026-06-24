import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Replace this URL with your actual Calendly link
const CALENDLY_URL = 'https://calendly.com/sgwmpllc/meeting-invite';

export default function BookingSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="book" className="relative py-32 md:py-48 px-6 md:px-16 bg-obsidian text-alabaster overflow-hidden">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      />

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div ref={headerRef} className="mb-16 md:mb-20 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#1f0bdf] font-heading font-bold text-sm tracking-[0.3em] uppercase mb-4"
          >
            Book a Call
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-alabaster"
            >
              Free 30-min <br />
              <span className="italic">discovery call.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-alabaster/60 font-body text-lg mt-6 leading-relaxed"
          >
            Tell us about your business and goals. We'll walk you through what's possible and give you a clear roadmap—no pressure, no sales pitch.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          {/* Calendly embed */}
          <div className="overflow-hidden">
            <iframe
              src={`${CALENDLY_URL}?embed_domain=${window.location.hostname}&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0f0f0f&text_color=f5f5f0&primary_color=1f0bdf`}
              width="100%"
              height="750"
              frameBorder="0"
              title="Schedule a discovery call"
              style={{ minWidth: '320px', display: 'block' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
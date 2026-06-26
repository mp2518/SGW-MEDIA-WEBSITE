import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Book a Call', href: '#book' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          <button onClick={() => scrollTo('#hero')} className="text-white font-heading font-black text-xl tracking-tight">
            SGW MEDIA PRODUCTION LLC.
          </button>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="text-white text-sm font-heading font-bold tracking-widest uppercase hover:opacity-60 transition-opacity duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-white origin-center"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-white origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Full screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-12">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  onClick={() => scrollTo(item.href)}
                  className="text-alabaster font-display font-black text-5xl italic hover:text-copper transition-colors duration-300"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
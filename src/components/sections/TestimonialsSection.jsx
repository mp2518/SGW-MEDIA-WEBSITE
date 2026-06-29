import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "He's very professional and technically savvy. Adds value to any project and concerned about the community.",
    author: "Susan Scarduzio",
    title: "CEO, Susan Scarduzio LLC",
  },
  {
    quote: "Digital marketing is the way of the future. Contact Shaun for all your marketing needs.",
    author: "Jerome Glover",
    title: "CEO, J Glover Financial Institutions",
  },
  {
    quote: "Shaun is a unique individual, a star among digital markets. He is industrious, hard-working, and gets the job done, while also being creative. If you are looking for an out-of-the-box digital marketer, call Shaun Williams.",
    author: "Dr. Harvey Loomstein",
    title: "BioTech Institute",
  },
  {
    quote: "Shaun, founder of SGW Media Production LLC, helps busy professionals grow their online presence by managing and optimizing their social media. Through his ShaunTakesOn Podcast, he highlights inspiring individuals who have overcome adversity, sharing their stories to motivate young adults to succeed. His dedication to supporting others, innovative approach to social media, and ability to inspire through storytelling make him a standout leader in his community.",
    author: "Brecquel Kilgore",
    title: "CEO, Bread Bible Breath",
  },
];

export default function TestimonialsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section id="testimonials" className="relative py-16 md:py-24 px-6 md:px-16 bg-background overflow-hidden">
      <div className="max-w-[90rem] mx-auto">

        {/* Header */}
        <div ref={headerRef} className="mb-10 md:mb-14 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#1f0bdf] font-heading font-bold text-sm tracking-[0.3em] uppercase mb-4"
          >
            Client Testimonials
          </motion.p>
          <div className="overflow-visible pb-2">
            <motion.h2
              initial={{ y: '100%' }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black text-[clamp(1.8rem,4vw,3rem)] leading-[1] text-foreground"
            >
              What our clients <br />
              <span className="italic">are saying.</span>
            </motion.h2>
          </div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative border border-stone/30 p-8 md:p-10 min-h-[200px] flex flex-col justify-between"
        >
          {/* Quote icon */}
          <Quote className="w-10 h-10 text-[#1f0bdf] mb-8 shrink-0" />

          {/* Quote text */}
          <div className="flex-1 overflow-hidden mb-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display font-bold text-lg md:text-xl lg:text-2xl leading-snug text-foreground mb-6">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <p className="font-heading font-black text-sm tracking-[0.2em] uppercase text-foreground">
                    {testimonials[current].author}
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {testimonials[current].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-4">
            <button
              onClick={() => go(-1)}
              className="w-12 h-12 border border-stone/40 flex items-center justify-center text-foreground hover:border-[#1f0bdf] hover:text-[#1f0bdf] transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => go(1)}
              className="w-12 h-12 border border-stone/40 flex items-center justify-center text-foreground hover:border-[#1f0bdf] hover:text-[#1f0bdf] transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2 ml-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-2 h-2 transition-all duration-300 ${i === current ? 'bg-[#1f0bdf] w-6' : 'bg-stone/40'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
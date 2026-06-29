import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

const serviceTags = [
  'New Website', 'Website Redesign', 'E-Commerce', 'Landing Page',
  'Custom Software', 'Internal Tool', 'CRM / Automation', 'Mobile App',
  'Social Media Management', 'Content Creation', 'Paid Social Ads', 'SEO & Analytics',
];

export default function ContactSection() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const { base44 } = await import('@/api/base44Client');
    await base44.integrations.Core.SendEmail({
      to: 'mp@shaunwilliams.co',
      subject: `New Project Request from ${formData.name}`,
      body: `Name: ${formData.name}\nEmail: ${formData.email}\nServices: ${selectedTags.join(', ') || 'None selected'}\n\nMessage:\n${formData.message}`,
    });
    toast.success('Request received. We\'ll reach out within 1 business day to schedule your free consultation.');
    setFormData({ name: '', email: '', message: '' });
    setSelectedTags([]);
    setIsSending(false);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative min-h-screen bg-obsidian text-alabaster px-6 md:px-16 py-32 md:py-48">
      {/* Grain */}
      <div className="absolute inset-0 z-0 opacity-[0.04]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      />

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div ref={headerRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#1f0bdf] font-heading font-bold text-sm tracking-[0.3em] uppercase mb-4"
          >
            Start a Project
          </motion.p>
          <div className="overflow-visible pb-2">
            <motion.h2
              initial={{ y: '100%' }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-alabaster"
            >
              Let's build your <br />
              <span className="italic">digital advantage.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {/* Project configurator */}
          <div>
            <p className="text-[#1f0bdf] font-heading font-bold text-xs tracking-[0.3em] uppercase mb-6">
              What are you looking for?
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              {serviceTags.map((tag, i) => (
                <motion.button
                  key={tag}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.03 }}
                  onClick={() => toggleTag(tag)}
                  className={`px-5 py-2.5 border text-sm font-heading tracking-wide transition-all duration-300 ${
                    selectedTags.includes(tag)
                      ? 'bg-[#1f0bdf] border-[#1f0bdf] text-white'
                      : 'border-white/20 text-white/60 hover:border-[#1f0bdf] hover:text-[#1f0bdf]'
                  }`}
                >
                  {tag}
                </motion.button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-alabaster/20 pb-4 text-alabaster font-body text-lg placeholder:text-alabaster/30 focus:outline-none focus:border-[#1f0bdf] transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-alabaster/20 pb-4 text-alabaster font-body text-lg placeholder:text-alabaster/30 focus:outline-none focus:border-copper transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your business and what you're looking to achieve"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-alabaster/20 pb-4 text-alabaster font-body text-lg placeholder:text-alabaster/30 focus:outline-none focus:border-[#1f0bdf] transition-colors duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative mt-8 flex items-center gap-3 bg-[#1f0bdf] text-white px-10 py-5 font-heading text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#1f0bdf]/90 disabled:opacity-50"
              >
                <span className="relative z-10">
                  {isSending ? 'Sending...' : 'Get a Free Consultation'}
                </span>
                <Send className="w-4 h-4 relative z-10" />
                {/* Pulse glow */}
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-[#1f0bdf] blur-xl opacity-30"
                />
              </motion.button>
            </form>
          </div>


        </div>
      </div>

      {/* Footer bar */}
      <div className="max-w-[90rem] mx-auto relative z-10 mt-32 pt-8 border-t border-alabaster/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-alabaster/30 font-heading font-bold text-xs tracking-wide">
          © 2026 SGW Media Production LLC. All rights reserved.
        </p>
        <p className="text-alabaster/30 font-heading font-bold text-xs tracking-wide">
          Built with intention.
        </p>
      </div>
    </section>
  );
}
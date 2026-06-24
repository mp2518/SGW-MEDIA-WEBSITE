import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const webPlans = [
  {
    name: 'Starter',
    price: '$2,000',
    subtitle: 'Template-based website (Wix, Squarespace, or WordPress) set up on your domain',
    features: [
      'Mobile responsive',
      'Basic SEO setup',
      'Contact form integration',
      'Maintenance: $100/hr as needed',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$5,000',
    subtitle: 'Custom-designed website (5–7 pages)',
    features: [
      'Fully branded to match your aesthetic',
      'Custom graphics and layout',
      'Blog or content section',
      'Social media integration',
      'Maintenance: $100/hr as needed',
    ],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$10,000',
    subtitle: 'Custom web application or advanced functionality',
    features: [
      'Client portals or membership areas',
      'Booking/scheduling systems',
      'E-commerce integration',
      'API connections',
      'Maintenance: $150/hr as needed',
    ],
    cta: 'Talk to Us',
    highlight: false,
  },
];



function PlanCard({ plan, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col p-8 md:p-10 border transition-colors duration-500 ${
        plan.highlight
          ? 'bg-black border-[#1f0bdf] text-white'
          : 'bg-background border-stone/30 hover:border-[#1f0bdf]/50'
      }`}
    >
      {plan.highlight && (
        <div className="absolute -top-px left-0 right-0 h-[2px] bg-[#1f0bdf]" />
      )}

      <div className="mb-8">
        <p className="font-heading font-bold text-xs tracking-[0.3em] uppercase mb-2 text-[#1f0bdf]">
          {plan.name}
        </p>
        <p className={`font-body text-sm mb-6 ${plan.highlight ? 'text-alabaster/60' : 'text-muted-foreground'}`}>
          {plan.subtitle}
        </p>
        <span className={`font-display font-black text-4xl md:text-5xl tracking-tight ${plan.highlight ? 'text-alabaster' : 'text-foreground'}`}>
          {plan.price}
        </span>
      </div>

      <ul className="space-y-3 flex-1 mb-10">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#1f0bdf]" />
            <span className={`font-body text-sm ${plan.highlight ? 'text-alabaster/80' : 'text-muted-foreground'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        className={`w-full py-4 font-heading font-bold text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
          plan.highlight
            ? 'bg-[#1f0bdf] text-white hover:bg-[#1f0bdf]/90'
            : 'border border-stone/40 text-foreground hover:border-[#1f0bdf] hover:text-[#1f0bdf]'
        }`}
      >
        {plan.cta}
      </button>
    </motion.div>
  );
}

export default function PricingSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });


  return (
    <section id="pricing" className="relative py-32 md:py-48 px-6 md:px-16 bg-background">
      <div className="max-w-[90rem] mx-auto">

        {/* Header */}
        <div ref={headerRef} className="mb-20 md:mb-32 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#1f0bdf] font-heading font-bold text-sm tracking-[0.3em] uppercase mb-4"
          >
            Pricing
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-foreground"
            >
              Industry leading <br />
              <span className="italic">services.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground font-body text-lg mt-6 leading-relaxed"
          >
            Every business is different. These are our starting points—custom quotes available for any scope.
          </motion.p>
        </div>

        {/* Web Development */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#1f0bdf] font-heading font-bold text-xs tracking-[0.3em] uppercase mb-8"
        >
          Web Development
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-transparent md:bg-stone/20 mb-24 md:mb-32">
          {webPlans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="border border-stone/30 p-8 md:p-10 hover:border-[#1f0bdf]/50 transition-colors duration-500 mb-16"
        >
          <p className="text-[#1f0bdf] font-heading font-bold text-xs tracking-[0.3em] uppercase mb-3">Social Media Management</p>
          <div className="font-display font-black text-4xl text-foreground mb-1">$2,000</div>
          <p className="text-muted-foreground font-body text-xs mb-8">Starting at / month</p>
          <ul className="space-y-3">
            {[
              'Content calendar and scheduling',
              'Posting across platforms',
              'Basic community engagement',
              'Monthly analytics reporting',
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#1f0bdf]" />
                <span className="font-body text-sm text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-10 w-full py-4 font-heading font-bold text-sm tracking-[0.15em] uppercase border border-stone/40 text-foreground hover:border-[#1f0bdf] hover:text-[#1f0bdf] transition-all duration-300"
          >
            Get Started
          </button>
        </motion.div>

      </div>
    </section>
  );
}
import Navbar from '../components/navigation/Navbar';
import ScrollProgress from '../components/navigation/ScrollProgress';
import HeroSection from '../components/sections/HeroSection';
import WorkSection from '../components/sections/WorkSection';
import MarqueeSection from '../components/sections/MarqueeSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import PricingSection from '../components/sections/PricingSection';
import BookingSection from '../components/sections/BookingSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FooterSection from '../components/sections/FooterSection';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a1ecf53da4a1b04db9d706d/9086af8ed_generated_3416b862.png';
const ABOUT_IMAGE = 'https://media.base44.com/images/public/6a1ecf53da4a1b04db9d706d/f607c264a_generated_748f5a92.png';
const PORTFOLIO_IMAGES = [
  'https://media.base44.com/images/public/6a1ecf53da4a1b04db9d706d/cc3eeeb37_generated_c87d6998.png',
  'https://media.base44.com/images/public/6a1ecf53da4a1b04db9d706d/733158956_generated_dea59d9c.png',
  'https://media.base44.com/images/public/6a1ecf53da4a1b04db9d706d/187e5628f_generated_16d2c7e6.png',
  'https://media.base44.com/images/public/6a1ecf53da4a1b04db9d706d/5bd235aaf_generated_f45cd23b.png',
];

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <ScrollProgress />
      <HeroSection heroImage={HERO_IMAGE} />
      <MarqueeSection />
      <WorkSection images={PORTFOLIO_IMAGES} />
      <ServicesSection />
      <AboutSection aboutImage={ABOUT_IMAGE} />
      <PricingSection />
      <TestimonialsSection />
      <BookingSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
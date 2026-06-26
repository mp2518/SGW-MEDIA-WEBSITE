export default function FooterSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian text-alabaster py-16 px-6 md:px-16">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">

          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="shrink-0">
            <img src="/logo.png" alt="SGW Media Production LLC" className="h-16 w-auto" />
          </button>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="font-heading font-bold text-xs tracking-[0.3em] uppercase text-alabaster/40 mb-2">Navigate</p>
            {['#work', '#pricing', '#about', '#book', '#contact'].map((href) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-left font-heading font-bold text-sm tracking-widest uppercase text-alabaster/70 hover:text-alabaster transition-colors duration-300"
              >
                {href.replace('#', '')}
              </button>
            ))}
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-alabaster/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-alabaster/30">
            &copy; {new Date().getFullYear()} SGW Media Production LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

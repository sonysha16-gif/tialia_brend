import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Меню', href: '#menu' },
  { name: 'Галерея', href: '#gallery' },
  { name: 'История', href: '#about' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3 shadow-xl shadow-brand-primary/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-display font-extrabold tracking-tighter text-text-primary group flex items-center">
             КАФЕ<span className="text-brand-primary group-hover:text-brand-secondary transition-colors ml-1 uppercase">ИСКРЕННОСТЬ</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-white hover:text-brand-primary transition-colors relative group uppercase tracking-widest"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="btn-glow px-6 py-3 rounded-full text-sm font-bold flex items-center group"
            >
              Забронировать стол
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] md:hidden bg-[#0C0A09] flex flex-col"
          >
            <div className="flex flex-col h-full p-8 overflow-y-auto">
              <div className="flex justify-between items-center mb-16">
                <span className="text-2xl font-display font-extrabold tracking-tighter text-text-primary">
                  КАФЕ<span className="text-brand-primary ml-1 uppercase">ИСКРЕННОСТЬ</span>
                </span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-text-primary">
                  <X size={32} />
                </button>
              </div>
              <div className="flex flex-col space-y-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-4xl font-display font-bold text-text-primary hover:text-brand-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="mt-auto pt-12">
                <a
                  href="#contact"
                  className="flex items-center justify-center w-full btn-glow py-5 rounded-2xl font-bold text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Найти нас
                  <ArrowRight className="ml-3" size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

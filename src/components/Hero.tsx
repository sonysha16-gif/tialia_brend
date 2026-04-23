import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Coffee, Star, MapPin } from 'lucide-react';

const HERO_PHOTO = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070';

export default function Hero() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const isPreview = typeof window !== 'undefined' && window.location.hostname.includes('ais-dev');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      const hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.matchMedia("(any-pointer: coarse)").matches);
      setIsTouchDevice(hasTouch);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // AGENTS.md constraint: Ignore zoom logic if isPreview to keep photo visible
  const isDesktopZoom = !isPreview && !isTouchDevice && windowWidth < 1024;

  return (
    <section id="hero" className={`relative overflow-hidden ${isDesktopZoom ? 'pt-24 pb-12' : 'min-h-screen flex items-center pt-20'}`}>
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-10" />
      
      {/* Mobile/Tablet Photo Layer (Following AGENTS.md rules) */}
      {!isDesktopZoom && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-[65vh] -z-10 bg-black">
          <div 
            className="w-full h-full"
            style={{ 
              backgroundImage: `url(${HERO_PHOTO})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-referrer',
              backgroundBlendMode: 'luminosity',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 98%)',
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 98%)',
              filter: 'brightness(0.7) contrast(1.1)'
            }}
          />
        </div>
      )}

      {/* Desktop Photo Layer */}
      <div className="hidden lg:block absolute top-[10%] right-[5%] w-[54%] h-[80%] z-20 pointer-events-none group">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full overflow-hidden rounded-[4rem] border border-brand-primary/10 pointer-events-none"
        >
          <div 
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
            style={{ 
              backgroundImage: `url(${HERO_PHOTO})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.9) contrast(1.05)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Floating Product Card Reference Style */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-12 left-12 bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl max-w-xs pointer-events-auto z-50 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center space-x-4 mb-3">
               <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                 <Coffee size={20} />
               </div>
               <div>
                 <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">Новинка меню</p>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight">Кофе Пина-Колада</h4>
               </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4 italic">Экзотическое сочетание нежного кокосового молока, ананаса и нашего фирменного эспрессо.</p>
            <div className="flex items-center justify-between">
               <span className="text-xl font-display font-bold text-white">420 ₽</span>
               <a 
                 href="#menu" 
                 className="text-xs uppercase tracking-tighter font-bold text-brand-primary hover:text-brand-secondary transition-colors underline underline-offset-4 relative z-50 pointer-events-auto"
                 onClick={(e) => {
                   e.stopPropagation();
                   const el = document.getElementById('menu');
                   if (el) el.scrollIntoView({ behavior: 'smooth' });
                 }}
               >
                 Посмотреть меню
               </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-40 w-full pointer-events-none">
        {/* Mobile Spacer */}
        {!isDesktopZoom && (
          <div className="lg:hidden h-[35vh] w-full" />
        )}

        <div className="max-w-4xl mx-auto lg:mx-0 lg:max-w-xl text-center lg:text-left self-center pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 border-brand-primary/20">
                <Star className="text-brand-primary mr-2" size={14} fill="currentColor" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-primary uppercase">
                   ОСНОВАНО В 2021 | ПРЕМИАЛЬНАЯ ОБЖАРКА
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter leading-tight mb-12 uppercase text-white"
            >
              <span className="font-cursive normal-case text-brand-primary drop-shadow-[0_0_30px_rgba(212,163,115,0.3)] tracking-wide inline-block leading-[1.2]">
                Искренний <br className="hidden lg:block" /> 
                <span className="lg:block lg:text-center">Кофе</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-text-secondary mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed font-light italic"
            >
              Пространство чистого вкуса и искренних эмоций. Место, где каждая чашка рассказывает свою неповторимую историю.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <a
                href="#menu"
                className="btn-glow px-12 py-5 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center group"
              >
                Карта меню
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href="#contact"
                className="px-10 py-5 rounded-full border border-white/10 hover:bg-white/5 transition-all font-bold text-sm tracking-widest uppercase flex items-center justify-center"
              >
                <MapPin className="mr-2" size={18} />
                Где мы
              </a>
            </motion.div>
            
            {/* Minimal Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16 flex items-center justify-center lg:justify-start space-x-6 sm:space-x-12 opacity-60"
            >
                <div>
                   <p className="text-xl sm:text-2xl font-display font-bold text-white leading-none">12+</p>
                   <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-text-secondary mt-1">Сортов зерна</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                   <p className="text-xl sm:text-2xl font-display font-bold text-white leading-none">2021</p>
                   <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-text-secondary mt-1">Год основания</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                   <p className="text-xl sm:text-2xl font-display font-bold text-white leading-none">5★</p>
                   <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-text-secondary mt-1">Рейтинг гостей</p>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ArrowRight, ArrowLeft, Camera, Coffee, Heart } from 'lucide-react';

const galleryBanners = [
  {
    title: 'Утренняя тишина',
    description: 'Первые лучи солнца, тихий джаз и аромат свежемолотого зерна. Ваше идеальное начало дня начинается здесь.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
    tag: 'Атмосфера',
    icon: Coffee
  },
  {
    title: 'Искусство латте',
    description: 'Наши бариста вкладывают сердце в каждый рисунок на пенке. Красота и вкус в идеальном балансе.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2070',
    tag: 'Мастерство',
    icon: Camera
  },
  {
    title: 'Уютные вечера',
    description: 'Когда город затихает, мы создаем пространство для ваших глубоких мыслей и важных встреч.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047',
    tag: 'Пространство',
    icon: Heart
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBanner = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryBanners.length);
  };

  const prevBanner = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryBanners.length) % galleryBanners.length);
  };

  const item = galleryBanners[currentIndex];

  return (
    <section id="gallery" className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] scale-110"
            style={{ 
              backgroundImage: `url(${item.image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-20">
        <div className="max-w-xl">
           <AnimatePresence mode="wait">
             <motion.div
               key={currentIndex}
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 30 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
             >
                <div className="inline-flex items-center gap-2 mb-8 glass px-4 py-2 rounded-full border-white/10 uppercase text-[10px] font-bold tracking-[0.2em] text-brand-primary">
                    <item.icon size={14} />
                    {item.tag}
                </div>
                <h2 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-8 leading-[0.9] tracking-tighter uppercase">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl text-text-secondary mb-12 font-light italic leading-relaxed">
                  «{item.description}»
                </p>
                <a 
                  href="#menu" 
                  className="btn-glow px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase inline-flex items-center group"
                >
                  Карта меню
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
             </motion.div>
           </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-12 right-6 md:right-12 flex gap-4">
            <button 
                onClick={prevBanner}
                className="w-16 h-16 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:text-black transition-all group"
            >
                <ArrowLeft size={24} className="group-active:-translate-x-1 transition-transform" />
            </button>
            <button 
                onClick={nextBanner}
                className="w-16 h-16 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:text-black transition-all group"
            >
                <ArrowRight size={24} className="group-active:translate-x-1 transition-transform" />
            </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-12 left-6 md:left-12 flex gap-3">
            {galleryBanners.map((_, idx) => (
                <div 
                    key={idx}
                    className={`h-1 transition-all duration-500 rounded-full ${currentIndex === idx ? 'w-12 bg-brand-primary' : 'w-6 bg-white/10'}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
}

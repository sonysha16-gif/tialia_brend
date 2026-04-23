/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Menu, X, ArrowRight, Star, Plus, Minus, ShoppingBag, Trash2, Eye, ShieldCheck, Sparkles, MapPin, Phone, Mail, Instagram, Facebook, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Data ---

const PRODUCTS = [
  {
    id: 'p1',
    name: 'Сыворотка Silk Glow',
    price: 4800,
    category: 'Лицо',
    image: 'https://s10.iimage.su/s/23/gvB1MWYxYLMUyS6jOpAAZitOPFkkeMWDD1awWBzfP.png',
    desc: 'Легкая сыворотка с высокой концентрацией активных масел. Мгновенно выравнивает тон кожи и придает ей сияние.',
    ingredients: 'Масло жожоба, масло арганы, витамин С, мацерат липы, эфирное масло нероли.'
  },
  {
    id: 'p2',
    name: 'Крем Botanical Dew',
    price: 3200,
    category: 'Лицо',
    image: 'https://s10.iimage.su/s/23/gkDMJ1mxfkqdfla3VbC7NuoAKjQAR59KMGIFmtDB8.png',
    desc: 'Насыщенный крем с экстрактом зеленого чая и алоэ вера. Обеспечивает глубокое увлажнение на весь день.',
    ingredients: 'Вода, экстракт алоэ барбаденсис, масло ши, экстракт зеленого чая, гиалуроновая кислота, витамин Е.'
  },
  {
    id: 'p3',
    name: 'Молочко Gentle Touch',
    price: 2400,
    category: 'Очищение',
    image: 'https://s10.iimage.su/s/23/gg8j6h6xVjnBazUquLMQUlkePEYhgsMjJpiU8bbEl.png',
    desc: 'Увлажняющее молочко для мягкого деликатного очищения кожи лица.',
    ingredients: 'Дистиллированная вода, экстракт василька, кокосовое масло, глицерин, пантенол.'
  },
  {
    id: 'p4',
    name: 'Флюид Hydrating Mist',
    price: 3500,
    category: 'Лицо',
    image: 'https://s10.iimage.su/s/23/g23UmH9xjUazBo4Vw9zUCgoEjGcI3kTBgirCgbvUm.png',
    desc: 'Невесомый флюид для интенсивного увлажнения без липкости.',
    ingredients: 'Гидролат розы, экстракт огурца, глицерин растительный, сок алоэ.'
  },
  {
    id: 'p5',
    name: 'Тоник Pure Harmony',
    price: 1800,
    category: 'Очищение',
    image: 'https://s10.iimage.su/s/23/gLFw62vxs9qXanKIBytCjsUQZirchgTZitL4fjDe0.png',
    desc: 'Мягкий тоник на основе цветочной воды. Идеально подготавливает кожу к нанесению крема.',
    ingredients: 'Гидролат гамамелиса, экстракт ромашки, пантенол, морская соль, дистиллированная вода.'
  },
  {
    id: 'p6',
    name: 'Масло Body Nectar',
    price: 2900,
    category: 'Тело',
    image: 'https://s10.iimage.su/s/23/gvkCxkcx0JJ0ZEB2kI2u4hWDNkRWz1etpHFic8JOD.png',
    desc: 'Роскошное масло для тела, которое делает кожу шелковистой. Быстро впитывается.',
    ingredients: 'Масло сладкого миндаля, экстракт календулы, витамин А, смесь эфимых масел.'
  },
  {
    id: 'p7',
    name: 'Маска Green Clay',
    price: 2100,
    category: 'Лицо',
    image: 'https://s10.iimage.su/s/23/g6UHnWexu8ODftH4JE2XDSrg6ks3SG69rY7Mn7Izw.png',
    desc: 'Очищающая маска на основе зеленой глины и целебных трав.',
    ingredients: 'Зеленая глина, каолин, экстракт крапивы, эфирное масло чайного дерева.'
  },
  {
    id: 'p8',
    name: 'Гель для умывания Fresh',
    price: 1600,
    category: 'Очищение',
    image: 'https://s10.iimage.su/s/23/gZUv58sxWEd0Q9AkR17bWoTazXmDvyKw7WCCmYakS.png',
    desc: 'Глубоко очищающий гель с растительными компонентами для свежести кожи.',
    ingredients: 'Экстракт мыльного ореха, сок лимона, экстракт лаванды, морская соль.'
  }
];

// --- Components ---

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-md z-[150] md:hidden" />
          <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed top-0 left-0 bottom-0 w-[80%] bg-white z-[160] shadow-2xl flex flex-col p-10 md:hidden">
            <button onClick={onClose} className="self-end p-2 bg-brand-cream rounded-full mb-10"><X className="w-6 h-6" /></button>
            <nav className="flex flex-col gap-8">
              {['О нас', 'Коллекция', 'Отзывы'].map((item) => (
                <a key={item} href={`#${item === 'Коллекция' ? 'catalog' : (item === 'О нас' ? 'about' : 'reviews')}`} onClick={onClose} className="text-2xl font-display font-medium uppercase tracking-widest italic">{item}</a>
              ))}
            </nav>
            <div className="mt-auto pt-10 border-t border-black/5 space-y-6">
              <div className="flex gap-4">
                <Instagram className="w-6 h-6 opacity-50" />
                <Facebook className="w-6 h-6 opacity-50" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-30">© 2024 TIALIA</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ReviewModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md z-[140]" />
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg bg-white rounded-[3rem] p-10 z-[150] shadow-2xl">
            <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-brand-cream/50 rounded-full"><X className="w-5 h-5" /></button>
            <h2 className="font-display text-4xl font-medium italic mb-6">Поделитесь <br />впечатлением</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Ваше имя" className="w-full bg-brand-cream px-6 py-4 rounded-2xl outline-none font-medium text-sm" />
              <textarea placeholder="Ваш отзыв" rows={4} className="w-full bg-brand-cream px-6 py-4 rounded-2xl outline-none font-medium text-sm resize-none"></textarea>
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-brand-yellow cursor-pointer hover:fill-brand-yellow" />)}
              </div>
              <button onClick={onClose} className="w-full py-5 bg-brand-dark text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-lime hover:text-brand-dark transition-all">Отправить отзыв</button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md z-[120]" />
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 0 }} animate={{ opacity: 1, scale: 1, y: -50 }} exit={{ opacity: 0, scale: 0.95, y: 0 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-4xl h-fit max-h-[90vh] bg-white z-[130] rounded-[2rem] shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row shadow-black/40">
            <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-brand-cream/80 hover:bg-brand-lime rounded-full z-20 transition-colors shadow-sm"><X className="w-4 h-4" /></button>
            <div className="w-full md:w-1/2 h-44 md:h-auto overflow-hidden shrink-0">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1 p-6 md:p-12">
              <span className="text-brand-lime font-bold uppercase tracking-widest text-[9px] mb-2 md:mb-4 block">Натуральный состав</span>
              <h2 className="font-display text-2xl md:text-4xl font-medium mb-4 md:mb-6 leading-tight">{product.name}</h2>
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                <div>
                  <h4 className="font-bold text-[9px] uppercase tracking-widest mb-1 md:mb-2 text-slate-400">Описание</h4>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-sm italic">{product.desc}</p>
                </div>
                <div>
                  <h4 className="font-bold text-[9px] uppercase tracking-widest mb-1 md:mb-2 text-slate-400">Состав</h4>
                  <p className="text-[10px] md:text-xs font-medium text-slate-500 leading-relaxed bg-brand-cream p-3 md:p-4 rounded-xl border border-black/5">{product.ingredients}</p>
                </div>
              </div>
              <div className="pt-4 md:pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="font-display text-xl md:text-2xl font-bold">{product.price} ₽</span>
                <button onClick={() => { onAddToCart(product); onClose(); }} className="w-full sm:w-auto px-10 py-3 md:py-4 bg-brand-dark text-white rounded-full font-bold text-xs md:text-sm hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 flex items-center justify-center gap-3">
                  <ShoppingBag className="w-4 h-4" /> В корзину
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Cart = ({ isOpen, onClose, cartItems, addToCart, removeFromCart, clearItem }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]" />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[110] shadow-2xl flex flex-col pt-safe">
            <div className="p-8 border-b flex justify-between items-center bg-brand-cream/30 px-6 sm:px-8">
              <h2 className="font-display text-3xl font-medium tracking-tight">Корзина</h2>
              <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors"><X className="w-6 h-6" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-300 space-y-4">
                  <ShoppingBag className="w-16 h-16 opacity-10" />
                  <p className="font-medium tracking-widest uppercase text-[10px]">Ваша корзина пуста</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-brand-cream flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-display font-bold text-sm leading-tight pr-4">{item.name}</h3>
                        <button onClick={() => clearItem(item.id)} className="text-slate-300 hover:text-red-500 transition-colors"><Trash2 className="w-3 h-3" /></button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 border border-black/5 bg-brand-cream rounded-full px-2 py-0.5 scale-90">
                          <button onClick={() => removeFromCart(item.id)} className="p-1 hover:text-brand-lime"><Minus className="w-3 h-3" /></button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => addToCart(item)} className="p-1 hover:text-brand-lime"><Plus className="w-3 h-3" /></button>
                        </div>
                        <span className="font-display font-black text-xs">{item.price * item.quantity} ₽</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="p-6 sm:p-8 border-t bg-brand-cream/50 space-y-4">
                <div className="flex justify-between items-center font-display text-sm tracking-widest font-bold">
                  <span className="opacity-50 uppercase">Сумма</span>
                  <span>{total} ₽</span>
                </div>
                <button className="w-full py-4 bg-brand-dark text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-lime transition-all duration-300">Оформить заказ</button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Header = ({ cartCount, onCartOpen, onMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 h-40 z-[90] transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-black/70 via-black/40 to-transparent ${scrolled ? 'opacity-0' : 'opacity-100'}`}></div>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl py-4 border-b border-black/5 shadow-sm' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={onMobileMenuOpen} className="p-2 hover:bg-brand-cream/50 rounded-full md:hidden transition-colors">
              <Menu className={`w-6 h-6 ${!scrolled ? 'text-white drop-shadow-lg' : 'text-brand-dark'}`} />
            </button>
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-brand-dark text-brand-lime rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg"><Leaf className="w-4.5 h-4.5" /></div>
              <span className={`font-display text-2xl font-bold tracking-tighter uppercase transition-colors ${!scrolled ? 'text-white drop-shadow-lg' : 'text-brand-dark'}`}>Тиалия</span>
            </a>
          </div>
          <div className="flex items-center gap-3 md:gap-8">
            <nav className="hidden md:flex items-center gap-10">
              {['О нас', 'Коллекция', 'Отзывы'].map((item) => (
                <a key={item} href={`#${item === 'Коллекция' ? 'catalog' : (item === 'О нас' ? 'about' : 'reviews')}`} className={`text-[10px] font-bold uppercase tracking-[0.4em] transition-all italic ${!scrolled ? 'text-white opacity-90 hover:opacity-100 drop-shadow-lg' : 'text-brand-dark opacity-70 hover:opacity-100 hover:text-brand-lime'}`}>{item}</a>
              ))}
            </nav>
            <button onClick={onCartOpen} className={`relative flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full font-bold text-[9px] md:text-[10px] uppercase tracking-widest transition-all group shadow-xl ${!scrolled ? 'bg-white text-brand-dark hover:bg-brand-lime' : 'bg-brand-dark text-white hover:bg-brand-lime hover:text-brand-dark'}`}>
              <ShoppingBag className="w-3.5 h-3.5 md:w-4 h-4" /> <span className="hidden xs:inline">Корзина</span>
              {cartCount > 0 && <span className="bg-brand-lime text-brand-dark w-4 h-4 md:w-4.5 md:h-4.5 rounded-full flex items-center justify-center text-[8px] md:text-[9px] font-black">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      <img src="https://i.yapx.ru/ddJUS.png" alt="Natural beauty" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-black/25"></div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 w-fit max-w-[85vw] md:max-w-sm border border-white/20 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 overflow-hidden shadow-2xl bg-black/50 backdrop-blur-xl mx-6">
        <div className="relative z-10 text-center flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-4xl text-white font-medium italic mb-6 leading-tight tracking-tight drop-shadow-lg">Красота, рожденная <br /> в самом <span className="text-brand-yellow font-bold">сердце природы</span></h2>
          <p className="max-w-xs text-white/95 text-xs md:text-sm font-medium mb-8 italic leading-relaxed drop-shadow-md">"Настоящая гармония — это когда ваша кожа дышит вместе с миром, обретая покой в каждом мгновении."</p>
          <div className="w-full max-w-xs flex flex-col sm:flex-row gap-2 bg-white/20 backdrop-blur-xl p-1.5 rounded-[2rem] border border-white/30">
            <input type="email" placeholder="E-mail" className="flex-1 bg-transparent px-4 py-2 text-white placeholder:text-white/40 outline-none font-medium text-[10px]" />
            <button className="bg-white text-brand-dark px-6 py-2 rounded-[1.4rem] font-bold text-[8px] uppercase tracking-widest hover:bg-brand-lime transition-all">Подписаться</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-brand-cream ring-1 ring-black/5"><img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop" alt="Botanical hands" className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-yellow rounded-full flex items-center justify-center p-4 text-center shadow-lg rotate-6"><ShieldCheck className="w-8 h-8 text-brand-dark mb-1" /><span className="text-[8px] font-black uppercase leading-tight tracking-widest absolute bottom-4">Organic Certified</span></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-brand-lime font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block font-sans">Наша Философия</span>
          <h2 className="font-display text-5xl md:text-6xl font-medium uppercase tracking-tighter mb-8 leading-[0.9]">Больше чем просто <br /><span className="italic text-brand-yellow">косметика</span></h2>
          <div className="space-y-6 text-slate-500 font-medium leading-relaxed italic text-lg"><p>Бренд Тиалия зародился в стремлении вернуть человеку связь с первозданной природой.</p><p>Каждое средство — это результат долгого поиска идеальных пропорций диких трав, органических масел и чистейшей воды.</p></div>
          <div className="grid grid-cols-2 gap-10 mt-12">
            <div className="flex gap-4"><Sparkles className="w-6 h-6 text-brand-lime flex-shrink-0" /><div><h4 className="font-bold text-xs uppercase tracking-widest mb-2 font-display">Честность</h4><p className="text-[10px] text-slate-400 font-medium">Полная прозрачность составов.</p></div></div>
            <div className="flex gap-4"><Leaf className="w-6 h-6 text-brand-lime flex-shrink-0" /><div><h4 className="font-bold text-xs uppercase tracking-widest mb-2 font-display">Уважение</h4><p className="text-[10px] text-slate-400 font-medium">100% веган и этичность.</p></div></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Catalog = ({ onAddToCart, onViewProduct }) => {
  return (
    <section id="catalog" className="py-24 bg-brand-cream/20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-brand-dark/20 font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block italic leading-relaxed">The Flora Collection</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-8xl font-medium uppercase tracking-tighter leading-[0.9] mb-4 italic">Коллекция <br className="sm:hidden" /> <span className="text-brand-lime not-italic font-bold">ухода</span></h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
        {PRODUCTS.map((p, i) => (
          <motion.div 
            key={p.id} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: i * 0.05 }} 
            className="group flex flex-col items-center text-center cursor-pointer"
            onClick={() => onViewProduct(p)}
          >
            <div className="relative w-full aspect-[4/5] rounded-[3.5rem] overflow-hidden bg-white shadow-xl shadow-black/5 border border-black/5 mb-8">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.1] group-hover:grayscale-0" referrerPolicy="no-referrer" />
              
              {/* Desktop Hover Overlay */}
              <div className="hidden lg:flex absolute inset-0 bg-brand-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-col items-center justify-center p-6 gap-4">
                 <button onClick={(e) => { e.stopPropagation(); onViewProduct(p); }} className="w-full py-4 bg-white text-brand-dark rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-brand-lime transition-all flex items-center justify-center gap-2 shadow-xl"><Eye className="w-4 h-4" />Подробнее</button>
                 <button onClick={(e) => { e.stopPropagation(); onAddToCart(p); }} className="w-full py-4 bg-brand-dark text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-brand-yellow hover:text-brand-dark transition-all flex items-center justify-center gap-2 shadow-xl"><ShoppingBag className="w-4 h-4" />В корзину</button>
              </div>

              {/* Mobile Interaction Indicator */}
              <div className="absolute bottom-6 right-6 lg:hidden z-20">
                <button 
                  onClick={(e) => { e.stopPropagation(); onAddToCart(p); }}
                  className="w-12 h-12 bg-brand-lime rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                >
                  <Plus className="w-6 h-6 text-brand-dark" />
                </button>
              </div>
            </div>
            <h3 className="font-display text-xl md:text-xl font-bold italic tracking-tight mb-2 uppercase">{p.name}</h3>
            <div className="text-xs font-black text-brand-lime">{p.price} ₽</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = ({ onOpenReview }) => {
  const reviews = [
    { name: 'Кира Л.', role: 'Актриса', text: 'Удивительно легкая текстура. Моя кожа сияет уже после недели использования крема.' },
    { name: 'Ольга С.', role: 'Health Coach', text: 'Для меня критически важен чистый состав. Тиалия — это пример качественной органики.' },
    { name: 'Дарья В.', role: 'Блогер', text: 'Я влюблена в аромат масла для тела. Это настоящий лес в бутылочке.' },
    { name: 'Мария К.', role: 'Стилист', text: 'Идеально подходит для подготовки кожи перед макияжем. Продукты выше всяких похвал.' }
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-sage text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16"><span className="text-brand-lime font-bold uppercase tracking-[0.6em] text-[10px] mb-4 block">Голоса красоты</span><h2 className="font-display text-6xl md:text-7xl font-medium uppercase tracking-tighter italic">Ваши <span className="text-brand-yellow">отзывы</span></h2></div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col">
            <div className="flex gap-1 mb-6">{[...Array(5)].map((_, idx) => <Star key={idx} className="w-3 h-3 fill-brand-yellow text-brand-yellow" />)}</div>
            <p className="text-sm italic opacity-70 leading-relaxed mb-8 flex-1">"{r.text}"</p>
            <div className="border-t border-white/10 pt-6"><div className="font-bold uppercase tracking-widest text-[9px] mb-1">{r.name}</div><div className="text-[8px] opacity-40 uppercase tracking-[0.2em]">{r.role}</div></div>
          </motion.div>
        ))}
      </div>
      <div className="mt-16 text-center"><button onClick={onOpenReview} className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] border border-white/20 px-10 py-5 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-500">Поделиться отзывом <ArrowRight className="w-4 h-4" /></button></div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-brand-cream pt-20 pb-12">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16 items-start">
      <div className="col-span-2 space-y-6">
        <div className="flex items-center gap-3"><div className="w-7 h-7 bg-brand-dark rounded-full flex items-center justify-center text-brand-lime"><Leaf className="w-4 h-4" /></div><span className="font-display text-3xl font-bold tracking-tighter uppercase">Тиалия</span></div>
        <p className="text-slate-500 max-w-sm text-xs font-medium leading-relaxed italic pr-12 border-l-2 border-brand-lime pl-4">Мы проектируем будущее ухода за кожей, возвращаясь к истокам.</p>
        <div className="flex gap-4 pt-2"><Instagram className="w-5 h-5 text-slate-400 hover:text-brand-lime transition-colors cursor-pointer" /><Facebook className="w-5 h-5 text-slate-400 hover:text-brand-lime transition-colors cursor-pointer" /></div>
      </div>
      <div>
        <h4 className="font-bold text-[8px] uppercase tracking-[0.4em] mb-6 text-slate-400">Навигация</h4>
        <ul className="space-y-3 text-[9px] font-bold uppercase tracking-[0.3em]">
          <li><a href="#about" className="hover:text-brand-lime transition-colors">О бренде</a></li>
          <li><a href="#catalog" className="hover:text-brand-lime transition-colors">Коллекция</a></li>
          <li><a href="#reviews" className="hover:text-brand-lime transition-colors">Отзывы</a></li>
        </ul>
      </div>
      <div className="space-y-6">
         <div><h4 className="font-bold text-[8px] uppercase tracking-[0.4em] mb-4 text-slate-400">Контакты</h4><p className="text-[9px] font-bold flex items-center gap-2 tracking-widest leading-none mb-4"><MapPin className="w-3 h-3 text-brand-lime" /> Москва, Россия</p><a href="mailto:hello@tialia.ru" className="block text-[9px] font-bold flex items-center gap-2 tracking-widest hover:text-brand-lime mb-2"><Mail className="w-3 h-3 text-brand-lime" /> hello@tialia.ru</a><a href="tel:+79001234567" className="block text-[9px] font-bold flex items-center gap-2 tracking-widest hover:text-brand-lime"><Phone className="w-3 h-3 text-brand-lime" /> +7 (900) 123 45 67</a></div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between text-[8px] font-bold uppercase tracking-[0.5em] text-slate-300 gap-4 text-center"><span>© 2024 TIALIA COSMETICS. Создано природой.</span><div className="flex gap-8 justify-center"><a href="#" className="hover:text-brand-dark transition-colors">Политика конфиденциальности</a><a href="#" className="hover:text-brand-dark transition-colors">Оферта</a></div></div>
  </footer>
);

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) { return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item); }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing.quantity === 1) return prev.filter(item => item.id !== productId);
      return prev.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item);
    });
  };

  const clearItem = (productId) => { setCartItems(prev => prev.filter(item => item.id !== productId)); };
  const openProductModal = (product) => { setSelectedProduct(product); setIsModalOpen(true); };
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-lime selection:text-brand-dark font-sans text-brand-dark overflow-x-hidden antialiased scroll-smooth">
      <Header cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} onMobileMenuOpen={() => setIsMobileMenuOpen(true)} />
      <main><Hero /><AboutSection /><Catalog onAddToCart={addToCart} onViewProduct={openProductModal} /><Testimonials onOpenReview={() => setIsReviewOpen(true)} /></main>
      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} clearItem={clearItem} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddToCart={addToCart} />
      <ReviewModal isOpen={isReviewOpen} onClose={() => setIsReviewOpen(false)} />
      <AnimatePresence>
        {showScroll && (
          <motion.button initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-10 right-10 w-14 h-14 bg-brand-dark text-brand-lime rounded-full z-[90] flex items-center justify-center shadow-2xl hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 transform"><ChevronUp className="w-6 h-6" /></motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

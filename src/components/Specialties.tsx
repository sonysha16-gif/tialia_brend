import { motion } from 'motion/react';
import { ArrowUpRight, Coffee, Cookie } from 'lucide-react';

const showcaseItems = [
  {
    title: 'Лавандовый Латте',
    description: 'Наш легендарный латте с натуральной лавандой и нежной сливочной пенкой.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2070',
    category: 'Кофе',
    price: '320 ₽',
    size: 'large'
  },
  {
    title: 'Классический Круассан',
    description: 'Классическая французская выпечка, приготовленная на фермерском масле.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2072',
    category: 'Выпечка',
    price: '220 ₽',
    size: 'small'
  },
  {
    title: 'Баскский Чизкейк',
    description: 'Обожженный снаружи и невероятно кремовый внутри. Наш фаворит.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=2070',
    category: 'Десерт',
    price: '450 ₽',
    size: 'small'
  },
  {
    title: 'Искренний Чай',
    description: 'Натуральный сбор: алтайские травы, сушеная облепиха, кусочки имбиря и дикий мед. Согревающий эликсир здоровья.',
    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=2070',
    category: 'Чай',
    price: '380 ₽',
    size: 'large'
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="pt-12 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
             <div className="flex justify-center gap-4 mb-6">
                <Coffee className="text-brand-primary opacity-50" size={20} />
                <Cookie className="text-brand-primary opacity-50" size={20} />
             </div>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-8 leading-tight tracking-tighter uppercase">
              КОФЕ & <span className="text-gradient">ДЕСЕРТЫ</span>
            </h2>
            <p className="text-lg text-text-secondary font-light italic max-w-xl mx-auto">
              Мы отбираем лучшие ингредиенты, чтобы создать идеальный союз вкуса и формы.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`relative overflow-hidden rounded-[3rem] border border-white/5 group bg-bg-alt flex flex-col ${
                item.size === 'large' ? 'md:col-span-12 lg:col-span-7' : 'md:col-span-12 lg:col-span-5'
              }`}
            >
              <div className="relative aspect-[16/9] lg:aspect-auto lg:h-[450px] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/90 via-[#0C0A09]/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <div className="flex justify-between items-end">
                        <div className="space-y-4 max-w-sm">
                            <div className="flex items-center gap-4">
                                <span className="px-4 py-1.5 rounded-full glass border-white/10 text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                                    {item.category}
                                </span>
                                <span className="text-white/40 text-xs font-mono">{item.price}</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tighter leading-none group-hover:text-brand-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-text-secondary font-light line-clamp-2 md:line-clamp-none italic">
                                {item.description}
                            </p>
                        </div>
                        <a 
                          href="#menu" 
                          className="w-16 h-16 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:text-black transition-all group-hover:rotate-45"
                        >
                            <ArrowUpRight size={24} />
                        </a>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="#menu" className="inline-flex items-center gap-3 text-text-secondary hover:text-brand-primary transition-colors uppercase text-xs font-bold tracking-[0.2em]">
                ПОСМОТРЕТЬ ПОЛНОЕ МЕНЮ <ArrowUpRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
}

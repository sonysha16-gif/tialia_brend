import { motion } from 'motion/react';
import { Coffee, MapPin, Feather, Heart } from 'lucide-react';

const ABOUT_PHOTO = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl relative z-10 group">
                <img 
                    src={ABOUT_PHOTO} 
                    alt="Our Cafe Interior" 
                    className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10 p-8 glass rounded-3xl border-white/10 max-w-[280px]">
                    <Coffee className="text-brand-primary mb-4" size={32} />
                    <p className="text-sm text-white font-light italic">
                        "Мы верим, что каждая чашка — это история, рассказанная фермером, обжарщиком и бариста."
                    </p>
                </div>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-8 leading-tight tracking-tighter uppercase">
                ИСКУССТВО <br /> <span className="text-gradient">ИСКРЕННОСТИ</span>
              </h2>
              <div className="space-y-6 text-lg text-text-secondary font-light leading-relaxed italic">
                <p>
                  Искренность — это не просто кофейня. Это пространство, рожденное из любви к чистому вкусу и честному подходу. Это слово определяет всё, что мы делаем.
                </p>
                <p>
                  Мы не идем на компромиссы. Наше зерно проходит путь от селекции на плантациях до бережной обжарки, чтобы в вашей чашке раскрылся весь терруар региона.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Feather, title: 'Легкость', desc: 'Пространство для мысли' },
                { icon: MapPin, title: 'Локация', desc: 'В самом сердце города' },
                { icon: Heart, title: 'Страсть', desc: 'Любовь к каждой детали' },
                { icon: Coffee, title: 'Качество', desc: '85+ SCA score зерно' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-tight text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-text-secondary font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 rounded-[3rem] bg-bg-alt border border-brand-primary/10 shadow-xl relative overflow-hidden group">
                <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">Наши Ценности</h3>
                    <p className="text-sm text-text-secondary font-light leading-relaxed italic border-l-2 border-brand-primary pl-6">
                        Мы работаем напрямую с фермерскими хозяйствами, поддерживая принципы честной торговли (Direct Trade) и устойчивого развития кофейной индустрии.
                    </p>
                </div>
                <div className="absolute top-0 right-0 p-8 text-white/[0.03] rotate-12 group-hover:scale-110 transition-transform duration-700">
                    <Coffee size={120} />
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

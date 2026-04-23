import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Cloud, Cookie, Star, Info } from 'lucide-react';

const menuCategories = [
  { id: 'coffee', name: 'Кофе', icon: Coffee },
  { id: 'tea', name: 'Чай', icon: Cloud },
  { id: 'bakery', name: 'Выпечка', icon: Cookie },
];

const menuItems = {
  coffee: [
    { name: 'Эспрессо', price: '180 ₽', description: 'Классический вкус, плотное тело.', badge: 'Классика' },
    { name: 'Флэт Уайт', price: '280 ₽', description: 'Двойной ристретто и шелковистое молоко.' },
    { name: 'Латте Лаванда', price: '320 ₽', description: 'Нежный сливочный вкус с нотками прованских трав.', badge: 'Авторский' },
    { name: 'V60 Эфиопия', price: '350 ₽', description: 'Яркая кислотность, ноты жасмина и бергамота.' },
    { name: 'Колд Брю', price: '300 ₽', description: 'Кофе холодной экстракции, 12 часов настаивания.' },
    { name: 'Раф Ваниль', price: '320 ₽', description: 'Взбитые сливки с натуральной мадагаскарской ванилью.' },
  ],
  tea: [
    { name: 'Искренний Чай', price: '380 ₽', description: 'Алтайские травы, облепиха, имбирь, мед.', badge: 'Авторский' },
    { name: 'Габа Алишань', price: '450 ₽', description: 'Выдержанный тайваньский улун с медовым послевкусием.' },
    { name: 'Матча Латте', price: '350 ₽', description: 'Японский чай церемониального качества.' },
    { name: 'Да Хун Пао', price: '480 ₽', description: 'Утесный китайский чай с дымными нотками.' },
    { name: 'Марокканский чай', price: '380 ₽', description: 'Зеленый чай с мятой, цитрусом и пряностями.' },
  ],
  bakery: [
    { name: 'Круассан классический', price: '220 ₽', description: 'Настоящее сливочное масло из Франции.' },
    { name: 'Миндальный круассан', price: '320 ₽', description: 'С нежным франжипаном и лепестками миндаля.', badge: 'Хит' },
    { name: 'Баскский чизкейк', price: '450 ₽', description: 'Обожженный снаружи, кремовый внутри.' },
    { name: 'Тарталетка с малиной', price: '420 ₽', description: 'Песочное тесто, ванильный крем, свежая малина.' },
  ],
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState('coffee');

  return (
    <section id="menu" className="pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-6 uppercase tracking-tighter">
              НАШЕ <span className="text-gradient">МЕНЮ</span>
            </h2>
            <p className="text-lg text-text-secondary font-light max-w-xl mx-auto italic">
              «Вкус — это память, которую мы создаем вместе»
            </p>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16 px-4">
          <div className="inline-flex p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full max-w-full overflow-x-auto no-scrollbar">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-4 sm:px-8 py-3 sm:py-4 rounded-full text-[10px] sm:text-sm font-bold tracking-widest uppercase transition-all flex items-center whitespace-nowrap ${
                  activeTab === cat.id ? 'text-black' : 'text-text-secondary hover:text-white'
                }`}
              >
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <cat.icon size={14} className={`relative z-10 mr-1.5 sm:mr-2 ${activeTab === cat.id ? 'text-black' : 'text-brand-primary'}`} />
                <span className="relative z-10">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8"
            >
              {menuItems[activeTab as keyof typeof menuItems].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative flex items-end justify-between border-b border-white/10 pb-4"
                >
                  <div className="flex-1 mr-4">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary text-[8px] font-bold uppercase tracking-widest border border-brand-primary/20">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary font-light line-clamp-1 italic">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-xl font-display font-bold text-brand-secondary">
                    {item.price}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

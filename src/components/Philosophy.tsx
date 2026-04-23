import { motion } from 'motion/react';
import { Leaf, Flame, Award } from 'lucide-react';

const trustItems = [
  {
    icon: Leaf,
    title: 'Прямые поставки',
    text: 'Мы закупаем зерна класса Specialty напрямую с плантаций Колумбии, Эфиопии и Бразилии.',
  },
  {
    icon: Flame,
    title: 'Своя обжарка',
    text: 'Обжариваем кофе малыми лотами каждую неделю, чтобы вы могли почувствовать истинный профиль зерна.',
  },
  {
    icon: Award,
    title: 'Мастерство бариста',
    text: 'Наши мастера знают о кофе всё — от тонкостей экстракции до идеального баланса молока в вашем латте.',
  },
];

export default function TrustIntro() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 uppercase tracking-tighter">
            ФИЛОСОФИЯ <span className="text-gradient">ИСКРЕННОСТИ</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-light">Каждый день мы стремимся к совершенству в деталях — от выбора фермера до улыбки, с которой мы подаем вам чашку.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bento-card group"
            >
              <div className="w-16 h-16 rounded-[1.5rem] bg-bg-main flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-primary group-hover:text-black transition-all duration-500 border border-brand-primary/10">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed font-light">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

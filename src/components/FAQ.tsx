import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    question: 'Какое зерно вы используете?',
    answer: 'Мы работаем исключительно со спешелти-сегментом. Нашими партнерами являются лучшие обжарщики России и Европы, которые закупают зерно напрямую у фермеров в Эфиопии, Колумбии и Бразилии.',
  },
  {
    question: 'Можно ли у вас поработать с ноутбуком?',
    answer: 'Конечно. Комфорт гостей — наш приоритет. У нас есть удобные зоны с розетками и высокоскоростной Wi-Fi. Мы просим лишь соблюдать тишину и уважать пространство других.',
  },
  {
    question: 'Есть ли у вас альтернативное молоко?',
    answer: 'Да, вы можете заказать любой напиток на овсяном, миндальном, кокосовом или фундучном молоке без доплаты.',
  },
  {
    question: 'Проводите ли вы каппинги для гостей?',
    answer: 'Да, каждую субботу в 12:00 мы проводим открытые дегустации. Это отличная возможность научиться различать терруары и дескрипторы разных сортов кофе.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 uppercase tracking-tighter">
            ЕСТЬ <span className="text-gradient">ВОПРОСЫ?</span>
          </h2>
          <p className="text-lg text-text-secondary font-light">
            Мы собрали ответы на самое важное.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                openIndex === index 
                  ? 'bg-bg-alt border-brand-primary/30 shadow-[0_0_50px_rgba(212,163,115,0.1)]' 
                  : 'bg-bg-main border-white/5 hover:border-brand-primary/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-8 text-left group/faq"
              >
                <span className={`text-lg font-bold pr-8 transition-colors uppercase tracking-tight ${openIndex === index ? 'text-brand-primary' : 'text-white group-hover/faq:text-brand-primary'}`}>{item.question}</span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index ? 'bg-brand-primary text-black' : 'bg-white/5 text-brand-primary'
                }`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-8 text-text-secondary leading-relaxed font-light italic border-t border-white/5 pt-6">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Flame, Droplets, Thermometer, Coffee, ChevronDown } from 'lucide-react';

const steps = [
  {
    label: 'Этап 1',
    title: 'Отбор зерна',
    text: 'Мы выбираем только лоты с оценкой выше 85 баллов по системе SCA, лично пробуя урожай каждого фермера.',
    icon: Leaf,
  },
  {
    label: 'Этап 2',
    title: 'Профильная обжарка',
    text: 'Наш рост-мастер подбирает уникальный температурный график, чтобы раскрыть сладость и аромат каждого сорта.',
    icon: Flame,
  },
  {
    label: 'Этап 3',
    title: 'Свежесть обжарки',
    text: 'Кофе отдыхает ровно 7 дней после обжарки — именно тогда он достигает пика своего вкусового потенциала.',
    icon: Thermometer,
  },
  {
    label: 'Этап 4',
    title: 'Идеальный помол',
    text: 'Для каждого способа заваривания мы настраиваем свой помол с точностью до микрона.',
    icon: Droplets,
  },
  {
    label: 'Этап 5',
    title: 'Ритуал подачи',
    text: 'Будь то чашка эспрессо или Chemex — мы соблюдаем все нюансы температуры и времени экстракции.',
    icon: Coffee,
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(2); // Highlight freshness by default

  return (
    <section id="process" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 uppercase tracking-tighter">
            ОТ ЗЕРНА <span className="text-gradient">ДО ЧАШКИ</span>
          </h2>
          <p className="text-lg text-text-secondary font-light">
            Процесс создания идеального кофе — это наука, возведенная в ранг искусства.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:flex justify-between relative mb-24">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 -z-10" />
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-1/5 px-4">
              <motion.button
                onClick={() => setActiveStep(activeStep === index ? null : index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-16 h-16 rounded-[1.2rem] flex items-center justify-center transition-all duration-300 shadow-lg ${
                  activeStep === index 
                    ? 'bg-brand-primary text-black shadow-brand-primary/20 scale-110' 
                    : 'bg-bg-alt text-brand-primary hover:text-white border border-brand-primary/10'
                }`}
              >
                <step.icon size={28} />
              </motion.button>
              <div className="mt-6 text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/60 mb-2 block">
                  {step.label}
                </span>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Active Step Details */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            {activeStep !== null && (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-bg-alt p-12 rounded-[3.5rem] border border-brand-primary/10 shadow-[0_0_50px_rgba(212,163,115,0.05)] text-center max-w-2xl mx-auto"
              >
                <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tighter">{steps[activeStep].title}</h3>
                <p className="text-lg text-text-secondary leading-relaxed font-light italic">
                  "{steps[activeStep].text}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-[2rem] border transition-all ${
                activeStep === index 
                  ? 'bg-bg-alt border-brand-primary/30 shadow-[0_0_40px_rgba(212,163,115,0.1)]' 
                  : 'bg-bg-main border-white/5'
              }`}
            >
              <button
                onClick={() => setActiveStep(activeStep === index ? null : index)}
                className="flex items-center justify-between w-full text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeStep === index ? 'bg-brand-primary text-black' : 'bg-bg-alt text-brand-primary border border-brand-primary/10'
                  }`}>
                    <step.icon size={24} />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-brand-primary/60 block">
                      {step.label}
                    </span>
                    <h3 className="font-bold text-white uppercase tracking-wider text-sm">{step.title}</h3>
                  </div>
                </div>
                <ChevronDown 
                  className={`transition-transform duration-300 text-brand-primary ${activeStep === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {activeStep === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-text-secondary leading-relaxed pt-4 border-t border-white/5 font-light">
                      {step.text}
                    </p>
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

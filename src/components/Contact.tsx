import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Instagram, CheckCircle2, Coffee } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Using a mock post for visual feedback since we handle formspree in instruction
    setTimeout(() => {
        setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-8 leading-tight tracking-tighter uppercase">
              ЗАЙДИТЕ <br /> В <span className="text-gradient">ГОСТИ</span>
            </h2>
            <p className="text-lg text-text-secondary font-light">
              Мы всегда рады новым знакомствам и старым друзьям. Забронируйте стол или просто заходите на чашку кофе.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="flex items-center p-8 rounded-[2rem] bg-bg-alt border border-white/5 group">
                    <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mr-6 group-hover:bg-brand-primary group-hover:text-black transition-all duration-500">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1 font-sans">Адрес</p>
                      <p className="text-lg font-bold text-white uppercase tracking-tight">Санкт-Петербург, <br />ул. Большая Морская, 24</p>
                    </div>
                </div>

                <div className="flex items-center p-8 rounded-[2rem] bg-bg-alt border border-white/5 group text-left">
                    <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mr-6 group-hover:bg-brand-primary group-hover:text-black transition-all duration-500">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1 font-sans">Телефон</p>
                      <p className="text-xl font-bold text-white tracking-tighter">+7 (900) 123-45-67</p>
                    </div>
                </div>

                <div className="flex items-center p-8 rounded-[2rem] bg-bg-alt border border-white/5 group text-left">
                    <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mr-6 group-hover:bg-brand-primary group-hover:text-black transition-all duration-500">
                      <Instagram size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1 font-sans">Instagram</p>
                      <p className="text-xl font-bold text-white tracking-tighter">@sincere_cafe</p>
                    </div>
                </div>
            </div>

            {/* Mock Map */}
            <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066" 
                    alt="Map Location" 
                    className="w-full h-full object-cover grayscale opacity-50 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="p-4 bg-brand-primary text-black rounded-2xl shadow-2xl"
                    >
                        <MapPin size={32} />
                    </motion.div>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 lg:p-14 bg-bg-alt rounded-[4rem] border border-brand-primary/10 shadow-[0_0_80px_rgba(212,163,115,0.05)] relative overflow-hidden"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-24 h-24 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase tracking-tighter">Стол забронирован!</h3>
                <p className="text-text-secondary font-light">Мы ждем вас в гости. До встречи в Sincere!</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-10 btn-glow px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest"
                >
                  Забронировать еще
                </button>
              </div>
            ) : (
              <form id="contact_form" className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-[10px] font-bold text-brand-primary uppercase tracking-widest ml-1 font-sans">Ваше Имя</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Александр"
                      className="w-full px-8 py-5 rounded-[1.5rem] bg-white/5 border border-white/10 text-white placeholder:text-text-secondary/30 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all font-light italic"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label htmlFor="contact" className="text-[10px] font-bold text-brand-primary uppercase tracking-widest ml-1 font-sans">Телефон</label>
                        <input
                          type="tel"
                          id="contact"
                          name="contact"
                          placeholder="+7 ___ ___-__-__"
                          className="w-full px-8 py-5 rounded-[1.5rem] bg-white/5 border border-white/10 text-white placeholder:text-text-secondary/30 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all font-light"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="guests" className="text-[10px] font-bold text-brand-primary uppercase tracking-widest ml-1 font-sans">Количество гостей</label>
                        <select
                          id="guests"
                          name="guests"
                          className="w-full px-8 py-5 rounded-[1.5rem] bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all appearance-none font-light"
                          required
                        >
                          <option value="1">1 гость</option>
                          <option value="2" selected>2 гостя</option>
                          <option value="4">4 гостя</option>
                          <option value="6">Большая компания</option>
                        </select>
                      </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="notes" className="text-[10px] font-bold text-brand-primary uppercase tracking-widest ml-1 font-sans">Пожелания</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Например: столик у окна, нужен высокий стул для ребенка..."
                    className="w-full px-8 py-5 rounded-[2.5rem] bg-white/5 border border-white/10 text-white placeholder:text-text-secondary/30 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all resize-none font-light italic"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full btn-glow py-6 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    >
                        <Coffee size={24} />
                    </motion.div>
                  ) : (
                    <>
                        Забронировать <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-text-secondary/50 text-center uppercase tracking-widest">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                </p>
              </form>
            )}

            {/* Decorative Background Icon */}
            <div className="absolute -bottom-10 -right-10 text-white/5 rotate-12 pointer-events-none">
                <Coffee size={300} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

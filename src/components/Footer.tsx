import { Instagram, Mail, MessageCircle, Coffee } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8 group">
              <span className="text-3xl font-extrabold tracking-tighter text-white uppercase italic group-hover:text-brand-primary transition-colors font-display">
                КАФЕ <span className="text-brand-primary">ИСКРЕННОСТЬ</span>
              </span>
            </a>
            <p className="text-text-secondary font-light max-w-sm leading-relaxed mb-8 italic">
              Место, где время замедляется, а вкус раскрывается. Мы создали кофейню «Искренность» как уютное убежище для настоящих ценителей кофе и атмосферы.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-black transition-all duration-500">
                <Instagram size={22} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-black transition-all duration-500">
                <MessageCircle size={22} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-black transition-all duration-500">
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-brand-primary/60 font-sans">Карта сайта</h4>
            <ul className="space-y-4">
              <li><a href="#menu" className="text-text-secondary hover:text-white transition-colors font-light">Меню</a></li>
              <li><a href="#specialties" className="text-text-secondary hover:text-white transition-colors font-light">Специалитеты</a></li>
              <li><a href="#gallery" className="text-text-secondary hover:text-white transition-colors font-light">Галерея</a></li>
              <li><a href="#faq" className="text-text-secondary hover:text-white transition-colors font-light">Частые вопросы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-brand-primary/60 font-sans">Режим работы</h4>
            <ul className="space-y-4 font-light text-text-secondary">
              <li>Будни: 08:00 – 21:00</li>
              <li>Выходные: 09:00 – 22:00</li>
              <li className="pt-4 text-brand-primary font-bold tracking-tight uppercase">Санкт-Петербург, <br />Большая Морская, 24</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <p className="text-text-secondary/40 text-[10px] uppercase tracking-widest">
            © {currentYear} КАФЕ ИСКРЕННОСТЬ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </p>
          <div className="flex items-center gap-2 text-text-secondary/40 text-[10px] uppercase tracking-widest">
            <span>Спроектировано с любовью</span>
            <Coffee size={12} className="text-brand-primary" />
          </div>
        </div>
      </div>
      
      {/* Decorative Background Icon */}
      <div className="absolute -bottom-20 -left-20 text-white/[0.02] -rotate-12 pointer-events-none">
          <span className="text-[12rem] font-display font-black leading-none">ИСКРЕННОСТЬ</span>
      </div>
    </footer>
  );
}

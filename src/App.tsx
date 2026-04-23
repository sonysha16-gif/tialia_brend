/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bean } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Specialties from './components/Specialties';
import Gallery from './components/Gallery';
import Process from './components/Process';
import About from './components/About';
import Menu from './components/Menu';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="min-h-screen flex flex-col relative"
        >
          {/* Global Background Layer */}
          <div className="fixed inset-0 -z-30 bg-[#110F0E] pointer-events-none">
            {/* Unified coffee-cream ribbon background using linear gradients to prevent banding */}
            <div 
              className="absolute inset-0 opacity-50"
              style={{ 
                background: `
                  linear-gradient(135deg, rgba(212, 163, 115, 0.1) 0%, #110F0E 40%),
                  linear-gradient(225deg, rgba(233, 237, 198, 0.05) 0%, #110F0E 40%),
                  linear-gradient(to bottom, rgba(212, 163, 115, 0.03) 0%, #110F0E 50%),
                  linear-gradient(to top, rgba(233, 237, 198, 0.03) 0%, #110F0E 50%)
                `,
                transform: 'translateZ(0)'
              }}
            />
            {/* Subtle noise to break banding if it still occurs in 8-bit displays */}
            <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" />
            
            {/* Background Coffee Beans Pattern */}
            <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
              {[
                { top: '10%', left: '5%', rot: 15, size: 120 },
                { top: '40%', right: '10%', rot: -35, size: 180 },
                { top: '25%', left: '15%', rot: 90, size: 150 },
                { top: '75%', left: '40%', rot: -12, size: 110 },
                { top: '15%', right: '35%', rot: 45, size: 140 },
                { top: '65%', right: '15%', rot: 160, size: 90 },
              ].map((bean, i) => (
                <svg
                  key={i}
                  style={{ 
                    position: 'absolute', 
                    top: bean.top, 
                    left: bean.left, 
                    right: bean.right,
                    transform: `rotate(${bean.rot}deg)`,
                    width: bean.size,
                    height: bean.size
                  }}
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <ellipse cx="50" cy="50" rx="45" ry="30" />
                  <path d="M15 55 Q 50 35 85 55" strokeWidth="3" strokeLinecap="round" />
                </svg>
              ))}
            </div>
          </div>

          <Navbar />
          <main className="flex-grow">
            <Hero />
            <Philosophy />
            <Specialties />
            <Menu />
            <Gallery />
            <Process />
            <About />
            <FAQ />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

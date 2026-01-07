
import React from 'react';
import { motion } from 'framer-motion';

export const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-24 px-6 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden rotate-3"
            >
               <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                alt="Students collaborating" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#FF6B00] rounded-3xl -z-10 -rotate-6"></div>
          </div>
          
          <div>
            <div className="inline-block px-4 py-1.5 bg-orange-50 text-[#FF6B00] rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
              Our Mission
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Empowering Students through <span className="text-[#FF6B00]">Integrity.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              VIBE was born out of a simple realization: the transition from college to career is currently a "black box" of ghosting and scams.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We are a team of former interns, faculty, and industry leaders dedicated to creating a marketplace where quality matters more than quantity. Every connection on VIBE is built on verified trust.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-extrabold text-slate-900 mb-1">10k+</p>
                <p className="text-sm text-slate-500 font-medium">Verified Interns</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900 mb-1">500+</p>
                <p className="text-sm text-slate-500 font-medium">Trusted Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

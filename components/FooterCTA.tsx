
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface FooterCTAProps {
  onJoin?: () => void;
}

const testimonials = [
  {
    quote: "I finally knew where my application stood. No more endless waiting.",
    author: "Sarah K.",
    role: "UX Intern @ Adobe"
  },
  {
    quote: "The verification process actually works. No scam offers anymore.",
    author: "James L.",
    role: "Dev Intern @ Vercel"
  }
];

export const FooterCTA: React.FC<FooterCTAProps> = ({ onJoin }) => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Social Proof */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-left relative overflow-hidden"
            >
              <Quote size={40} className="text-[#FF6B00]/10 absolute -top-2 -left-2 opacity-50" />
              <p className="text-slate-600 mb-6 italic relative z-10">"{t.quote}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.author}</p>
                <p className="text-xs text-[#FF6B00] font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Internships should build confidence, <br className="hidden md:block" />
            <span className="text-[#FF6B00]">not confusion.</span>
          </h2>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto">
            Join thousands of students who have secured trusted roles and started their careers with clarity.
          </p>
          <button 
            onClick={onJoin}
            className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl hover:bg-slate-800 transition-all transform hover:-translate-y-1 active:scale-95 text-lg"
          >
            Join VIBE Today
          </button>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-50/50 to-transparent -z-10"></div>
    </section>
  );
};

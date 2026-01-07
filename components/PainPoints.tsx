
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Ghost, Clock, AlertTriangle, BookX } from 'lucide-react';

const pains = [
  { icon: ShieldAlert, text: "Fake & scam internships", color: "#EF4444" },
  { icon: Ghost, text: "No reply after applying", color: "#64748B" },
  { icon: Clock, text: "Unclear job expectations", color: "#F59E0B" },
  { icon: AlertTriangle, text: "Low or unpaid internships", color: "#B91C1C" },
  { icon: BookX, text: "No guidance or transparency", color: "#475569" },
];

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight uppercase">Why students struggle</h2>
          <div className="w-12 h-1 bg-[#FF6B00] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {pains.map((pain, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 flex flex-col items-center text-center group"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors text-slate-300 group-hover:text-[#FF6B00]">
                <pain.icon size={20} strokeWidth={2.5} />
              </div>
              <p className="text-xs font-bold text-slate-700 leading-snug">{pain.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

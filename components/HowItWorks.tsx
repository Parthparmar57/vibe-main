
import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, BarChart2 } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Verify & Post",
    desc: "Companies authenticate their project to post student-first roles."
  },
  {
    icon: Search,
    title: "Apply with Clarity",
    desc: "Students browse verified roles with 100% transparent details."
  },
  {
    icon: BarChart2,
    title: "Real Status Tracking",
    desc: "Monitor your application live and get real-time recruiter updates."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase">The VIBE Process</h2>
          <div className="w-16 h-1 bg-[#FF6B00] mx-auto rounded-full" />
        </div>

        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-[#FF6B00]"
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-[2rem] flex items-center justify-center text-[#FF6B00] mb-8 shadow-xl transition-all group-hover:scale-110 group-hover:shadow-[#FF6B00]/10">
                <step.icon size={36} strokeWidth={2.5} />
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm w-full">
                <span className="text-[10px] font-black text-[#FF6B00] uppercase tracking-widest mb-2 block">Step 0{idx + 1}</span>
                <h4 className="text-xl font-black text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

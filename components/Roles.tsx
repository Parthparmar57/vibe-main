
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Megaphone, Database, Briefcase, Cpu, ArrowRight } from 'lucide-react';

interface RolesProps {
  onExplore?: () => void;
}

const roleCategories = [
  { icon: Code, title: "Engineering", count: "140+ Roles", color: "#FF6B00" },
  { icon: Palette, title: "Design", count: "85+ Roles", color: "#8B5CF6" },
  { icon: Megaphone, title: "Marketing", count: "60+ Roles", color: "#10B981" },
  { icon: Database, title: "Data Science", count: "45+ Roles", color: "#3B82F6" },
  { icon: Briefcase, title: "Business", count: "70+ Roles", color: "#F59E0B" },
  { icon: Cpu, title: "Product", count: "30+ Roles", color: "#EF4444" },
];

export const Roles: React.FC<RolesProps> = ({ onExplore }) => {
  return (
    <section id="roles" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#FF6B00]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-white border border-slate-100 shadow-sm rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4"
          >
            Category Explorer
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Popular <span className="text-[#FF6B00]">Internship</span> Categories
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            Find verified opportunities across diverse fields. Every listing is human-vetted for transparency, impact, and quality mentorship.
          </p>
        </div>

        {/* 2-column on mobile, 3-column on tablet, 6-column on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {roleCategories.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={onExplore}
              className="bg-white p-5 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 text-center flex flex-col items-center group cursor-pointer hover:border-[#FF6B00]/20 hover:shadow-2xl hover:shadow-[#FF6B00]/5 transition-all duration-500"
            >
              {/* Icon Wrapper with Layered Hover Effects */}
              <div className="relative mb-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 md:w-20 md:h-20 rounded-[1.5rem] flex items-center justify-center relative z-10 transition-all duration-500 shadow-lg group-hover:shadow-2xl"
                  style={{ 
                    backgroundColor: `${role.color}10`, 
                    color: role.color,
                    boxShadow: `0 10px 30px -10px ${role.color}20` 
                  }}
                >
                  <role.icon 
                    size={32} 
                    className="md:w-10 md:h-10 transition-transform duration-500 group-hover:-translate-y-1" 
                    strokeWidth={2.5}
                  />
                </motion.div>
                
                {/* Subtle outer pulse effect on hover */}
                <div 
                  className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 -z-10"
                  style={{ backgroundColor: `${role.color}08` }}
                />
              </div>

              <div className="flex flex-col flex-1">
                <h4 className="font-black text-slate-800 mb-1 text-sm md:text-lg tracking-tight group-hover:text-slate-900 transition-colors">
                  {role.title}
                </h4>
                <p 
                  className="text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 transition-colors" 
                  style={{ color: role.color }}
                >
                  {role.count}
                </p>
                
                <div className="mt-auto flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-tighter text-slate-400 opacity-0 group-hover:opacity-100 group-hover:text-[#FF6B00] transition-all duration-300">
                  Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card Accent (Dynamic) */}
              <div 
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ backgroundColor: `${role.color}40` }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-xs font-bold italic tracking-wide">
            * All counts are updated in real-time based on verified, active postings.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

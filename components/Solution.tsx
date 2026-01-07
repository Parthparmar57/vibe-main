
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, BadgeCheck, Activity, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "Authenticated Companies Only",
    desc: "Every company undergoes multi-point manual verification to prevent scams.",
    color: "#FF6B00"
  },
  {
    icon: BookOpen,
    title: "Complete Role Transparency",
    desc: "We mandate clear daily tasks, skill requirements, and stipend disclosures.",
    color: "#8B5CF6"
  },
  {
    icon: BadgeCheck,
    title: "Verified Internship Badge",
    desc: "Roles meeting our strict standards receive the coveted VIBE Trust Seal.",
    color: "#10B981"
  },
  {
    icon: Activity,
    title: "Application Status Tracking",
    desc: "Real-time updates. Know exactly when your resume is viewed by HR.",
    color: "#3B82F6"
  },
  {
    icon: HeartHandshake,
    title: "Student-First Platform",
    desc: "Designed to build confidence, transparency, and real career foundations.",
    color: "#F43F5E"
  }
];

export const Solution: React.FC = () => {
  return (
    <section id="why-vibe" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">Internships Built on Trust</h2>
          <p className="text-slate-500 font-medium">No ghosting. No scams. Just real opportunities.</p>
        </div>

        <div className="space-y-4">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-6 bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all group"
            >
              <div 
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-current/10 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${f.color}15`, color: f.color }}
              >
                <f.icon size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-1">{f.title}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{f.desc}</p>
              </div>
              <div className="hidden sm:block ml-auto opacity-10 text-slate-300 group-hover:opacity-100 group-hover:text-[#FF6B00] transition-all">
                <BadgeCheck size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

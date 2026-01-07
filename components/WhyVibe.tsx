
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, UserCheck, MessageSquareX, Ghost } from 'lucide-react';

const valueProps = [
  {
    icon: ShieldCheck,
    title: "Zero Scams",
    description: "Every company is human-verified to eliminate fake postings and phishing attempts."
  },
  {
    icon: Ghost,
    title: "No Ghosting",
    description: "Real-time application tracking means you know exactly when your resume is opened."
  },
  {
    icon: UserCheck,
    title: "Verified Mentors",
    description: "Internships are vetted for quality mentorship, not just manual labor."
  },
];

export const WhyVibe: React.FC = () => {
  return (
    <section id="why-vibe" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Why settle for <span className="text-red-500 underline decoration-red-100 underline-offset-8">uncertainty?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Standard platforms are cluttered with expired roles and silent recruiters. VIBE was built to fix the broken internship market with radical transparency and trust.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-red-50 border border-red-100">
                <MessageSquareX className="text-red-500 shrink-0" />
                <p className="text-sm text-red-700 font-medium italic">"I applied to 50 roles elsewhere and heard nothing. On VIBE, I saw my application was viewed in 2 hours."</p>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            {valueProps.map((prop, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 p-6 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-[#FF6B00]/5 transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#FF6B00] shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                  <prop.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{prop.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{prop.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

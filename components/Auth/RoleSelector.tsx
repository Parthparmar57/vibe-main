
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Building2, ChevronLeft, ArrowRight, Sparkles } from 'lucide-react';

interface RoleSelectorProps {
  onSelect: (role: string) => void;
  onBack: () => void;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({ onSelect, onBack }) => {
  const roles = [
    { 
      id: 'signup-student', 
      label: 'Student', 
      icon: GraduationCap, 
      desc: 'Find verified internships and track applications in real-time.', 
      color: '#FF6B00',
      tagline: 'Get Hired',
      bgGradient: 'from-orange-50 to-white'
    },
    { 
      id: 'signup-faculty', 
      label: 'Faculty', 
      icon: Briefcase, 
      desc: 'Bridge the gap between your students and industry partners.', 
      color: '#8B5CF6',
      tagline: 'Empower',
      bgGradient: 'from-purple-50 to-white'
    },
    { 
      id: 'signup-industry', 
      label: 'Industry', 
      icon: Building2, 
      desc: 'Post verified roles and access top-tier student talent.', 
      color: '#10B981',
      tagline: 'Partner',
      bgGradient: 'from-emerald-50 to-white'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#FAFAFB] overflow-hidden relative">
      {/* Immersive Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-[#FF6B00] rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -15, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[140px]" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl w-full relative z-10 flex flex-col items-center"
      >
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-[#FF6B00] transition-all mb-12 group font-black text-[10px] uppercase tracking-[0.3em] self-start md:self-center"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to login
        </button>

        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm mb-6"
          >
            <Sparkles size={14} className="text-[#FF6B00]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Choose Your Path</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
            How will you <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF9D4D]">VIBE?</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Select your identity to unlock a portal designed exclusively for your professional goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 w-full">
          {roles.map((role, idx) => (
            <motion.button
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(role.id)}
              className={`relative bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 text-left flex flex-col items-start group transition-all h-full overflow-hidden`}
            >
              {/* Dynamic Role Glow Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ 
                  background: `radial-gradient(circle at top right, ${role.color}15 0%, transparent 70%)` 
                }}
              />
              
              {/* Icon Container with multi-layered glow */}
              <div className="relative mb-10">
                <div 
                  className="absolute inset-0 blur-2xl opacity-20 transition-all group-hover:opacity-40" 
                  style={{ backgroundColor: role.color }}
                />
                <div 
                  className="w-20 h-20 rounded-3xl flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-2xl shadow-current/10"
                  style={{ backgroundColor: `${role.color}10`, color: role.color }}
                >
                  <role.icon size={42} strokeWidth={2.5} />
                </div>
              </div>

              <div className="mb-auto relative z-10">
                <span 
                  className="text-[11px] font-black uppercase tracking-[0.25em] mb-3 block"
                  style={{ color: role.color }}
                >
                  {role.tagline}
                </span>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-slate-800 transition-colors">
                  {role.label}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 text-sm md:text-base">
                  {role.desc}
                </p>
              </div>

              {/* Bottom Action Area */}
              <div className="w-full flex items-center justify-between mt-auto relative z-10">
                <div className="flex items-center gap-2 font-black text-xs md:text-sm text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                  Join the platform
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500 ease-out" />
                </div>
                
                {/* Decorative element */}
                <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: role.color }} />
                </div>
              </div>

              {/* Card Accent Border */}
              <div 
                className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-700 ease-in-out"
                style={{ backgroundColor: role.color }}
              />
            </motion.button>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]"
        >
          Secure Authentication • SSL Encrypted • Real-time Sync
        </motion.p>
      </motion.div>
    </div>
  );
};

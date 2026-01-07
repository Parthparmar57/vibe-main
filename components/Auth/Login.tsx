
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ChevronLeft, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface LoginProps {
  onSwitchToSignup: () => void;
  onBack: () => void;
}

export const Login: React.FC<LoginProps> = ({ onSwitchToSignup, onBack }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white relative">
      {/* Left Side: Login Form */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 flex flex-col items-center px-6 sm:px-8 md:px-12 relative z-10 bg-white"
      >
        {/* Container for the form with increased top padding to clear fixed Navbar */}
        <div className="w-full max-w-sm flex flex-col pt-32 pb-12 md:pt-16 md:pb-0 md:justify-center min-h-screen md:min-h-0 md:h-full">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-[#FF6B00] transition-colors mb-6 md:mb-8 group text-xs font-bold self-start"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to home
          </button>

          <div className="mb-6 md:mb-8">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF6B00] rounded-xl md:rounded-2xl flex items-center justify-center mb-4 shadow-xl shadow-[#FF6B00]/20">
              <span className="text-white font-black text-xl md:text-2xl leading-none">V</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-1">Welcome Back</h2>
            <p className="text-slate-500 text-xs md:text-sm font-medium">Please enter your details to access your dashboard.</p>
          </div>

          <div className="space-y-4 md:space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#FF6B00] transition-colors">
                  <Mail size={16} />
                </div>
                <input 
                  type="email" 
                  placeholder="name@university.edu"
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl md:rounded-2xl pl-11 pr-4 py-3 md:py-3.5 focus:outline-none focus:ring-4 focus:ring-[#FF6B00]/5 focus:border-[#FF6B00] focus:bg-white transition-all text-sm font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Password</label>
                <button className="text-[10px] font-bold text-[#FF6B00] hover:underline uppercase tracking-wider">Forgot?</button>
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#FF6B00] transition-colors">
                  <Lock size={16} />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl md:rounded-2xl pl-11 pr-4 py-3 md:py-3.5 focus:outline-none focus:ring-4 focus:ring-[#FF6B00]/5 focus:border-[#FF6B00] focus:bg-white transition-all text-sm font-medium"
                />
              </div>
            </div>

            <button className="w-full bg-[#FF6B00] text-white py-3.5 md:py-4 rounded-xl md:rounded-2xl font-black shadow-xl shadow-[#FF6B00]/30 hover:bg-[#E66000] transition-all flex items-center justify-center gap-2 md:gap-3 group active:scale-[0.98] mt-1 text-sm md:text-base">
              Login to VIBE
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="relative py-3">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <div className="relative flex justify-center text-[9px] uppercase font-bold tracking-[0.2em]"><span className="bg-white px-3 text-slate-300 font-black">Quick Connect</span></div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <button className="flex items-center justify-center gap-2 py-2.5 md:py-3 border-2 border-slate-100 rounded-xl md:rounded-2xl hover:border-[#FF6B00]/20 hover:bg-slate-50 transition-all text-xs md:text-sm font-bold text-slate-700 active:scale-95">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 md:py-3 border-2 border-slate-100 rounded-xl md:rounded-2xl hover:border-[#FF6B00]/20 hover:bg-slate-50 transition-all text-xs md:text-sm font-bold text-slate-700 active:scale-95">
                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-4 h-4" alt="LinkedIn" />
                LinkedIn
              </button>
            </div>
          </div>

          <p className="mt-8 md:mt-10 text-center text-xs md:text-sm text-slate-500 font-medium">
            New here?{' '}
            <button 
              onClick={onSwitchToSignup} 
              className="font-black text-[#FF6B00] hover:text-[#E66000] transition-colors"
            >
              Create Account
            </button>
          </p>
        </div>
      </motion.div>

      {/* Right Side: Visual Trust Panel (Desktop Only) */}
      <div className="hidden md:flex flex-1 relative bg-slate-900 items-center justify-center p-8 lg:p-12 overflow-hidden min-h-screen">
        {/* Background Mesh/Gradient */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#FF6B00] rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/10 p-8 lg:p-10 rounded-[2.5rem] shadow-2xl"
          >
            <div className="flex items-center gap-1.5 text-[#FF6B00] mb-6">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
              <span className="text-white/60 text-[10px] font-bold ml-2 tracking-widest uppercase">Verified Quality</span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight mb-8">
              "Finally, an internship portal that actually works."
            </h3>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B00] flex items-center justify-center text-white shadow-xl shadow-[#FF6B00]/20">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-white font-black text-xl">100% Transparency</p>
                <p className="text-white/50 text-xs font-medium uppercase tracking-widest">Verified roles only</p>
              </div>
            </div>
          </motion.div>

          {/* Floating UI Element */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-4 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 max-w-[220px]"
          >
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <ShieldCheck size={16} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-800 tracking-tight leading-none mb-1">VIBE Trust Badge</p>
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider leading-none">Status: Verified</p>
            </div>
          </motion.div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
    </div>
  );
};

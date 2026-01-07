
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, CheckCircle2, Eye, EyeOff, Briefcase, Sparkles, Mail, Phone, ArrowRight, Building2, User, Lock, ShieldCheck } from 'lucide-react';

interface FacultyPersonalInfo {
  fullName: string;
  email: string;
  mobile: string;
  dob: string;
}

interface FacultyProfessionalInfo {
  collegeName: string;
  position: string;
  experienceYears: string;
  expertise: string;
}

export const FacultyCreateAccount: React.FC<{ onBack: () => void; onComplete: () => void }> = ({ onBack, onComplete }) => {
  const [step, setStep] = useState(1);
  const [showPass, setShowPass] = useState(false);
  const [personal, setPersonal] = useState<FacultyPersonalInfo>({ fullName: '', email: '', mobile: '', dob: '' });
  const [pro, setPro] = useState<FacultyProfessionalInfo>({ collegeName: '', position: '', experienceYears: '', expertise: '' });
  const [security, setSecurity] = useState({ password: '', confirmPassword: '' });

  const isPersonalValid = personal.fullName.trim() !== '' && personal.email.includes('@') && personal.mobile.trim() !== '' && personal.dob !== '';
  const isProValid = pro.collegeName.trim() !== '' && pro.position !== '' && pro.experienceYears.trim() !== '' && pro.expertise.trim() !== '';
  const isSecurityValid = security.password.length >= 8 && security.password === security.confirmPassword;

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row overflow-x-hidden">
      {/* Branding Panel */}
      <div className="w-full md:w-[35%] bg-[#1A1A2E] md:h-screen sticky top-0 md:relative z-20 flex flex-col p-6 md:p-10 overflow-hidden shrink-0">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[120%] bg-[#8B5CF6] rounded-full blur-[140px]" />
        </div>
        
        <div className="relative z-10 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center h-full gap-6">
          <div className="flex flex-col gap-3">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-10 h-10 md:w-16 md:h-16 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 flex items-center justify-center text-[#8B5CF6] shadow-2xl"
            >
              <Briefcase size={32} className="hidden md:block" />
              <span className="md:hidden font-black text-xl">V</span>
            </motion.div>
            <div className="hidden md:block">
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-[1.1] mb-3">
                Portal for <br/><span className="text-[#8B5CF6]">Faculty.</span>
              </h2>
              <p className="text-white/60 text-sm font-medium max-w-[240px]">Bridge the gap between academia and industry. Empower your students with verified paths.</p>
            </div>
          </div>

          <div className="hidden md:block space-y-4">
            {['Placement Insights', 'Academic Connect', 'Verified Network'].map((txt, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} className="flex items-center gap-3 text-white text-sm font-bold"
              >
                <div className="w-5 h-5 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6]">
                  <CheckCircle2 size={12} />
                </div>
                {txt}
              </motion.div>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-2">
            {[1, 2, 3].map(s => (
              <div key={s} className={`h-1.5 rounded-full transition-all duration-500 ${s <= step ? 'w-6 bg-[#8B5CF6]' : 'w-1.5 bg-white/10'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="flex-1 flex flex-col items-center h-screen md:h-screen overflow-y-auto bg-slate-50/30 relative px-4 py-8 md:py-12 lg:px-16">
        <div className="w-full max-w-lg">
          <button 
            onClick={step === 1 ? onBack : prevStep} 
            className="group flex items-center gap-2 text-slate-400 hover:text-[#8B5CF6] transition-all mb-6 font-black text-[10px] uppercase tracking-[0.2em] hover:-translate-x-1"
          >
            <ChevronLeft size={14} />
            {step === 1 ? 'Back to Selector' : 'Previous Step'}
          </button>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="f1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-white"
              >
                <div className="mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8B5CF6] mb-1 block">Step 01</span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Academic Identity</h3>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Full Name & Title</label>
                    <div className="relative group">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#8B5CF6] transition-colors" />
                      <input 
                        type="text" value={personal.fullName} onChange={e => setPersonal({...personal, fullName: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all font-bold text-sm"
                        placeholder="Dr. Sarah Johnson"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Faculty Email</label>
                    <div className="relative group">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#8B5CF6] transition-colors" />
                      <input 
                        type="email" value={personal.email} onChange={e => setPersonal({...personal, email: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all font-bold text-sm"
                        placeholder="s.johnson@university.edu"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Mobile No</label>
                      <input 
                        type="tel" value={personal.mobile} onChange={e => setPersonal({...personal, mobile: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all font-bold text-sm"
                        placeholder="+91..."
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Birth Date</label>
                      <input 
                        type="date" value={personal.dob} onChange={e => setPersonal({...personal, dob: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all font-bold text-sm"
                      />
                    </div>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                  disabled={!isPersonalValid} onClick={nextStep}
                  className="w-full bg-[#8B5CF6] text-white py-4 rounded-xl font-black shadow-lg shadow-[#8B5CF6]/20 hover:bg-[#7C3AED] transition-all flex items-center justify-center gap-3 text-base mt-8 disabled:opacity-20 group"
                >
                  Continue <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="f2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-white"
              >
                <div className="mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8B5CF6] mb-1 block">Step 02</span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Academic Details</h3>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">University / Institution</label>
                    <div className="relative group">
                      <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#8B5CF6] transition-colors" />
                      <input 
                        type="text" value={pro.collegeName} onChange={e => setPro({...pro, collegeName: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all font-bold text-sm"
                        placeholder="e.g. MIT"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Designation</label>
                      <select 
                        value={pro.position} onChange={e => setPro({...pro, position: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all font-bold appearance-none cursor-pointer text-sm"
                      >
                        <option value="">Select Role</option>
                        <option value="HOD">HOD</option>
                        <option value="Professor">Professor</option>
                        <option value="Placement Officer">Placement Officer</option>
                        <option value="Lecturer">Lecturer</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Experience (Yrs)</label>
                      <input 
                        type="number" value={pro.experienceYears} onChange={e => setPro({...pro, experienceYears: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all font-bold text-sm"
                        placeholder="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Field of Expertise</label>
                    <textarea 
                      value={pro.expertise} onChange={e => setPro({...pro, expertise: e.target.value})}
                      className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl px-4 py-3 h-24 focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all font-bold resize-none text-sm"
                      placeholder="e.g. AI, Data Structures..."
                    />
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                  disabled={!isProValid} onClick={nextStep}
                  className="w-full bg-[#8B5CF6] text-white py-4 rounded-xl font-black shadow-lg mt-8 disabled:opacity-20"
                >
                  Configure Access
                </motion.button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="f3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-white"
              >
                <div className="mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8B5CF6] mb-1 block">Step 03</span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Portal Access</h3>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Password</label>
                    <div className="relative group">
                      <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#8B5CF6] transition-colors" />
                      <input 
                        type={showPass ? 'text' : 'password'} value={security.password} onChange={e => setSecurity({...security, password: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl pl-11 pr-11 py-3.5 focus:outline-none focus:border-[#8B5CF6] focus:bg-white transition-all font-bold text-sm"
                        placeholder="••••••••"
                      />
                      <button onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#8B5CF6]">
                        {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Confirm Password</label>
                    <div className="relative group">
                      <ShieldCheck size={16} className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${security.confirmPassword ? (security.password === security.confirmPassword ? 'text-green-500' : 'text-red-400') : 'text-slate-300'}`} />
                      <input 
                        type="password" value={security.confirmPassword} onChange={e => setSecurity({...security, confirmPassword: e.target.value})}
                        className={`w-full bg-slate-50 border-2 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none transition-all font-bold text-sm ${security.confirmPassword ? (security.password === security.confirmPassword ? 'border-green-400' : 'border-red-400') : 'border-slate-50'}`}
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                  disabled={!isSecurityValid} onClick={onComplete}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-black shadow-lg mt-8 flex items-center justify-center gap-3 text-base hover:bg-slate-800 disabled:opacity-20"
                >
                  Join Portal <Sparkles size={18} className="text-[#8B5CF6]" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="h-6 w-full"></div>
        </div>
      </div>
    </div>
  );
};

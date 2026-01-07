
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, CheckCircle2, Eye, EyeOff, Building2, Sparkles, Rocket, Mail, Phone, MapPin, Globe, ArrowRight, Lock, ShieldCheck, Briefcase } from 'lucide-react';

interface IndustryBasicInfo {
  industryName: string;
  industryType: string;
  email: string;
  mobile: string;
}

interface IndustryDetailsInfo {
  establishedYear: string;
  city: string;
  internshipType: string;
}

export const IndustryCreateAccount: React.FC<{ onBack: () => void; onComplete: () => void }> = ({ onBack, onComplete }) => {
  const [step, setStep] = useState(1);
  const [showPass, setShowPass] = useState(false);
  const [basic, setBasic] = useState<IndustryBasicInfo>({ industryName: '', industryType: '', email: '', mobile: '' });
  const [details, setDetails] = useState<IndustryDetailsInfo>({ establishedYear: '', city: '', internshipType: '' });
  const [security, setSecurity] = useState({ password: '', confirmPassword: '' });

  const isBasicValid = basic.industryName.trim() !== '' && basic.industryType !== '' && basic.email.includes('@') && basic.mobile.trim() !== '';
  const isDetailsValid = details.establishedYear.trim() !== '' && details.city.trim() !== '' && details.internshipType !== '';
  const isSecurityValid = security.password.length >= 8 && security.password === security.confirmPassword;

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row overflow-x-hidden">
      {/* Branding Panel */}
      <div className="w-full md:w-[35%] bg-[#0A0A0A] md:h-screen sticky top-0 md:relative z-20 flex flex-col p-6 md:p-10 overflow-hidden shrink-0">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[120%] h-[120%] bg-[#10B981] rounded-full blur-[140px]" />
        </div>
        
        <div className="relative z-10 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center h-full gap-6">
          <div className="flex flex-col gap-3">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-10 h-10 md:w-16 md:h-16 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 flex items-center justify-center text-[#10B981] shadow-2xl"
            >
              <Building2 size={32} className="hidden md:block" />
              <span className="md:hidden font-black text-xl">V</span>
            </motion.div>
            <div className="hidden md:block">
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-[1.1] mb-3">
                Enterprise <br/><span className="text-[#10B981]">Access.</span>
              </h2>
              <p className="text-white/60 text-sm font-medium max-w-[240px]">Access elite student talent. Build your future pipeline with radical transparency.</p>
            </div>
          </div>

          <div className="hidden md:block space-y-4">
            {['Direct Pipeline', 'Brand Building', 'Trust Verification'].map((txt, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} className="flex items-center gap-3 text-white text-sm font-bold"
              >
                <div className="w-5 h-5 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981]">
                  <CheckCircle2 size={12} />
                </div>
                {txt}
              </motion.div>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-2">
            {[1, 2, 3].map(s => (
              <div key={s} className={`h-1.5 rounded-full transition-all duration-500 ${s <= step ? 'w-6 bg-[#10B981]' : 'w-1.5 bg-white/10'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="flex-1 flex flex-col items-center h-screen md:h-screen overflow-y-auto bg-slate-50/50 relative px-4 py-8 md:py-12 lg:px-16">
        <div className="w-full max-w-lg">
          <button 
            onClick={step === 1 ? onBack : prevStep} 
            className="group flex items-center gap-2 text-slate-400 hover:text-[#10B981] transition-all mb-6 font-black text-[10px] uppercase tracking-[0.2em] hover:-translate-x-1"
          >
            <ChevronLeft size={14} />
            {step === 1 ? 'Back to Selector' : 'Previous Section'}
          </button>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="i1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-white"
              >
                <div className="mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#10B981] mb-1 block">Step 01</span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Business Profile</h3>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Company Name</label>
                    <div className="relative group">
                      <Briefcase size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#10B981] transition-colors" />
                      <input 
                        type="text" value={basic.industryName} onChange={e => setBasic({...basic, industryName: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all font-bold text-sm"
                        placeholder="e.g. Adobe Inc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Primary Vertical</label>
                    <div className="relative group">
                      <Globe size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#10B981] transition-colors" />
                      <select 
                        value={basic.industryType} onChange={e => setBasic({...basic, industryType: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all font-bold appearance-none cursor-pointer text-sm"
                      >
                        <option value="">Select Vertical</option>
                        <option value="IT">IT & Software</option>
                        <option value="AI">AI/ML Engineering</option>
                        <option value="Design">Digital Design</option>
                        <option value="Fintech">Financial Tech</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Recruitment Email</label>
                      <input 
                        type="email" value={basic.email} onChange={e => setBasic({...basic, email: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all font-bold text-sm"
                        placeholder="hr@adobe.com"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Contact Phone</label>
                      <input 
                        type="tel" value={basic.mobile} onChange={e => setBasic({...basic, mobile: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all font-bold text-sm"
                        placeholder="+1..."
                      />
                    </div>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                  disabled={!isBasicValid} onClick={nextStep}
                  className="w-full bg-[#10B981] text-white py-4 rounded-xl font-black shadow-lg shadow-[#10B981]/20 hover:bg-[#059669] transition-all flex items-center justify-center gap-3 text-base mt-8 disabled:opacity-20 group"
                >
                  Configure Hiring <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="i2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-white"
              >
                <div className="mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#10B981] mb-1 block">Step 02</span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Operational Scope</h3>
                </div>
                
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">HQ City</label>
                      <div className="relative group">
                        <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#10B981] transition-colors" />
                        <input 
                          type="text" value={details.city} onChange={e => setDetails({...details, city: e.target.value})}
                          className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all font-bold text-sm"
                          placeholder="e.g. San Francisco"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Est. Year</label>
                      <input 
                        type="number" value={details.establishedYear} onChange={e => setDetails({...details, establishedYear: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all font-bold text-sm"
                        placeholder="2012"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Hiring Mode</label>
                    <div className="flex gap-3">
                      {['Remote', 'Onsite', 'Hybrid'].map(m => (
                        <button 
                          key={m} onClick={() => setDetails({...details, internshipType: m})}
                          className={`flex-1 py-3.5 rounded-xl border-2 font-black text-[10px] transition-all tracking-widest uppercase ${details.internshipType === m ? 'bg-[#10B981] border-[#10B981] text-white shadow-md' : 'border-slate-50 text-slate-400 hover:border-slate-100'}`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                  disabled={!isDetailsValid} onClick={nextStep}
                  className="w-full bg-[#10B981] text-white py-4 rounded-xl font-black shadow-lg mt-8 disabled:opacity-20"
                >
                  Setup Security
                </motion.button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="i3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-white"
              >
                <div className="mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#10B981] mb-1 block">Step 03</span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Security Credentials</h3>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Corporate Password</label>
                    <div className="relative group">
                      <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#10B981] transition-colors" />
                      <input 
                        type={showPass ? 'text' : 'password'} value={security.password} onChange={e => setSecurity({...security, password: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl pl-11 pr-11 py-3.5 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all font-bold text-sm"
                        placeholder="••••••••"
                      />
                      <button onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#10B981]">
                        {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Verify Password</label>
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
                  Launch Dashboard <Rocket size={18} className="text-[#10B981]" />
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

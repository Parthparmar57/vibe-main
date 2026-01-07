
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, FileText, BarChart3, Star } from 'lucide-react';

interface HeroProps {
  onStart?: () => void;
}

const TypewriterHeadline: React.FC = () => {
  const dynamicPhrases = [
    "Applications That Don’t Go Silent.",
    "Verified Roles Only.",
    "Real Status Updates.",
    "No More Ghosting."
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullText = dynamicPhrases[currentPhraseIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(80); 
        
        if (currentText === fullText) {
          // Pause at end of typing
          setSpeed(2500); 
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setSpeed(40); 
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % dynamicPhrases.length);
          setSpeed(500); 
        }
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, speed]);

  return (
    <div className="flex flex-col">
      <span className="block text-slate-900">Internships You Can Trust.</span>
      <span className="block min-h-[1.2em] mt-2 relative text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF9D4D]">
        {currentText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "steps(2)" }}
          className="inline-block w-[3px] h-[0.9em] bg-[#FF6B00] ml-1 align-middle"
        />
      </span>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 text-[#FF6B00] px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
            <Star size={14} className="fill-[#FF6B00]" />
            Voted #1 Student Choice
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6">
            <TypewriterHeadline />
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Verified internships, clear roles, and real application tracking — built for students who are tired of ghosting and fake postings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              onClick={onStart}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#FF6B00] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-[#FF6B00]/20 hover:bg-[#E66000] transition-colors"
            >
              Explore Internships
            </motion.button>
            <motion.button 
              onClick={() => {
                const el = document.getElementById('how-it-works');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.03, y: -4, backgroundColor: '#f8fafc' }}
              whileTap={{ scale: 0.97 }}
              className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-slate-200/50"
            >
              How VIBE Works
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side - Floating Glass Cards */}
        <div className="relative h-[400px] flex items-center justify-center">
          {/* Card 1: Verified Company */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 md:left-20 z-10 bg-white/40 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-2xl flex items-center gap-4 w-64"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Verified Company</p>
              <p className="text-xs text-slate-500">Stripe, Inc. • Active</p>
            </div>
          </motion.div>

          {/* Card 2: Clear Role */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 md:right-20 z-20 bg-white border border-slate-100 p-5 rounded-[2rem] shadow-2xl shadow-slate-200/50 flex items-center gap-4 w-72"
          >
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#FF6B00]">
              <FileText size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Product Designer</p>
              <p className="text-xs text-slate-500 font-medium">$3,800/mo • Hybrid</p>
            </div>
          </motion.div>

          {/* Card 3: Status Tracking */}
          <motion.div
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-4 z-30 bg-white shadow-2xl border border-slate-100 p-4 rounded-2xl w-56 flex flex-col gap-3"
          >
            <div className="flex justify-between items-center">
              <p className="text-xs font-semibold text-slate-500">Application Status</p>
              <span className="text-[10px] bg-[#FF6B00]/10 text-[#FF6B00] px-2 py-0.5 rounded-full font-bold">LIVE</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
                <BarChart3 size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-green-600">Viewed by Recruiter</p>
                <p className="text-[10px] text-slate-400">2 minutes ago</p>
              </div>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Github, Mail, Heart, ArrowUpRight } from 'lucide-react';
import { ViewState } from '../App';

interface FooterProps {
  setView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { name: 'Why VIBE', href: 'why-vibe' },
    { name: 'Popular Roles', href: 'roles' },
    { name: 'How It Works', href: 'how-it-works' },
    { name: 'Verified Companies', href: 'about-us' },
  ];

  const resourceLinks = [
    { name: 'FAQ', href: 'faq' },
    { name: 'About Our Mission', href: 'about-us' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];

  const portalLinks = [
    { name: 'Student Portal', view: 'signup-student' },
    { name: 'Faculty Connect', view: 'signup-faculty' },
    { name: 'Industry Access', view: 'signup-industry' },
    { name: 'Recruiter Login', view: 'login' },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 px-6 overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#FF6B00]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div 
              className="flex items-center gap-3 cursor-pointer mb-6 group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 bg-[#FF6B00] rounded-full flex items-center justify-center shadow-lg shadow-[#FF6B00]/20 group-hover:scale-110 transition-transform">
                <span className="text-white font-black text-xl leading-none">V</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">VIBE</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs font-medium">
              The world's first student-first internship marketplace. Built on radical transparency, human verification, and a mission to end ghosting.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Github, href: '#' }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -4, color: '#FF6B00' }}
                  className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center border border-slate-800 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Platform</h4>
            <ul className="space-y-4">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleScrollTo(link.href)}
                    className="text-sm font-bold hover:text-[#FF6B00] transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Resources</h4>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => link.href !== '#' ? handleScrollTo(link.href) : null}
                    className="text-sm font-bold hover:text-[#FF6B00] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Join Us</h4>
            <ul className="space-y-4">
              {portalLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => setView(link.view as any)}
                    className="text-sm font-bold hover:text-[#FF6B00] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:hello@vibe.com" className="flex items-center gap-3 text-sm font-bold text-white hover:text-[#FF6B00] transition-colors">
                <Mail size={16} className="text-[#FF6B00]" />
                hello@vibe.com
              </a>
              <div className="pt-4">
                <p className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-500 mb-2">Location</p>
                <p className="text-xs font-bold text-slate-300">Hub 71, AI Maryah Island<br/>Abu Dhabi, UAE</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold text-slate-500">
            &copy; {currentYear} VIBE Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <span>Built with</span>
            <Heart size={14} className="text-[#FF6B00] fill-[#FF6B00]" />
            <span>for students, by students.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

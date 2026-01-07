
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does VIBE verify companies?",
    answer: "We use a multi-stage verification process including business registration checks, domain authentication, and human vetting of their internal mentorship programs."
  },
  {
    question: "Is VIBE free for students?",
    answer: "Yes, VIBE is completely free for students. Our mission is to provide equal access to verified career opportunities without any paywalls."
  },
  {
    question: "What does 'Application Status Tracking' mean?",
    answer: "It means you see exactly what happens to your application: 'Submitted', 'Viewed by HR', 'Shortlisted', or 'Closed'. No more guessing."
  },
  {
    question: "Can my college see my activity?",
    answer: "If your college is a VIBE partner, you can choose to share your progress with your placement department to help them support your career journey."
  }
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500">Everything you need to know about the VIBE platform.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all hover:border-[#FF6B00]/30">
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-slate-800">{faq.question}</span>
                {activeIndex === idx ? <ChevronUp className="text-[#FF6B00]" /> : <ChevronDown className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed text-sm border-t border-slate-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

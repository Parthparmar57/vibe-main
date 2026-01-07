
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Loader2, Info } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

export const AIPreview: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAudit = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `You are Vibe AI, an internship quality auditor. Analyze the following internship role description for a student and determine if it's "Student-First" or "Warning: Red Flag". Be concise. 
      Input: "${input}"
      
      Format your response as:
      Type: [Result]
      Reasoning: [1-2 sentences]
      Confidence Score: [0-100%]`;

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResponse(result.text || "No analysis available.");
    } catch (error) {
      console.error(error);
      setResponse("Verification failed. Please ensure your API key is configured correctly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center text-[#FF6B00]">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">VIBE AI: Internship Verifier</h3>
            <p className="text-sm text-slate-500">Paste a job role to check for transparency and red flags.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. 'Software Intern, Unpaid, must work 40 hours/week, no training provided...'"
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all"
          />
          <button 
            onClick={handleAudit}
            disabled={loading}
            className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            Analyze
          </button>
        </div>

        <AnimatePresence>
          {response && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <Info size={20} className="text-[#FF6B00] mt-1" />
                <div className="whitespace-pre-wrap text-sm text-slate-700 leading-relaxed font-medium">
                  {response}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

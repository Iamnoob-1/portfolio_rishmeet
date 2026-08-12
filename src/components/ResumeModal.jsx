import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Sparkles, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('sde');

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    // Generate a formatted printable text / PDF download Blob
    const content = `===================================================================
RISHMEET SINGH
Software Development Engineer & Generative AI Systems Developer
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
Education: B.Tech CSE @ VIT Chennai (CGPA: 8.65) | 2023 - 2027
LeetCode: 450+ Solved
===================================================================

SUMMARY:
Final-year B.Tech CSE student at VIT Chennai (CGPA 8.65) with strong foundation in DSA, algorithms, and applied machine learning. Solved 450+ DSA problems on LeetCode. Proficient in Python, C/C++, Java, React, Node.js, FastAPI, scikit-learn, Pinecone, and custom RAG pipelines.

PROJECTS:
1. Crypto-IDS: AI-Powered Intrusion & Anomaly Detection System (2026)
   - scikit-learn RandomForest pipeline (95%+ classification confidence) on 19 flow features.
   - Google Gemini AI real-time risk summaries & countermeasure generation.
   - Async FastAPI backend with WebSockets (5s windows) & AES-256-GCM SQL storage.

2. LexiGuard: AI-Powered Legal Document Analyzer (2026)
   - Custom RAG pipeline built from scratch (no LangChain) with clause-level chunking.
   - Pinecone Vector DB embeddings & Grok LLM synthesis up to 30-50 pages.

3. Real-Time Chat Application (2026)
   - WebSockets (Socket.io) with ~100ms average message latency.
   - Indexed MongoDB schema with <150ms retrieval for 500+ msgs/room.

4. Inshortly: AI News Summarizer (2025)
   - Flask REST API + React frontend with Gemini Pro API (70-75% length reduction).

TECHNICAL SKILLS:
Languages: Python, C/C++, Java, JavaScript, TypeScript, HTML/CSS, SQL
AI/ML: Scikit-learn, Custom RAG, Pinecone Vector DB, Gemini API, Grok LLM, Pandas, NumPy
Web & Backend: React, Node.js, FastAPI, Flask, Socket.io, Express, REST APIs
Databases & Cloud: MySQL, MongoDB, Pinecone, Git, Docker, AWS, Render, Firebase

CERTIFICATIONS:
- IBM Generative AI Professional Certificate (July 2025)
- Oracle Generative AI Certification (August 2025)
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Rishmeet_Singh_Resume_${selectedFormat.toUpperCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-cyan-500/40 p-6 shadow-2xl text-slate-100 font-sans">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-mono font-bold text-slate-100">
                Candidate Resume Portal
              </h2>
              <p className="text-xs font-mono text-slate-400">
                Official CV of Rishmeet Singh | VIT Chennai
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Format Selection */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedFormat('sde')}
              className={`flex-1 p-3.5 rounded-xl font-mono text-xs text-left transition-all border ${
                selectedFormat === 'sde'
                  ? 'bg-cyan-950/70 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400'
              }`}
            >
              <div className="font-bold text-sm">SDE & Full-Stack Systems Format</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Focus: DSA 450+, WebSockets, Distributed APIs, React</div>
            </button>

            <button
              onClick={() => setSelectedFormat('aiml')}
              className={`flex-1 p-3.5 rounded-xl font-mono text-xs text-left transition-all border ${
                selectedFormat === 'aiml'
                  ? 'bg-purple-950/70 border-purple-400 text-purple-300 shadow-md shadow-purple-500/20'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400'
              }`}
            >
              <div className="font-bold text-sm">AI / ML & Risk Analytics Format</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Focus: Custom RAG, Pinecone Vector DB, scikit-learn, LLMs</div>
            </button>
          </div>

          {/* Text Preview Window */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-3 leading-relaxed max-h-72 overflow-y-auto">
            <div className="text-cyan-400 font-bold border-b border-slate-800 pb-2 flex justify-between items-center">
              <span>PREVIEW: RISHMEET SINGH RESUME ({selectedFormat.toUpperCase()})</span>
              <span className="text-[10px] text-emerald-400">STATUS: VERIFIED</span>
            </div>
            <div><strong>Education:</strong> B.Tech CSE @ VIT Chennai (CGPA: 8.65) | 2023 - 2027</div>
            <div><strong>LeetCode:</strong> 450+ Solved</div>
            <div><strong>Featured Projects:</strong> Crypto-IDS (FastAPI + scikit-learn + Gemini), LexiGuard (Custom RAG + Pinecone), Real-Time Chat (Socket.io), Inshortly (Flask + Gemini Pro)</div>
            <div><strong>Certifications:</strong> IBM Generative AI Professional Certificate, Oracle Generative AI Certification</div>
          </div>

          {/* Quick Contact & Download */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-slate-950 text-slate-300 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
              {copied ? 'Email Copied!' : 'Copy rishmeetsingh2005@gmail.com'}
            </button>

            <button
              onClick={handleDownload}
              className="px-6 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-md shadow-cyan-500/20 flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-slate-950" />
              Download Official Resume
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

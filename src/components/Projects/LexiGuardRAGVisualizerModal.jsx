import React, { useState } from 'react';
import { X, FileText, Database, Sparkles, Cpu, Search, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

export default function LexiGuardRAGVisualizerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeStep, setActiveStep] = useState(1);
  const [queryText, setQueryText] = useState('What are the termination liabilities under Clause 14.2?');

  const steps = [
    {
      num: 1,
      title: 'Clause-Level Chunking',
      subtitle: 'Framework-less Legal Parsing',
      desc: 'Instead of arbitrary 512-token fixed-size splitters, LexiGuard parses contract structure using Regex clause hierarchy rules (Section, Subsection, Indemnity, Liability), preserving legal semantic context.'
    },
    {
      num: 2,
      title: 'Embedding Generation',
      subtitle: 'Dense Vector Representation',
      desc: 'Generates high-dimensional vector embeddings for each parsed clause. Standardized to 1536 dimensions for Pinecone index storage without third-party wrapper latency.'
    },
    {
      num: 3,
      title: 'Pinecone Vector Retrieval',
      subtitle: 'Cosine Similarity Search',
      desc: 'Queries Pinecone Vector DB using cosine similarity to fetch Top-3 relevant clause passages with confidence scores > 0.88 in under 45ms.'
    },
    {
      num: 4,
      title: 'Grok LLM Synthesis',
      subtitle: 'Zero-Hallucination Legal Digest',
      desc: 'Injects extracted clause contexts into Grok LLM prompt with strict groundedness constraints to produce precise risk analysis without hallucination.'
    }
  ];

  const simulatedRetrieval = [
    {
      clause: 'Clause 14.2 (Termination Liability)',
      score: '0.942 (Cosine Similarity)',
      text: 'Upon termination under Section 14.1, Party B shall pay liquidated damages equal to 12 months of service fees within 30 days of written notice.'
    },
    {
      clause: 'Clause 14.3 (Notice Period)',
      score: '0.891 (Cosine Similarity)',
      text: 'Either party may terminate this agreement with 60 days prior written notice subject to cure period provisions in Section 18.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-purple-500/30 p-6 shadow-2xl text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-950/80 border border-purple-500/40 text-purple-400">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-mono font-bold text-slate-100 flex items-center gap-2">
                LexiGuard RAG Pipeline Visualizer
                <span className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-normal border border-purple-500/30">
                  Custom RAG (No LangChain) + Pinecone + Grok
                </span>
              </h2>
              <p className="text-xs font-mono text-slate-400">
                Step-by-Step Architecture of Custom Legal Document RAG Engine
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-purple-500/40 text-slate-400 hover:text-purple-300 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Tabs */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2">
          {steps.map((st) => {
            const active = activeStep === st.num;
            return (
              <button
                key={st.num}
                onClick={() => setActiveStep(st.num)}
                className={`p-3 rounded-xl text-left font-mono transition-all border ${
                  active
                    ? 'bg-purple-950/70 border-purple-400 text-purple-300 shadow-md shadow-purple-500/20'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-bold text-purple-400">STEP 0{st.num}</div>
                <div className="text-xs font-bold text-slate-100 truncate">{st.title}</div>
                <div className="text-[10px] text-slate-400 truncate">{st.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Content */}
        <div className="mt-6 p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                STEP {activeStep}: {steps[activeStep - 1].title}
              </span>
              <h3 className="text-lg font-mono font-bold text-slate-100 mt-0.5">
                {steps[activeStep - 1].subtitle}
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30">
              ZERO LANGCHAIN OVERHEAD
            </span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            {steps[activeStep - 1].desc}
          </p>

          {/* Interactive Query Sandbox */}
          <div className="pt-2">
            <label className="block text-xs font-mono text-cyan-300 mb-1.5 font-semibold">
              SAMPLE LEGAL QUERY SIMULATION:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={queryText}
                onChange={(e) => setQueryText(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 font-mono text-xs text-slate-200 focus:outline-none focus:border-purple-500"
              />
              <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-mono text-white font-semibold flex items-center gap-1.5 shrink-0">
                <Search className="w-3.5 h-3.5" />
                Query Vector Index
              </button>
            </div>
          </div>

          {/* Retrieved Context Preview */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>PINECONE TOP-K RETRIEVED CLAUSES (K=2):</span>
              <span className="text-cyan-400">Latency: 38ms</span>
            </div>

            <div className="space-y-2">
              {simulatedRetrieval.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-400 font-bold">{item.clause}</span>
                    <span className="text-emerald-400 text-[11px]">{item.score}</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-normal">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Synthesized Response Output */}
          <div className="p-4 rounded-lg bg-purple-950/40 border border-purple-500/30 font-mono text-xs space-y-2">
            <div className="text-purple-300 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Grok LLM Synthesized Answer
            </div>
            <p className="text-slate-200 text-xs leading-relaxed">
              "Based on retrieved Clause 14.2, early termination requires Party B to pay liquidated damages equivalent to 12 months of service fees within 30 days of written notice, provided a 60-day notice period is observed as specified in Clause 14.3."
            </p>
          </div>

        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-500">
          <div>LexiGuard Architecture | High-Relevance Legal Vector RAG</div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStep(activeStep === 4 ? 1 : activeStep + 1)}
              className="px-3 py-1.5 rounded-lg bg-purple-950 border border-purple-500/40 text-purple-300 hover:bg-purple-900 transition-all flex items-center gap-1"
            >
              Next Pipeline Step <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

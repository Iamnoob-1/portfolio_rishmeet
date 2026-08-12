import React from 'react';
import { Shield, Sparkles, Terminal, ArrowRight, FileText, Code2, Cpu, CheckCircle2, Flame, Award } from 'lucide-react';
import { personalInfo, metrics } from '../data/portfolioData';

export default function HeroSection({ onOpenResume, onOpenTerminal }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Headline & Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              AVAILABLE FOR SDE & AI/ML ROLES | VIT CHENNAI '27
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-none">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 neon-text-cyan">{personalInfo.name}</span>
            </h1>

            <p className="text-xl sm:text-2xl font-mono text-cyan-300 font-medium">
              Software Development Engineer & Generative AI Systems Developer
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Final-year B.Tech CSE student at <strong className="text-cyan-300">VIT Chennai (CGPA 8.65)</strong> with <strong className="text-cyan-300">450+ LeetCode DSA</strong> problems solved. Specialized in architecting <strong className="text-purple-300">custom RAG pipelines from scratch</strong>, high-accuracy ML threat detection (<strong className="text-emerald-300">95%+ scikit-learn</strong>), and low-latency real-time WebSocket infrastructure.
            </p>

            {/* Interactive Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-mono text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                Explore 3D Projects
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="px-5 py-3 rounded-xl font-mono text-sm font-medium text-cyan-300 bg-slate-900/80 hover:bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 transition-all flex items-center gap-2 backdrop-blur-md shadow-md"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                `npx rishmeet` CLI Shell
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl font-mono text-sm font-medium text-purple-300 bg-purple-950/30 hover:bg-purple-900/50 border border-purple-500/30 hover:border-purple-400 transition-all flex items-center gap-2 backdrop-blur-md shadow-md"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                Download Resume PDF
              </button>
            </div>

            {/* Quick Tech Tag Chips */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Core Stack:</span>
              {['Python', 'C/C++', 'React', 'Node.js', 'FastAPI', 'Pinecone Vector DB', 'Custom RAG', 'scikit-learn', 'Docker'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-cyan-500/30 transition-all">
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column - Holographic Interactive Metrics Panel */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden border border-cyan-500/20 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold tracking-wider">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  RECRUITER SNAPSHOT HUD
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  VERIFIED CANDIDATE
                </span>
              </div>

              {/* Grid of Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-slate-100 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                      {m.value}
                    </div>
                    <div className="text-xs font-mono font-semibold text-slate-300 mt-1">{m.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{m.sub}</div>
                  </div>
                ))}
              </div>

              {/* Highlights Box */}
              <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-slate-950/60 border border-cyan-500/20 text-xs font-mono space-y-2">
                <div className="text-cyan-300 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Key Highlights for Recruiters
                </div>
                <ul className="text-slate-300 space-y-1.5 text-[11px]">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-400">•</span> Custom RAG Pipeline built from scratch without LangChain framework overhead.
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-purple-400">•</span> Scikit-Learn RandomForest classifier with 19 engineered flow features & 95%+ confidence.
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400">•</span> Socket.io WebSockets delivering ~100ms average message latency.
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

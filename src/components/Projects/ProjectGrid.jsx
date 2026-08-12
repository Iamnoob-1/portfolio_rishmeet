import React, { useState } from 'react';
import { Layers, ExternalLink, Play, Cpu, Shield, Database, MessageSquare, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import { GithubIcon } from '../Icons';

export default function ProjectGrid() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI / ML & Cyber Security', 'Generative AI & Vector Search', 'Full-Stack & Distributed WebSockets'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            PRODUCTION-GRADE ENGINEERING PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono tracking-tight">
            High-Impact Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Project Architecture</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Every project represents production-grade software: custom framework-less AI engines, real-time high-concurrency WebSockets, and ML anomaly classification.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                  filter === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-500/20 font-semibold'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-cyan-500/20 relative group"
            >
              <div>
                
                {/* Category & Year Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-semibold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{project.year}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-mono font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-300 mt-2 font-sans leading-relaxed">
                  {project.summary}
                </p>

                {/* Metrics Highlights Bar */}
                {project.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-cyan-300 font-bold text-sm">{m.val}</div>
                        <div className="text-[10px] text-slate-400 truncate">{m.key}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Detailed Resume Bullet Points */}
                <div className="space-y-2 mt-4 text-xs font-sans text-slate-300 border-t border-slate-800/80 pt-4">
                  {project.bulletPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold mt-0.5">•</span>
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-slate-800/60">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Direct Project Links */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800"
                    >
                      <GithubIcon className="w-4 h-4 text-cyan-400" />
                      GitHub Repo
                    </a>
                  )}
                </div>

                {/* Open Live Application Link */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-mono font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5 group/btn"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-slate-950 group-hover/btn:scale-110 transition-transform" />
                    Open Live Project
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Cpu, Code2, Brain, Server, Cloud, CheckCircle } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';

export default function SkillsMatrix() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-amber-400" />;
      default: return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            TECHNICAL DOMAIN MASTERY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono tracking-tight">
            Software Engineering & <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">AI / ML Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Rigorous hands-on expertise in algorithm design, vector database search, custom RAG architectures, and asynchronous microservices.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.name}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-cyan-500/20 hover:border-cyan-500/40 transition-all space-y-6"
            >
              
              {/* Category Title */}
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-mono font-bold text-slate-100">{cat.name}</h3>
                  <p className="text-xs font-mono text-slate-400">Validated Production & Project Competency</p>
                </div>
              </div>

              {/* Skills Progress List */}
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                        {skill.name}
                      </span>
                      <span className="text-slate-400 text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {skill.tag}
                      </span>
                    </div>

                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

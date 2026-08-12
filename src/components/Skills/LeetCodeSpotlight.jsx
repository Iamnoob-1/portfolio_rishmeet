import React from 'react';
import { Code, Flame, ExternalLink, Award, CheckCircle2, TrendingUp } from 'lucide-react';
import { dsaStats, personalInfo } from '../../data/portfolioData';

export default function LeetCodeSpotlight() {
  return (
    <section id="dsa" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900/90 to-cyan-950/30 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Metric & Pitch */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-mono">
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                DATA STRUCTURES & ALGORITHMS SPOTLIGHT
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono tracking-tight">
                <span className="text-cyan-400">450+ DSA Problems</span> Solved on LeetCode
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                Demonstrated algorithmic mastery across complex dynamic programming, graph traversal algorithms, tree transformations, and optimized time/space complexity solutions.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-cyan-400 hover:from-amber-300 hover:to-cyan-300 transition-all shadow-md shadow-amber-500/20 flex items-center gap-2"
                >
                  <Code className="w-4 h-4 text-slate-950" />
                  View LeetCode Profile
                  <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                </a>
              </div>
            </div>

            {/* Right Col: Topic Distribution Bars */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  ALGORITHMIC TOPIC BREAKDOWN
                </span>
                <span className="text-xs font-mono text-cyan-400 font-bold">
                  TOTAL SOLVED: 450+
                </span>
              </div>

              <div className="space-y-3.5">
                {dsaStats.topics.map((t) => (
                  <div key={t.name} className="space-y-1 font-mono text-xs">
                    <div className="flex justify-between items-center text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        {t.name}
                      </span>
                      <span className="text-cyan-300 font-bold">{t.count} Problems</span>
                    </div>

                    <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 via-cyan-400 to-blue-500 rounded-full transition-all duration-700"
                        style={{ width: `${t.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

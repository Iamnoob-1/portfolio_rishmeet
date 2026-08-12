import React from 'react';
import { ChevronUp, Terminal, Code, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenTerminal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 py-10 relative z-10 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-bold text-cyan-400">
                RS
              </div>
            </div>
            <div>
              <div className="text-slate-200 font-bold">{personalInfo.name}</div>
              <div className="text-[11px] text-slate-500">Software Development Engineer | VIT Chennai</div>
            </div>
          </div>

          {/* Status HUD Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            SYSTEM STATUS: ONLINE | 450+ LEETCODE SOLVED
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all flex items-center gap-1.5"
          >
            <ChevronUp className="w-4 h-4" />
            Top
          </button>

        </div>

        {/* Bottom Line */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Rishmeet Singh. Built with React, Three.js & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onOpenTerminal} className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5" />
              CLI Shell
            </button>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#dsa" className="hover:text-cyan-400 transition-colors">LeetCode</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

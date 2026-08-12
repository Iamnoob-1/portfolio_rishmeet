import React, { useState, useEffect } from 'react';
import { Code, Terminal, Sparkles, FileText, Menu, X, Cpu, Layers, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume, onOpenTerminal, activeTheme, setThemeMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Skills & RAG', href: '#skills', icon: Cpu },
    { name: 'LeetCode 450+', href: '#dsa', icon: Code },
    { name: 'Certifications', href: '#experience', icon: Award },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-cyan-950/20' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/50 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                <span className="font-mono font-bold text-cyan-400 text-lg group-hover:scale-110 transition-transform">RS</span>
              </div>
            </div>
            <div>
              <div className="font-mono font-bold text-slate-100 text-base flex items-center gap-2">
                {personalInfo.name}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="text-[11px] font-mono text-cyan-400/80">SDE & AI/ML Engineer</div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-cyan-500/15 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 transition-all flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons & Theme Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Buttons */}
            <div className="flex items-center bg-slate-900/80 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setThemeMode('cyan')}
                className={`px-2 py-1 rounded text-[10px] font-mono transition-all ${
                  activeTheme === 'cyan' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Cyber Cyan Theme"
              >
                CYAN
              </button>
              <button
                onClick={() => setThemeMode('emerald')}
                className={`px-2 py-1 rounded text-[10px] font-mono transition-all ${
                  activeTheme === 'emerald' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Matrix Emerald Theme"
              >
                EMERALD
              </button>
              <button
                onClick={() => setThemeMode('violet')}
                className={`px-2 py-1 rounded text-[10px] font-mono transition-all ${
                  activeTheme === 'violet' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Deep Violet Theme"
              >
                VIOLET
              </button>
            </div>

            {/* Terminal Launch CTA */}
            <button
              onClick={onOpenTerminal}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/50 hover:border-cyan-400 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Terminal className="w-3.5 h-3.5" />
              CLI Shell
            </button>

            {/* Resume View CTA */}
            <button
              onClick={onOpenResume}
              className="px-4 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume PDF
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg text-cyan-400 bg-slate-900 border border-cyan-500/20"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-cyan-400 bg-slate-900 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-cyan-500/20 px-4 pt-3 pb-6 mt-2 backdrop-blur-xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-mono text-slate-200 hover:text-cyan-300 hover:bg-slate-900 flex items-center gap-2"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2 rounded-lg text-sm font-mono font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View & Download Resumes
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

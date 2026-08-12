import React, { useState } from 'react';
import { Mail, Phone, Code, Sparkles, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function RecruiterFastTrack({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950/40">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Direct Pitch */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                RECRUITER FAST-TRACK PORTAL
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono tracking-tight">
                Let's Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Next-Gen Software</span> Together
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                I am actively seeking <strong className="text-cyan-300">Software Development Engineer (SDE)</strong> and <strong className="text-purple-300">AI / Risk Analytics</strong> roles for 2026/2027. Open to technical interviews, coding assessments, and architectural discussions.
              </p>

              {/* Direct Action Chips */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* Email Box */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">EMAIL ADDRESS</div>
                      <div className="font-bold text-slate-200 text-sm">{personalInfo.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard(personalInfo.email, 'email')}
                      className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 transition-all text-xs font-semibold"
                    >
                      Send Mail
                    </a>
                  </div>
                </div>

                {/* Phone Box */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-950 text-purple-400 border border-purple-500/30">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">DIRECT PHONE</div>
                      <div className="font-bold text-slate-200 text-sm">{personalInfo.phone}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-purple-400 border border-slate-800"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

              </div>
            </div>

            {/* Right Column: Social Links & Quick Action */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4 font-mono text-xs">
                <div className="text-cyan-400 font-bold text-sm border-b border-slate-800 pb-2">
                  VERIFIED ONLINE PROFILES
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all flex flex-col items-center gap-1.5 text-center"
                  >
                    <GithubIcon className="w-5 h-5 text-cyan-400" />
                    <span className="font-bold">GitHub</span>
                    <span className="text-[10px] text-slate-500">Repositories</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all flex flex-col items-center gap-1.5 text-center"
                  >
                    <LinkedinIcon className="w-5 h-5 text-blue-400" />
                    <span className="font-bold">LinkedIn</span>
                    <span className="text-[10px] text-slate-500">Connect</span>
                  </a>

                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all flex flex-col items-center gap-1.5 text-center"
                  >
                    <Code className="w-5 h-5 text-amber-400" />
                    <span className="font-bold">LeetCode</span>
                    <span className="text-[10px] text-amber-400">450+ Solved</span>
                  </a>
                </div>

                <button
                  onClick={onOpenResume}
                  className="w-full py-3 rounded-xl font-mono text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  View & Download Resumes (PDF / TXT)
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

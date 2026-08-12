import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, Building2, ShieldCheck } from 'lucide-react';
import { personalInfo, certifications } from '../data/portfolioData';

export default function ExperienceCertifications() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Card */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-7 border border-cyan-500/20 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-mono font-bold text-slate-100">Academic Education</h3>
                <p className="text-xs font-mono text-slate-400">Vellore Institute of Technology, Chennai</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-base font-bold text-cyan-300">
                  {personalInfo.degree}
                </span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30">
                  CGPA: {personalInfo.cgpa}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" />
                  VIT Chennai
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {personalInfo.gradYear}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans pt-2 border-t border-slate-900">
                Specialized in Core Computer Science fundamentals: Data Structures, Algorithms, Object-Oriented Programming (OOP), Operating Systems, DBMS, and Computer Networks.
              </p>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-7 border border-purple-500/20 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-mono font-bold text-slate-100">Industry Credentials</h3>
                <p className="text-xs font-mono text-slate-400">Verified Generative AI & Cloud Certifications</p>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-purple-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-purple-400" />
                      {cert.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {cert.date}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-cyan-400 font-semibold">{cert.issuer}</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

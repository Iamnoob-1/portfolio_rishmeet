import React, { useState } from 'react';
import CyberCoreCanvas from './components/Canvas3D/CyberCoreCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectGrid from './components/Projects/ProjectGrid';
import SkillsMatrix from './components/Skills/SkillsMatrix';
import LeetCodeSpotlight from './components/Skills/LeetCodeSpotlight';
import ExperienceCertifications from './components/ExperienceCertifications';
import RecruiterFastTrack from './components/RecruiterFastTrack';
import DeveloperTerminal from './components/Terminal/DeveloperTerminal';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [themeMode, setThemeMode] = useState('cyan');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* 3D Cyber Core Canvas Background */}
      <CyberCoreCanvas themeMode={themeMode} />

      {/* Cyber Grid Background overlay */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0 opacity-40" />

      {/* Foreground Content */}
      <div className="relative z-10">
        
        {/* Navigation Bar */}
        <Navbar
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
          activeTheme={themeMode}
          setThemeMode={setThemeMode}
        />

        {/* Main Content Sections */}
        <main>
          <HeroSection
            onOpenResume={() => setResumeOpen(true)}
            onOpenTerminal={() => setTerminalOpen(true)}
          />

          <ProjectGrid />

          <SkillsMatrix />

          <LeetCodeSpotlight />

          <ExperienceCertifications />

          <RecruiterFastTrack
            onOpenResume={() => setResumeOpen(true)}
          />
        </main>

        {/* Footer */}
        <Footer
          onOpenTerminal={() => setTerminalOpen(true)}
        />

      </div>

      {/* Modal Dialog Overlays */}
      <DeveloperTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

    </div>
  );
}

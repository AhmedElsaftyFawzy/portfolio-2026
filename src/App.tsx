/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JourneyTimeline } from './components/JourneyTimeline';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProjectModal } from './components/ProjectModal';
import { CertificateShowcase } from './components/CertificateShowcase';
import { CertificateModal } from './components/CertificateModal';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PERSONAL_INFO, CERTIFICATES } from './data/portfolioData';
import { Project, Certificate } from './types';

export default function App() {
  // Theme state: defaults to dark for the requested Cyber-Noir aesthetic
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return true; // Cyber-noir dark mode by default
    }
    return true;
  });

  // Modal inspection states
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  // Sync theme with <html> class and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleOpenPdf = (pdfPath: string, title: string) => {
    // Check if matching known certificate or create synthetic certificate item for viewer
    const existing = CERTIFICATES.find((c) => c.pdfPath === pdfPath);
    if (existing) {
      setActiveCertificate(existing);
    } else {
      setActiveCertificate({
        id: 'resume-doc',
        title,
        issuer: 'Curriculum Vitae',
        year: '2025',
        dateStr: 'Current · Cairo, Egypt',
        pdfPath,
        skills: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'TanStack Query', 'Tailwind CSS'],
        summary: PERSONAL_INFO.bio,
      });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070a12] text-slate-900 dark:text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300 relative">
      {/* Background Motion Graphics Particle Canvas */}
      <ParticleCanvas isDark={isDark} />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Bar adhering to Top Bar Contract */}
        <Navbar
          isDark={isDark}
          onToggleTheme={toggleTheme}
          onOpenPdf={handleOpenPdf}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero
            onOpenResume={() => handleOpenPdf(PERSONAL_INFO.resumePdf, 'Ahmed Elsafty Fawzy — Resume')}
            onExploreProjects={() => scrollToSection('projects')}
            onExploreCertificates={() => scrollToSection('credentials')}
          />

          <JourneyTimeline onOpenPdf={handleOpenPdf} />

          <ProjectShowcase onSelectProject={(project) => setActiveProject(project)} />

          <CertificateShowcase onSelectCertificate={(cert) => setActiveCertificate(cert)} />

          <SkillsMatrix />

          <ContactSection
            onOpenResume={() => handleOpenPdf(PERSONAL_INFO.resumePdf, 'Ahmed Elsafty Fawzy — Resume')}
          />
        </main>

        <Footer />
      </div>

      {/* Interactive Project Inspector Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      {/* Interactive Certificate & PDF Inspector Modal */}
      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Terminal, Sparkles, MapPin, ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
  onExploreCertificates: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onExploreProjects,
  onExploreCertificates,
}) => {
  const roles = [
    'Front-End Developer',
    'React & Next.js Specialist',
    'TypeScript Engineer',
    'Clinical Precision UI Builder',
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid: Left Typography, Right Interactive Cyber Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location & Status Line (No fake pulsing dots, clean unboxed text) */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-500" />
              <span>{PERSONAL_INFO.location}</span>
              <span aria-hidden="true">·</span>
              <span>Open to Remote & Hybrid Roles</span>
              <span aria-hidden="true">·</span>
              <span>Bachelor of Dentistry (2021)</span>
            </div>

            {/* Main Headline with dynamic role transition */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
                Architecting scalable web applications with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400">
                  clinical precision.
                </span>
              </h1>
              <div className="h-8 flex items-center">
                <span className="font-mono text-sm sm:text-base text-cyan-600 dark:text-cyan-400 font-semibold tracking-wide">
                  &gt; {roles[currentRoleIndex]}
                </span>
              </div>
            </div>

            {/* Lead Narrative Body */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Front-End Developer specializing in <strong className="font-semibold text-slate-900 dark:text-white">React.js</strong>,{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">Next.js</strong>, and{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">TypeScript</strong>.
              Leveraging a rigorous 5-year dental surgery foundation to deliver surgical attention to detail,
              state consistency, and resilient user interfaces.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 rounded-lg transition-all shadow-md hover:shadow-cyan-500/20 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>View Selected Works</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCertificates}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Verify Credentials</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Resume PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): Interactive Cyber Code / Diagnostic Preview Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-6 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl text-slate-200 overflow-hidden font-mono text-xs">
              {/* Subtle top ambient glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Mac-style titlebar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] text-slate-500">elsafty-engineer.tsx</span>
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              </div>

              {/* Code Snippet representing the precision crossover */}
              <div className="pt-4 space-y-2 leading-relaxed">
                <p className="text-slate-500">// Clinical Precision $\rightarrow$ Frontend Architecture</p>
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">name:</span> <span className="text-emerald-300">"Ahmed Elsafty Fawzy"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">discipline:</span> <span className="text-emerald-300">"Front-End Engineering"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">foundations:</span> [
                  <span className="text-amber-300">"Harvard CS50x"</span>,{' '}
                  <span className="text-amber-300">"CS50P"</span>,{' '}
                  <span className="text-amber-300">"Route Diploma"</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">surgicalPrecision:</span> <span className="text-cyan-400">true</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">coreStack:</span> [
                  <span className="text-cyan-300">"React"</span>,{' '}
                  <span className="text-cyan-300">"Next.js"</span>,{' '}
                  <span className="text-cyan-300">"TypeScript"</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">diagnosticMethod:</span> () =&gt; &#123;
                </p>
                <p className="pl-8 text-emerald-400">
                  return "Zero regression, optimal renders, patient UI empathy";
                </p>
                <p className="pl-4">&#125;</p>
                <p>&#125;;</p>
              </div>

              {/* Interactive badge bar at bottom */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Sparkles className="w-3.5 h-3.5" /> Verified by Route & Harvard
                </span>
                <span className="text-slate-500">Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI / Proof Strip below Hero Split */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              4+
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Verified Credentials (Harvard, Route, Udemy)
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono tabular-nums">
              &lt;100ms
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Optimistic UI State & Fast Hydration
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              5+ Years
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Clinical Dental Surgery Discipline
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Type-Safe React & Next.js Architecture
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

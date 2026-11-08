import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#070a12] py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-base font-bold text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
              <span className="font-mono text-cyan-600 dark:text-cyan-400 text-sm font-semibold">&lt;AF/&gt;</span>
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Front-End Developer · React, Next.js & TypeScript · Cairo, Egypt
            </p>
          </div>

          {/* Quiet links & Back to Top */}
          <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
            <a
              href="#journey"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              Journey
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#credentials"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              Credentials
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors ml-2"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 text-center text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} Ahmed Elsafty Fawzy. Built with React 19, Motion & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

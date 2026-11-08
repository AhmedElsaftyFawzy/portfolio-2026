import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, X, CheckCircle, Layers, Cpu, Globe } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [showLiveEmbed, setShowLiveEmbed] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-[#0b101d] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 my-8 max-h-[90vh] overflow-y-auto text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider">
              Project Inspector
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Preview / External Link Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
            <Globe className="w-4 h-4 text-cyan-500" />
            <span className="truncate max-w-xs">{project.liveUrl}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowLiveEmbed(!showLiveEmbed)}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700/80 cursor-pointer transition-colors"
            >
              {showLiveEmbed ? 'Hide Embedded View' : 'Preview Live Web Frame'}
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 rounded-md transition-all shadow-sm"
            >
              <span>Visit Deployment</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Optional Live Iframe Embed Container */}
        {showLiveEmbed && (
          <div className="relative rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-inner bg-slate-100 dark:bg-slate-950">
            <div className="h-8 bg-slate-200 dark:bg-slate-900 flex items-center px-4 gap-2 text-xs text-slate-500 font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 truncate">{project.liveUrl}</span>
            </div>
            <iframe
              src={project.liveUrl}
              title={`${project.title} Live Preview`}
              className="w-full h-96 border-none"
              sandbox="allow-scripts allow-same-origin allow-forms"
              loading="lazy"
            />
          </div>
        )}

        {/* Deep Dive Description */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Overview & Engineering Objectives
          </h4>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Key Features Checklist */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-500" />
            <span>Key Implemented Capabilities</span>
          </h4>
          <div className="space-y-2.5">
            {project.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture & Decisions */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-purple-500" />
            <span>Architecture & State Management</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.architectureNotes}
          </p>
        </div>

        {/* Tech Stack Breakdown */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
            Metric: {project.metric}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ExternalLink, Maximize2, Sparkles, Code2, Globe } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'nextjs' | 'react'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase mb-2">
              Production Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Selected Works
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Real-world web applications built with scalable React, Next.js, and TypeScript architectures.
              Click any project to launch the deep-dive Inspector.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-cyan-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('nextjs')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeFilter === 'nextjs'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-cyan-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Next.js & Fullstack
            </button>
            <button
              onClick={() => setActiveFilter('react')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeFilter === 'react'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-cyan-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              React & State
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div
          className={`grid grid-cols-1 ${
            filteredProjects.length === 1
              ? 'max-w-xl mx-auto'
              : filteredProjects.length === 2
              ? 'md:grid-cols-2 max-w-5xl mx-auto'
              : 'md:grid-cols-2 lg:grid-cols-3'
          } gap-6 lg:gap-8`}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
            >
              {/* Card Upper Info */}
              <div className="space-y-4">
                {/* Clean unboxed metadata with typographic separators (anti-slop) */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{project.metric}</span>
                    <span aria-hidden="true">·</span>
                    <span>Production</span>
                  </div>
                  <Globe className="w-3.5 h-3.5 opacity-60" />
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack items (clean unboxed text with middot separators) */}
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono pt-1">
                  <span>Stack: </span>
                  {project.techStack.slice(0, 4).map((tech, i, arr) => (
                    <React.Fragment key={tech}>
                      <span className="text-slate-700 dark:text-slate-300">{tech}</span>
                      {i < arr.length - 1 && <span className="mx-1 text-slate-400">·</span>}
                    </React.Fragment>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-cyan-600 dark:text-cyan-400 ml-1">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Architecture</span>
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors"
                >
                  <span>Live App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

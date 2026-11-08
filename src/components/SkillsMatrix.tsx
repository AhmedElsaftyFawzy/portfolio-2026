import React, { useState } from 'react';
import { Code2, Layout, Database, Wrench, Check } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'frameworks', label: 'Frameworks & Libs' },
    { id: 'languages', label: 'Core Languages' },
    { id: 'styling', label: 'UI & Styling' },
    { id: 'tools', label: 'Tooling & Workflow' },
  ];

  const filteredSkills = SKILLS.filter((s) => {
    if (selectedCategory === 'all') return true;
    return s.category === selectedCategory;
  });

  return (
    <section id="skills" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase mb-2">
              Technical Stack & Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Engineering Skill Matrix
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Production tools, libraries, and design patterns utilized across scalable client applications.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-cyan-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                skill.highlight
                  ? 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 shadow-sm'
                  : 'bg-slate-50/50 dark:bg-slate-950/40 border-slate-200/60 dark:border-slate-800/60'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                  {skill.name}
                </span>
                {skill.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-1.5" />
                )}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="capitalize">{skill.category}</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

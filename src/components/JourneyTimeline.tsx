import React, { useState } from 'react';
import { Stethoscope, Terminal, Database, Laptop, Award, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

interface JourneyTimelineProps {
  onOpenPdf: (path: string, title: string) => void;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ onOpenPdf }) => {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(JOURNEY_MILESTONES[0].id);
  const [showDeepDiveModal, setShowDeepDiveModal] = useState<boolean>(false);

  const selectedMilestone =
    JOURNEY_MILESTONES.find((m) => m.id === selectedMilestoneId) || JOURNEY_MILESTONES[0];

  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case 'dentistry':
        return <Stethoscope className="w-4 h-4 text-rose-500" />;
      case 'cs-foundation':
        return <Terminal className="w-4 h-4 text-cyan-500" />;
      case 'frontend-specialization':
        return <Award className="w-4 h-4 text-emerald-500" />;
      default:
        return <Laptop className="w-4 h-4 text-purple-500" />;
    }
  };

  const precisionComparisons = [
    {
      dental: 'Microscopic Surgical Margin (Sub-Millimeter)',
      software: 'Sub-Pixel Layout Math & Responsive Geometry',
      description: 'In dentistry, a 0.2mm crown discrepancy causes failure; in UI engineering, subtle alignment errors break visual harmony.',
    },
    {
      dental: 'Differential Diagnosis & Symptom Isolation',
      software: 'Algorithmic Root-Cause Debugging & Performance Profiling',
      description: 'Treating causes instead of masking symptoms translates to eliminating React re-render bottlenecks and state race conditions.',
    },
    {
      dental: 'Aseptic Surgical Protocol & Deterministic Steps',
      software: 'Pure Component Architecture & Predictable State Machines',
      description: 'Rigid adherence to verified procedures mirrors functional programming principles and immutable data flow.',
    },
    {
      dental: 'Patient Empathy & Stress Reduction',
      software: 'Accessible, Intuitive & Frictionless User Experience',
      description: 'Deep awareness of human anxiety in the clinic sharpens empathy for cognitive load and accessibility on the web.',
    },
  ];

  return (
    <section id="journey" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase mb-2">
              The Journey & Method
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              From Dentistry to Software Engineering
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              How clinical rigor, diagnostic discipline, and surgical precision forged a relentless approach to building modern web applications.
            </p>
          </div>

          <button
            onClick={() => setShowDeepDiveModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 border border-cyan-200 dark:border-cyan-800/50 rounded-lg transition-colors cursor-pointer self-start md:self-auto whitespace-nowrap shrink-0"
          >
            <Activity className="w-3.5 h-3.5 text-cyan-500" />
            <span>Explore Clinical-to-Code Matrix</span>
          </button>
        </div>

        {/* Timeline Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Milestone Navigator / Step Track (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {JOURNEY_MILESTONES.map((milestone, index) => {
              const isSelected = milestone.id === selectedMilestoneId;
              return (
                <button
                  key={milestone.id}
                  onClick={() => setSelectedMilestoneId(milestone.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-slate-900 text-white dark:bg-slate-800/90 dark:border-cyan-500/50 shadow-md'
                      : 'bg-white dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 mt-0.5 ${
                      isSelected ? 'bg-slate-800 dark:bg-slate-700' : 'bg-slate-100 dark:bg-slate-800'
                    }`}
                  >
                    {getMilestoneIcon(milestone.type)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-xs font-mono font-medium ${
                          isSelected ? 'text-cyan-300' : 'text-cyan-600 dark:text-cyan-400'
                        }`}
                      >
                        {milestone.year}
                      </span>
                      <span className="text-[11px] opacity-70 truncate">{milestone.institution}</span>
                    </div>
                    <div className="text-sm font-semibold mt-0.5 truncate">{milestone.title}</div>
                    <div className="text-xs opacity-80 truncate">{milestone.subtitle}</div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'rotate-90 text-cyan-400' : 'opacity-40'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Milestone Detail Inspector Box (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                  {selectedMilestone.year} · {selectedMilestone.institution}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {selectedMilestone.title}
                </h3>
              </div>
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                {getMilestoneIcon(selectedMilestone.type)}
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedMilestone.summary}
            </p>

            {/* Core Crossover Skill Highlight */}
            <div className="mt-6 p-4 rounded-xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20">
              <div className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 uppercase tracking-wide">
                Core Transferred Competency
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-1">
                {selectedMilestone.crossoverSkill}
              </div>
            </div>

            {/* Granular Execution Takeaways */}
            <div className="mt-6 space-y-2.5">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Key Technical & Methodological Takeaways
              </div>
              {selectedMilestone.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Quick action if related to certificates */}
            {selectedMilestone.id === 'dentistry' && (
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                Graduated with clinical honors from Tanta University Faculty of Dentistry (2021).
              </div>
            )}
            {selectedMilestone.id === 'cs50-foundation' && (
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <button
                  onClick={() => onOpenPdf('/assets/data/CS50x_1b34f457.pdf', 'Harvard CS50x Certificate')}
                  className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                >
                  View CS50x Certificate &rarr;
                </button>
                <span className="text-slate-400">·</span>
                <button
                  onClick={() => onOpenPdf('/assets/data/CS50P_9812909a.pdf', 'Harvard CS50P Certificate')}
                  className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                >
                  View CS50P Certificate &rarr;
                </button>
              </div>
            )}
            {selectedMilestone.id === 'route-specialization' && (
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() =>
                    onOpenPdf('/assets/data/Ahmed_Elsafty_Fawzy_2_0bdbc17d.pdf', 'Route IT Frontend Diploma')
                  }
                  className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                >
                  View Route IT Diploma &rarr;
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Clinical-to-Code Matrix Modal */}
      {showDeepDiveModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowDeepDiveModal(false)}
        >
          <div
            className="w-full max-w-2xl bg-white dark:bg-[#0c121e] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    The Clinical-to-Code Matrix
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Direct mapping of surgical disciplines into software engineering
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowDeepDiveModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {precisionComparisons.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-2"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold">
                    <div className="text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.dental}</span>
                    </div>
                    <div className="text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                      <Laptop className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.software}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowDeepDiveModal(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-cyan-500 dark:text-slate-950 rounded-lg cursor-pointer"
              >
                Close Matrix
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

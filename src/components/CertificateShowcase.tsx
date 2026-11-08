import React from 'react';
import { ShieldCheck, ExternalLink, FileText, CheckCircle2, Award } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';
import { Certificate } from '../types';

interface CertificateShowcaseProps {
  onSelectCertificate: (cert: Certificate) => void;
}

export const CertificateShowcase: React.FC<CertificateShowcaseProps> = ({
  onSelectCertificate,
}) => {
  return (
    <section id="credentials" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase mb-2">
              Verified Social Proof
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Certifications & Diplomas
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Verified academic and technical milestones from Harvard University, Route IT Training Center, and Udemy.
              Inspect official digital verification links or view original credential PDFs in-app.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 px-3.5 py-1.5 rounded-xl self-start md:self-auto">
            <ShieldCheck className="w-4 h-4" />
            <span>All 4 Credentials Verified</span>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col justify-between bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 rounded-2xl p-6 sm:p-7 shadow-sm transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Issuer & Date strip */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">{cert.issuer}</span>
                    <span aria-hidden="true">·</span>
                    <span>{cert.year}</span>
                  </div>
                  <Award className="w-4 h-4 text-emerald-500/80" />
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {cert.dateStr}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.summary}
                </p>

                {/* Validated Skills */}
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono pt-1">
                  <span>Competencies: </span>
                  {cert.skills.slice(0, 4).map((skill, i, arr) => (
                    <React.Fragment key={skill}>
                      <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                      {i < arr.length - 1 && <span className="mx-1 text-slate-400">·</span>}
                    </React.Fragment>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="text-emerald-600 dark:text-emerald-400 ml-1">
                      +{cert.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectCertificate(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect PDF Document</span>
                </button>

                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors"
                  >
                    <span>Verify Online</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 font-mono">Official PDF Included</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

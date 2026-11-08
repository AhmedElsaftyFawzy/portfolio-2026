import React, { useEffect } from 'react';
import { ExternalLink, Download, X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Certificate } from '../types';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#0b101d] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4 sm:p-6 space-y-4 my-6 max-h-[92vh] flex flex-col text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                Verified Credential · {certificate.issuer}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                {certificate.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Actions & Verification Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="text-slate-600 dark:text-slate-300 font-mono">
            <span>{certificate.dateStr}</span>
            {certificate.credentialId && (
              <>
                <span className="mx-2">·</span>
                <span className="text-slate-500 truncate max-w-[200px] inline-block align-bottom">
                  ID: {certificate.credentialId}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors"
              >
                <span>Verify Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={certificate.pdfPath}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer Frame */}
        <div className="flex-1 min-h-[350px] sm:min-h-[480px] w-full rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-950">
          <iframe
            src={`${certificate.pdfPath}#toolbar=0&navpanes=0`}
            title={certificate.title}
            className="w-full h-full border-none"
          />
        </div>

        {/* Skills Covered */}
        <div className="pt-2">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">
            Core Competencies Validated
          </div>
          <div className="flex flex-wrap gap-1.5 text-xs font-mono">
            {certificate.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

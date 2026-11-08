export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'nextjs' | 'react' | 'fullstack';
  description: string;
  fullDescription: string;
  features: string[];
  architectureNotes: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  metric: string;
  accentColor: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  dateStr: string;
  credentialId?: string;
  verifyUrl?: string;
  pdfPath: string;
  skills: string[];
  summary: string;
}

export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  institution: string;
  type: 'dentistry' | 'cs-foundation' | 'frontend-specialization' | 'production';
  summary: string;
  crossoverSkill: string;
  details: string[];
}

export interface SkillItem {
  name: string;
  category: 'frameworks' | 'languages' | 'styling' | 'tools';
  level: string;
  highlight?: boolean;
}

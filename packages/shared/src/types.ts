export interface VacancyCriterion {
  type: 'EXPERIENCE' | 'TECHNICAL_SKILLS' | 'CERTIFICATIONS' | 'EDUCATION' | 'LANGUAGES' | 'TOOLS' | 'COMPETENCIES';
  label: string;
  weight: number;
  required: boolean;
  minValue?: string;
}

export interface Vacancy {
  id: string;
  title: string;
  minScoreThreshold: number;
  minCandidatesDisplay: number;
  criteria: VacancyCriterion[];
}

export interface Candidate {
  id: string;
  name: string;
  yearsExperience?: number;
  skills?: string[];
  certifications?: string[];
  education?: string;
  languages?: string[];
  tools?: string[];
  competencies?: string[];
}

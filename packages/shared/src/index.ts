export type CandidateStatus = 'NEW' | 'IN_REVIEW' | 'SHORTLISTED' | 'REJECTED' | 'HIRED' | 'ARCHIVED';

export type CriterionType =
  | 'EXPERIENCE'
  | 'TECHNICAL_SKILLS'
  | 'CERTIFICATIONS'
  | 'EDUCATION'
  | 'LANGUAGES'
  | 'TOOLS'
  | 'COMPETENCIES';

export interface VacancyCriterion {
  type: CriterionType;
  label: string;
  required: boolean;
  weight: number;
  minValue?: string;
}

export interface Vacancy {
  id: string;
  title: string;
  summary?: string;
  location?: string;
  minScoreThreshold: number;
  minCandidatesDisplay: number;
  criteria: VacancyCriterion[];
}

export interface CandidateEvaluation {
  candidateId: string;
  vacancyId: string;
  overallScore: number;
  status: CandidateStatus;
  reasons: Array<{
    criterionLabel: string;
    explanation: string;
    matched: boolean;
    score: number;
  }>;
}

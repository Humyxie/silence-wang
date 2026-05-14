import type { PersonalityId } from './personality';

export interface PersonalityScore {
  id: PersonalityId;
  score: number;
}

export interface SubmitResultRequest {
  primaryPersonality: PersonalityId;
  secondaryPersonality: PersonalityId | null;
  primaryScore: number;
  allScores: PersonalityScore[];
  dimensionScores?: Record<string, number>;
  version?: string;
}

export interface SubmitResultResponse {
  success: boolean;
  resultId: string;
  shareUrl: string;
}

export interface GetResultResponse {
  success: boolean;
  data?: {
    primaryPersonality: PersonalityId;
    secondaryPersonality: PersonalityId | null;
    primaryScore: number;
    allScores: PersonalityScore[];
    createdAt: string;
  };
  error?: string;
}
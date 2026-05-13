export interface MBTIScore {
  E: number;
  S: number;
  F: number;
  J: number;
}

export interface Song {
  id: number;
  name: string;
  album: string;
  year: number;
  description: string;
  lyrics_key: string;
  distance?: number;
}

export interface QuizResult {
  mbti_type: string;
  scores: MBTIScore;
  matched_song: Song;
  short_id: string;
  full_id: string;
}

export interface UserAnswers {
  e: number[];
  s: number[];
  f: number[];
  j: number[];
}

export interface QuizQuestion {
  dimension: 'E' | 'S' | 'F' | 'J';
  index: number;
  text: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  value: number;
}

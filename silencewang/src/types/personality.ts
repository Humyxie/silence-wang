export const PERSONALITY_IDS = {
  LITTLE_STAR: 'little_star',
  GRAVITY_PERSON: 'gravity_person',
  EXCLUSIVE_TASTE: 'exclusive_taste',
  ETERNAL_LOVER: 'eternal_lover',
  RING_ENGRAVER: 'ring_engraver',
  ART_REBEL: 'art_rebel',
  SUDDEN_SUMMER: 'sudden_summer',
  STAR_HIDER: 'star_hider',
  ENTERTAINER: 'entertainer',
  LOVE_ANIMAL: 'love_animal',
  DANCE_BEFORE_GOODBYE: 'dance_before_goodbye',
  DEFIANT: 'defiant',
  MARS_RESEARCHER: 'mars_researcher',
  ISLAND_POET: 'island_poet',
  SUNNY_COLLECTOR: 'sunny_collector',
  LUBRICANT: 'lubricant',
  THINK_OF_US: 'think_of_us'
} as const;

export type PersonalityId = typeof PERSONALITY_IDS[keyof typeof PERSONALITY_IDS];

export interface Song {
  name: string;
  artist: string;
  link: string;
  isOriginal: boolean;
  lyric?: string;
}

export interface Personality {
  id: PersonalityId;
  name: string;
  tagline: string;
  description: string;
  traits: string[];
  song: Song;
  shareMessage: string;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}
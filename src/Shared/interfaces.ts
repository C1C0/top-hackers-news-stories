/**
 * Defines fetched story
 */
export interface Story {
  by: string;
  id: number;
  score: number;
  time: number;
  title: string;
  text?: string;
  url: string;
  authorKarma: number;
}

/**
 * Defines fetched user
 */
export interface User {
  id: string;
  created: number;
  karma: number;
  about?: string;
  submitted: number[];
}

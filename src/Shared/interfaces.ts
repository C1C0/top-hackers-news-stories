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

export interface User {
  id: string;
  created: number;
  karma: number;
  about?: string;
  submitted: number[];
}

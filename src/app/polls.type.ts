export type Poll = {
  question: string;
  description?: string;
  answers: Answer[];
}

export type Answer = {
  text: string;
  voted: number;
  color: string;
}


interface PuzzleCell {
  value: string;
  fixed: boolean;
}

export interface PuzzleConfig {
  id: number;
  name: string;
  grid: PuzzleCell[][];
  rowOperators: string[][];
  colOperators: string[][];
  rowTargets: number[];
  colTargets: number[];
  answers: number[][];
  difficulty: number;
}
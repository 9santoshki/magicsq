
import { PuzzleConfig } from './puzzleType';

export const puzzleConfigs: PuzzleConfig[] = [
  // Puzzle 1 (Original)
  {
    id: 1,
    name: "Puzzle 1: Beginner",
    grid: [
      [
        { value: '9', fixed: true },
        { value: '3', fixed: true },
        { value: '8', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '4', fixed: true },
        { value: '2', fixed: true },
        { value: '3', fixed: true }
      ],
      [
        { value: '1', fixed: true },
        { value: '', fixed: false },
        { value: '9', fixed: true },
        { value: '', fixed: false },
        { value: '7', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '4', fixed: true },
        { value: '', fixed: false },
        { value: '1', fixed: true },
        { value: '5', fixed: true }
      ],
      [
        { value: '4', fixed: true },
        { value: '2', fixed: true },
        { value: '', fixed: false },
        { value: '5', fixed: true },
        { value: '', fixed: false }
      ]
    ],
    rowOperators: [
      ['/', '*', '+', '-'],
      ['+', '-', '/', '*'],
      ['-', '+', '/', '*'],
      ['/', '+', '-', '*'],
      ['+', '-', '*', '/']
    ],
    colOperators: [
      ['*', '-', '/', '*', '/'],
      ['+', '*', '+', '-', '+'],
      ['-', '+', '*', '/', '-'],
      ['/', '/', '-', '+', '*']
    ],
    rowTargets: [25, 8, 16, 0, -24],
    colTargets: [44, -49, 23, 16, 4],
    answers: [
      [9, 3, 8, 7, 6],
      [5, 9, 4, 2, 3],
      [1, 6, 9, 3, 7],
      [8, 4, 3, 1, 5],
      [4, 2, 6, 5, 1]
    ],
    difficulty: 2
  },
  
  // Puzzle 2 (More challenging)
  {
    id: 2,
    name: "Puzzle 2: Intermediate",
    grid: [
      [
        { value: '', fixed: false },
        { value: '7', fixed: true },
        { value: '', fixed: false },
        { value: '5', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '8', fixed: true },
        { value: '', fixed: false },
        { value: '3', fixed: true },
        { value: '', fixed: false },
        { value: '9', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '6', fixed: true },
        { value: '', fixed: false },
        { value: '4', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '2', fixed: true },
        { value: '', fixed: false },
        { value: '7', fixed: true },
        { value: '', fixed: false },
        { value: '3', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '1', fixed: true },
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '', fixed: false }
      ]
    ],
    rowOperators: [
      ['*', '/', '+', '-'],
      ['-', '*', '/', '+'],
      ['+', '-', '*', '/'],
      ['/', '+', '-', '*'],
      ['-', '*', '/', '+']
    ],
    colOperators: [
      ['/', '+', '-', '*', '/'],
      ['*', '-', '/', '+', '-'],
      ['+', '/', '*', '-', '+'],
      ['-', '*', '+', '/', '*']
    ],
    rowTargets: [30, 5, 12, 4, 20],
    colTargets: [16, 42, 6, 20, 15],
    answers: [
      [6, 7, 2, 5, 1],
      [8, 4, 3, 9, 9],
      [5, 6, 3, 4, 8],
      [2, 9, 7, 5, 3],
      [3, 1, 4, 8, 6]
    ],
    difficulty: 4
  },
  
  // Puzzle 3 (Expert level)
  {
    id: 3,
    name: "Puzzle 3: Expert",
    grid: [
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '9', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ],
      [
        { value: '7', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '3', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '5', fixed: true },
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '4', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '1', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '2', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ]
    ],
    rowOperators: [
      ['/', '*', '-', '+'],
      ['-', '/', '+', '*'],
      ['+', '*', '-', '/'],
      ['*', '-', '/', '+'],
      ['/', '+', '*', '-']
    ],
    colOperators: [
      ['*', '-', '/', '+', '*'],
      ['/', '+', '*', '-', '/'],
      ['-', '/', '+', '*', '-'],
      ['+', '*', '-', '/', '+']
    ],
    rowTargets: [18, 10, 25, 5, 15],
    colTargets: [28, 12, 35, 8, 20],
    answers: [
      [6, 2, 9, 3, 1],
      [7, 4, 5, 2, 3],
      [8, 5, 3, 8, 9],
      [4, 6, 7, 1, 1],
      [5, 3, 2, 4, 6]
    ],
    difficulty: 7
  }
];
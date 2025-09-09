import { PuzzleConfig } from './puzzleType';

export const puzzleConfigs: PuzzleConfig[] = [
  // Puzzle 1: Easy
  {
    id: 1,
    name: "Puzzle 1: Easy",
    grid: [
      [
        { value: '7', fixed: true },
        { value: '1', fixed: true },
        { value: '', fixed: false },
        { value: '5', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '2', fixed: true },
        { value: '', fixed: false },
        { value: '4', fixed: true }
      ],
      [
        { value: '1', fixed: true },
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '4', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '4', fixed: true },
        { value: '', fixed: false },
        { value: '2', fixed: true },
        { value: '5', fixed: true }
      ],
      [
        { value: '4', fixed: true },
        { value: '', fixed: false },
        { value: '6', fixed: true },
        { value: '', fixed: false },
        { value: '3', fixed: true }
      ]
    ],
    rowOperators: [
      ['/', '-', '+', '*'],
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
    rowTargets: [43, 5, 9, -5, -12],
    colTargets: [34, -45, 20, 12, -6],
    answers: [
      [7, 1, 4, 5, 8],
      [5, 8, 2, 1, 4],
      [1, 6, 8, 4, 7],
      [8, 4, 3, 2, 5],
      [4, 2, 6, 9, 3]
    ],
    difficulty: 2
  },

  // Puzzle 2: Easy
  {
    id: 2,
    name: "Puzzle 2: Easy",
    grid: [
      [
        { value: '5', fixed: true },
        { value: '', fixed: false },
        { value: '2', fixed: true },
        { value: '', fixed: false },
        { value: '1', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '3', fixed: true },
        { value: '', fixed: false },
        { value: '4', fixed: true },
        { value: '' }
      ],
      [
        { value: '1', fixed: true },
        { value: '', fixed: false },
        { value: '5', fixed: true },
        { value: '', fixed: false },
        { value: '3', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '1', fixed: true },
        { value: '', fixed: false },
        { value: '2', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '3', fixed: true },
        { value: '', fixed: false },
        { value: '1', fixed: true },
        { value: '', fixed: false },
        { value: '5', fixed: true }
      ]
    ],
    rowOperators: [
      ['*', '+', '-', '/'],
      ['+', '*', '/', '-'],
      ['-', '/', '+', '*'],
      ['/', '-', '*', '+'],
      ['+', '/', '-', '*']
    ],
    colOperators: [
      ['/', '*', '+', '-', '/'],
      ['+', '-', '/', '*', '+'],
      ['*', '+', '-', '/', '*'],
      ['-', '/', '*', '+', '-']
    ],
    rowTargets: [14, 18, 12, 8, 16],
    colTargets: [22, 10, 24, 14, 18],
    answers: [
      [5, 4, 2, 3, 1],
      [2, 3, 1, 4, 5],
      [1, 2, 5, 4, 3],
      [4, 1, 3, 2, 5],
      [3, 2, 1, 4, 5]
    ],
    difficulty: 2
  },

  // Puzzle 3: Easy-Medium
  {
    id: 3,
    name: "Puzzle 3: Easy-Medium",
    grid: [
      [
        { value: '', fixed: false },
        { value: '6', fixed: true },
        { value: '', fixed: false },
        { value: '2', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '3', fixed: true },
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '', fixed: false },
        { value: '1', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '4', fixed: true },
        { value: '', fixed: false },
        { value: '7', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '7', fixed: true },
        { value: '', fixed: false },
        { value: '3', fixed: true },
        { value: '', fixed: false },
        { value: '9', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '2', fixed: true },
        { value: '', fixed: false },
        { value: '5', fixed: true },
        { value: '', fixed: false }
      ]
    ],
    rowOperators: [
      ['/', '*', '+', '-'],
      ['-', '/', '*', '+'],
      ['+', '-', '/', '*'],
      ['*', '+', '-', '/'],
      ['/', '*', '+', '-']
    ],
    colOperators: [
      ['*', '+', '/', '-', '*'],
      ['-', '/', '+', '*', '-'],
      ['+', '*', '-', '/', '+'],
      ['/', '-', '*', '+', '/']
    ],
    rowTargets: [20, 15, 25, 18, 12],
    colTargets: [35, 28, 40, 22, 30],
    answers: [
      [4, 6, 5, 2, 8],
      [3, 9, 8, 6, 1],
      [5, 4, 2, 7, 3],
      [7, 1, 3, 4, 9],
      [6, 2, 7, 5, 4]
    ],
    difficulty: 3
  },

  // Puzzle 4: Medium
  {
    id: 4,
    name: "Puzzle 4: Medium",
    grid: [
      [
        { value: '8', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '3', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '5', fixed: true },
        { value: '2', fixed: true },
        { value: '', fixed: false },
        { value: '7', fixed: true }
      ],
      [
        { value: '4', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '9', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '1', fixed: true },
        { value: '6', fixed: true },
        { value: '', fixed: false },
        { value: '3', fixed: true }
      ],
      [
        { value: '2', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '4', fixed: true },
        { value: '', fixed: false }
      ]
    ],
    rowOperators: [
      ['/', '+', '*', '-'],
      ['*', '-', '/', '+'],
      ['+', '/', '-', '*'],
      ['-', '*', '+', '/'],
      ['/', '-', '+', '*']
    ],
    colOperators: [
      ['+', '/', '*', '-', '+'],
      ['*', '+', '-', '/', '*'],
      ['/', '*', '+', '-', '/'],
      ['-', '+', '/', '*', '-']
    ],
    rowTargets: [6, 32, 8, 14, 10],
    colTargets: [24, 18, 36, 12, 28],
    answers: [
      [8, 2, 7, 3, 5],
      [6, 5, 2, 8, 7],
      [4, 3, 1, 9, 2],
      [9, 1, 6, 5, 3],
      [2, 7, 8, 4, 6]
    ],
    difficulty: 2
  },

  // Puzzle 5: Medium
  {
    id: 5,
    name: "Puzzle 5: Medium",
    grid: [
      [
        { value: '', fixed: false },
        { value: '9', fixed: true },
        { value: '1', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ],
      [
        { value: '6', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '4', fixed: true },
        { value: '2', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '3', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '8', fixed: true }
      ],
      [
        { value: '5', fixed: true },
        { value: '', fixed: false },
        { value: '7', fixed: true },
        { value: '1', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '4', fixed: true },
        { value: '8', fixed: true },
        { value: '3', fixed: true }
      ]
    ],
    rowOperators: [
      ['-', '/', '*', '+'],
      ['*', '+', '/', '-'],
      ['/', '-', '+', '*'],
      ['+', '/', '-', '*'],
      ['*', '-', '/', '+']
    ],
    colOperators: [
      ['/', '*', '+', '-', '/'],
      ['+', '/', '-', '*', '+'],
      ['*', '+', '/', '-', '*'],
      ['-', '/', '*', '+', '-']
    ],
    rowTargets: [16, 28, 20, 12, 24],
    colTargets: [30, 15, 42, 18, 36],
    answers: [
      [7, 9, 1, 5, 4],
      [6, 8, 3, 4, 2],
      [9, 3, 5, 7, 8],
      [5, 2, 7, 1, 6],
      [1, 6, 4, 8, 3]
    ],
    difficulty: 3
  },

  // Puzzle 6: Medium-Hard
  {
    id: 6,
    name: "Puzzle 6: Medium-Hard",
    grid: [
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '7', fixed: true },
        { value: '2', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '9', fixed: true },
        { value: '4', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '1', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '3', fixed: true },
        { value: '8', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '2', fixed: true },
        { value: '7', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '5', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '9', fixed: true },
        { value: '1', fixed: true },
        { value: '', fixed: false }
      ]
    ],
    rowOperators: [
      ['*', '/', '+', '-'],
      ['-', '*', '/', '+'],
      ['+', '/', '-', '*'],
      ['/', '+', '*', '-'],
      ['*', '-', '/', '+']
    ],
    colOperators: [
      ['/', '+', '*', '-', '/'],
      ['*', '-', '/', '+', '*'],
      ['+', '/', '-', '*', '+'],
      ['-', '*', '+', '/', '-']
    ],
    rowTargets: [22, 5, 18, 8, 26],
    colTargets: [14, 32, 25, 10, 20],
    answers: [
      [8, 3, 7, 2, 6],
      [9, 4, 5, 6, 1],
      [1, 9, 3, 8, 4],
      [2, 7, 6, 3, 5],
      [7, 5, 9, 1, 8]
    ],
    difficulty: 2
  },

  // Puzzle 7: Medium-Hard
  {
    id: 7,
    name: "Puzzle 7: Medium-Hard",
    grid: [
      [
        { value: '3', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '8', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '6', fixed: true },
        { value: '9', fixed: true },
        { value: '2', fixed: true },
        { value: '' }
      ],
      [
        { value: '7', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '4', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '1', fixed: true },
        { value: '5', fixed: true },
        { value: '8', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '9', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '2', fixed: true }
      ]
    ],
    rowOperators: [
      ['/', '*', '+', '-'],
      ['+', '-', '/', '*'],
      ['*', '/', '-', '+'],
      ['-', '+', '*', '/'],
      ['/', '-', '+', '*']
    ],
    colOperators: [
      ['+', '*', '/', '-', '+'],
      ['/', '+', '*', '-', '/'],
      ['*', '/', '+', '-', '*'],
      ['-', '*', '/', '+', '-']
    ],
    rowTargets: [10, 24, 16, 6, 18],
    colTargets: [28, 12, 35, 20, 14],
    answers: [
      [3, 5, 2, 7, 8],
      [1, 6, 9, 2, 3],
      [7, 8, 3, 5, 4],
      [4, 1, 5, 8, 9],
      [9, 3, 6, 4, 2]
    ],
    difficulty: 3
  },

  // Puzzle 8: Hard
  {
    id: 8,
    name: "Puzzle 8: Hard",
    grid: [
      [
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '3', fixed: true }
      ],
      [
        { value: '5', fixed: true },
        { value: '', fixed: false },
        { value: '7', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '2', fixed: true },
        { value: '9', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '1', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '4', fixed: true },
        { value: '8', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '3', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '6', fixed: true }
      ]
    ],
    rowOperators: [
      ['*', '/', '-', '+'],
      ['-', '/', '+', '*'],
      ['+', '*', '/', '-'],
      ['/', '+', '-', '*'],
      ['*', '/', '+', '-']
    ],
    colOperators: [
      ['/', '*', '+', '-', '/'],
      ['+', '/', '*', '-', '+'],
      ['*', '+', '/', '-', '*'],
      ['-', '/', '*', '+', '-']
    ],
    rowTargets: [15, 8, 22, 3, 20],
    colTargets: [12, 30, 18, 25, 16],
    answers: [
      [6, 8, 4, 2, 3],
      [5, 9, 7, 1, 4],
      [8, 6, 2, 9, 7],
      [1, 5, 3, 4, 8],
      [4, 3, 9, 7, 6]
    ],
    difficulty: 2
  },

  // Puzzle 9: Hard
  {
    id: 9,
    name: "Puzzle 9: Hard",
    grid: [
      [
        { value: '4', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '7', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '9', fixed: true },
        { value: '1', fixed: true },
        { value: '', fixed: false },
        { value: '5', fixed: true }
      ],
      [
        { value: '8', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '2', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '6', fixed: true },
        { value: '3', fixed: true },
        { value: '', fixed: false },
        { value: '9', fixed: true }
      ],
      [
        { value: '2', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '', fixed: false }
      ]
    ],
    rowOperators: [
      ['/', '+', '*', '-'],
      ['*', '-', '/', '+'],
      ['+', '/', '-', '*'],
      ['-', '*', '+', '/'],
      ['/', '-', '+', '*']
    ],
    colOperators: [
      ['+', '/', '*', '-', '+'],
      ['*', '+', '/', '-', '*'],
      ['/', '*', '+', '-', '/'],
      ['-', '/', '*', '+', '-']
    ],
    rowTargets: [12, 28, 14, 7, 16],
    colTargets: [20, 32, 10, 24, 18],
    answers: [
      [4, 2, 6, 7, 1],
      [3, 9, 1, 4, 5],
      [8, 7, 5, 2, 3],
      [1, 6, 3, 5, 9],
      [2, 4, 7, 8, 6]
    ],
    difficulty: 3
  },

  // Puzzle 10: Hard
  {
    id: 10,
    name: "Puzzle 10: Hard",
    grid: [
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '6', fixed: true },
        { value: '', fixed: false },
        { value: '9', fixed: true }
      ],
      [
        { value: '7', fixed: true },
        { value: '2', fixed: true },
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '4', fixed: true },
        { value: '', fixed: false },
        { value: '1', fixed: true }
      ],
      [
        { value: '3', fixed: true },
        { value: '5', fixed: true },
        { value: '', fixed: false },
        { value: '2', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '', fixed: false },
        { value: '4', fixed: true }
      ]
    ],
    rowOperators: [
      ['*', '/', '+', '-'],
      ['-', '+', '/', '*'],
      ['/', '*', '-', '+'],
      ['+', '/', '*', '-'],
      ['*', '-', '/', '+']
    ],
    colOperators: [
      ['/', '+', '*', '-', '/'],
      ['*', '/', '+', '-', '*'],
      ['+', '*', '/', '-', '+'],
      ['-', '/', '*', '+', '-']
    ],
    rowTargets: [18, 6, 12, 24, 10],
    colTargets: [15, 28, 36, 14, 22],
    answers: [
      [5, 3, 6, 4, 9],
      [7, 2, 9, 8, 1],
      [6, 8, 4, 3, 1],
      [3, 5, 7, 2, 9],
      [1, 7, 8, 5, 4]
    ],
    difficulty: 2
  },

  // Puzzle 11: Very Hard
  {
    id: 11,
    name: "Puzzle 11: Very Hard",
    grid: [
      [
        { value: '', fixed: false },
        { value: '7', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ],
      [
        { value: '9', fixed: true },
        { value: '', fixed: false },
        { value: '3', fixed: true },
        { value: '', fixed: false },
        { value: '6', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '5', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '4', fixed: true },
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '', fixed: false },
        { value: '2', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '9', fixed: true },
        { value: '', fixed: false }
      ]
    ],
    rowOperators: [
      ['/', '*', '+', '-'],
      ['-', '/', '*', '+'],
      ['+', '*', '/', '-'],
      ['*', '/', '+', '-'],
      ['/', '+', '-', '*']
    ],
    colOperators: [
      ['*', '+', '/', '-', '*'],
      ['/', '*', '+', '-', '/'],
      ['+', '/', '*', '-', '+'],
      ['-', '+', '/', '*', '-']
    ],
    rowTargets: [14, 10, 20, 16, 8],
    colTargets: [25, 18, 30, 12, 24],
    answers: [
      [2, 7, 5, 8, 3],
      [9, 1, 3, 4, 6],
      [7, 8, 2, 5, 9],
      [4, 6, 8, 1, 2],
      [3, 5, 7, 9, 4]
    ],
    difficulty: 3
  },

  // Puzzle 12: Very Hard
  {
    id: 12,
    name: "Puzzle 12: Very Hard",
    grid: [
      [
        { value: '6', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '4', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '2', fixed: true },
        { value: '7', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '3', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '9', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '1', fixed: true },
        { value: '5', fixed: true },
        { value: '4', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '8', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '1', fixed: true }
      ]
    ],
    rowOperators: [
      ['*', '/', '-', '+'],
      ['/', '+', '*', '-'],
      ['+', '*', '/', '-'],
      ['-', '/', '+', '*'],
      ['/', '*', '+', '-']
    ],
    colOperators: [
      ['+', '/', '*', '-', '+'],
      ['*', '+', '/', '-', '*'],
      ['/', '*', '+', '-', '/'],
      ['-', '/', '*', '+', '-']
    ],
    rowTargets: [8, 22, 18, 5, 12],
    colTargets: [26, 15, 32, 20, 16],
    answers: [
      [6, 2, 9, 3, 4],
      [5, 8, 2, 7, 1],
      [3, 7, 6, 8, 9],
      [9, 1, 5, 4, 3],
      [8, 4, 7, 2, 1]
    ],
    difficulty: 2
  },

  // Puzzle 13: Expert
  {
    id: 13,
    name: "Puzzle 13: Expert",
    grid: [
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '9', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ],
      [
        { value: '5', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '3', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '7', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '2', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '6', fixed: true },
        { value: '8', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '1', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '9', fixed: true }
      ]
    ],
    rowOperators: [
      ['/', '*', '+', '-'],
      ['+', '/', '-', '*'],
      ['*', '-', '/', '+'],
      ['-', '+', '*', '/'],
      ['/', '*', '-', '+']
    ],
    colOperators: [
      ['*', '/', '+', '-', '*'],
      ['+', '*', '/', '-', '+'],
      ['/', '+', '*', '-', '/'],
      ['-', '/', '+', '*', '-']
    ],
    rowTargets: [16, 12, 20, 4, 14],
    colTargets: [18, 28, 24, 10, 26],
    answers: [
      [8, 2, 9, 4, 7],
      [5, 6, 1, 3, 8],
      [4, 7, 3, 9, 2],
      [7, 3, 6, 8, 1],
      [1, 5, 8, 6, 9]
    ],
    difficulty: 3
  },

  // Puzzle 14: Expert
  {
    id: 14,
    name: "Puzzle 14: Expert",
    grid: [
      [
        { value: '2', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '7', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '4', fixed: true },
        { value: '', fixed: false },
        { value: '9', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ],
      [
        { value: '9', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '1', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '6', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '3', fixed: true }
      ]
    ],
    rowOperators: [
      ['*', '/', '+', '-'],
      ['/', '-', '+', '*'],
      ['+', '/', '*', '-'],
      ['-', '*', '/', '+'],
      ['*', '+', '/', '-']
    ],
    colOperators: [
      ['/', '+', '*', '-', '/'],
      ['*', '/', '+', '-', '*'],
      ['+', '*', '/', '-', '+'],
      ['-', '/', '*', '+', '-']
    ],
    rowTargets: [10, 18, 15, 6, 22],
    colTargets: [20, 24, 12, 28, 16],
    answers: [
      [2, 8, 5, 6, 7],
      [3, 4, 7, 9, 1],
      [6, 9, 8, 2, 4],
      [9, 2, 3, 1, 8],
      [5, 6, 4, 7, 3]
    ],
    difficulty: 2
  },

  // Puzzle 15: Expert
  {
    id: 15,
    name: "Puzzle 15: Expert",
    grid: [
      [
        { value: '', fixed: false },
        { value: '3', fixed: true },
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '7', fixed: true },
        { value: '', fixed: false },
        { value: '5', fixed: true },
        { value: '', fixed: false },
        { value: '2', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '6', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '4', fixed: true },
        { value: '', fixed: false },
        { value: '9', fixed: true },
        { value: '', fixed: false },
        { value: '1', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '', fixed: false },
        { value: '3', fixed: true },
        { value: '', fixed: false }
      ]
    ],
    rowOperators: [
      ['/', '*', '-', '+'],
      ['+', '/', '*', '-'],
      ['*', '+', '/', '-'],
      ['/', '-', '+', '*'],
      ['+', '/', '-', '*']
    ],
    colOperators: [
      ['*', '/', '+', '-', '*'],
      ['+', '*', '/', '-', '+'],
      ['/', '+', '*', '-', '/'],
      ['-', '*', '/', '+', '-']
    ],
    rowTargets: [12, 26, 18, 8, 20],
    colTargets: [22, 14, 30, 16, 24],
    answers: [
      [9, 3, 6, 8, 4],
      [7, 1, 5, 4, 2],
      [8, 5, 3, 6, 9],
      [4, 7, 9, 2, 1],
      [6, 8, 2, 3, 5]
    ],
    difficulty: 3
  },

  // Puzzle 16: Master
  {
    id: 16,
    name: "Puzzle 16: Master",
    grid: [
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '5', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '8', fixed: true },
        { value: '', fixed: false },
        { value: '7', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '9', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '4', fixed: true }
      ],
      [
        { value: '3', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '2', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '1', fixed: true },
        { value: '', fixed: false },
        { value: '8', fixed: true }
      ]
    ],
    rowOperators: [
      ['*', '/', '+', '-'],
      ['-', '/', '*', '+'],
      ['/', '+', '-', '*'],
      ['+', '*', '/', '-'],
      ['*', '/', '+', '-']
    ],
    colOperators: [
      ['/', '*', '+', '-', '/'],
      ['+', '/', '*', '-', '+'],
      ['*', '+', '/', '-', '*'],
      ['-', '/', '*', '+', '-']
    ],
    rowTargets: [14, 9, 16, 20, 11],
    colTargets: [18, 25, 22, 13, 28],
    answers: [
      [6, 4, 2, 5, 9],
      [8, 1, 7, 3, 5],
      [2, 9, 6, 8, 4],
      [3, 7, 5, 2, 1],
      [7, 3, 1, 9, 8]
    ],
    difficulty: 2
  },

  // Puzzle 17: Master
  {
    id: 17,
    name: "Puzzle 17: Master",
    grid: [
      [
        { value: '9', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '1', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '2', fixed: true },
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '6', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ],
      [
        { value: '5', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '3', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '7', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '4', fixed: true }
      ]
    ],
    rowOperators: [
      ['/', '+', '*', '-'],
      ['*', '-', '/', '+'],
      ['+', '/', '-', '*'],
      ['-', '*', '+', '/'],
      ['/', '-', '*', '+']
    ],
    colOperators: [
      ['+', '/', '*', '-', '+'],
      ['*', '+', '/', '-', '*'],
      ['/', '*', '+', '-', '/'],
      ['-', '/', '*', '+', '-']
    ],
    rowTargets: [7, 24, 12, 15, 19],
    colTargets: [30, 16, 26, 8, 21],
    answers: [
      [9, 6, 3, 2, 1],
      [4, 2, 9, 8, 7],
      [7, 8, 6, 1, 5],
      [5, 1, 4, 3, 9],
      [2, 7, 8, 6, 4]
    ],
    difficulty: 3
  },

  // Puzzle 18: Master
  {
    id: 18,
    name: "Puzzle 18: Master",
    grid: [
      [
        { value: '', fixed: false },
        { value: '5', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '8', fixed: true }
      ],
      [
        { value: '6', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '4', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '3', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ],
      [
        { value: '2', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '9', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '1', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '7', fixed: true }
      ]
    ],
    rowOperators: [
      ['*', '/', '-', '+'],
      ['/', '*', '+', '-'],
      ['+', '-', '/', '*'],
      ['-', '/', '*', '+'],
      ['*', '+', '/', '-']
    ],
    colOperators: [
      ['/', '*', '+', '-', '/'],
      ['+', '/', '*', '-', '+'],
      ['*', '+', '/', '-', '*'],
      ['-', '/', '*', '+', '-']
    ],
    rowTargets: [13, 17, 11, 6, 23],
    colTargets: [19, 27, 14, 32, 9],
    answers: [
      [3, 5, 7, 6, 8],
      [6, 8, 2, 4, 9],
      [9, 4, 3, 7, 1],
      [2, 6, 5, 9, 8],
      [5, 1, 8, 3, 7]
    ],
    difficulty: 2
  },

  // Puzzle 19: Ultimate
  {
    id: 19,
    name: "Puzzle 19: Ultimate",
    grid: [
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '6', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '8', fixed: true },
        { value: '', fixed: false },
        { value: '3', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '7', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '9', fixed: true },
        { value: '', fixed: false },
        { value: '2', fixed: true }
      ],
      [
        { value: '4', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ]
    ],
    rowOperators: [
      ['/', '*', '+', '-'],
      ['*', '/', '-', '+'],
      ['+', '-', '*', '/'],
      ['-', '+', '/', '*'],
      ['/', '*', '-', '+']
    ],
    colOperators: [
      ['*', '/', '+', '-', '*'],
      ['+', '*', '/', '-', '+'],
      ['/', '+', '*', '-', '/'],
      ['-', '/', '*', '+', '-']
    ],
    rowTargets: [8, 21, 15, 5, 18],
    colTargets: [24, 12, 29, 17, 10],
    answers: [
      [2, 9, 5, 8, 6],
      [5, 8, 1, 3, 4],
      [7, 3, 6, 4, 9],
      [8, 1, 9, 7, 2],
      [4, 6, 3, 5, 1]
    ],
    difficulty: 3
  },

  // Puzzle 20: Ultimate Challenge
  {
    id: 20,
    name: "Puzzle 20: Ultimate Challenge",
    grid: [
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '4', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ],
      [
        { value: '9', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '7', fixed: true }
      ],
      [
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '5', fixed: true },
        { value: '', fixed: false }
      ],
      [
        { value: '', fixed: false },
        { value: '6', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '3', fixed: true }
      ],
      [
        { value: '1', fixed: true },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false },
        { value: '', fixed: false }
      ]
    ],
    rowOperators: [
      ['*', '/', '+', '-'],
      ['/', '+', '*', '-'],
      ['+', '*', '/', '-'],
      ['-', '/', '+', '*'],
      ['*', '-', '/', '+']
    ],
    colOperators: [
      ['/', '*', '+', '-', '/'],
      ['+', '/', '*', '-', '+'],
      ['*', '+', '/', '-', '*'],
      ['-', '/', '*', '+', '-']
    ],
    rowTargets: [6, 16, 20, 4, 12],
    colTargets: [14, 26, 18, 22, 8],
    answers: [
      [8, 2, 4, 9, 5],
      [9, 3, 1, 6, 7],
      [2, 4, 8, 5, 1],
      [7, 6, 5, 2, 3],
      [1, 9, 7, 4, 8]
    ],
    difficulty: 3
  }
];

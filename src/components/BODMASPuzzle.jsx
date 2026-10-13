import React, { useState, useEffect, useRef, useCallback } from 'react';

import { MdWarning } from 'react-icons/md';

import StarRating from './StarRating';
import ErrorPopup from './ErrorPopup';
import { puzzleConfigs } from './puzzleConfigs';
import DailyChallengeInfo from './DailyChallengeInfo';
import PuzzleHeader from './bodmas/PuzzleHeader';
import RulesAndTips from './bodmas/RulesAndTips';
import PuzzleGrid from './bodmas/PuzzleGrid';
import ControlPanel from './bodmas/ControlPanel';
import ResultDisplay from './bodmas/ResultDisplay';
import DragInstructions from './ui/DragInstructions';
import './bodmas/BODMASPuzzle.css';

// Function to get daily puzzle based on current date (original algorithm)
const getDailyPuzzle = () => {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
  
  const yearSeed = today.getFullYear();
  const randomOffset = (yearSeed * 17 + 42) % puzzleConfigs.length;
  
  const puzzleIndex = (randomOffset + dayOfYear) % puzzleConfigs.length;
  return puzzleConfigs[puzzleIndex];
};

// Function to get puzzle by exact ID (without rotation)
const getPuzzleById = (id) => {
  // Find the puzzle with the given ID
  const puzzle = puzzleConfigs.find(p => p.id === id);
  // If the puzzle ID is not found, fall back to the daily puzzle
  if (!puzzle) {
    return getDailyPuzzle();
  }
  
  return puzzle;
};

const BODMASPuzzle = ({ puzzleId }) => {
  const [config, setConfig] = useState(null);
  
  // Timer state
  const computeInitialCellValues = (config) => {
    if (!config) return {};
    return config.grid.reduce((acc, row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        acc[`cell-${rowIndex + 1}-${colIndex + 1}`] = cell.fixed ? cell.value : '';
      });
      return acc;
    }, {});
  };

  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [selectedCell, setSelectedCell] = useState(null);
  const [dragOverCell, setDragOverCell] = useState(null);
  const [result, setResult] = useState('');
  const [resultColor, setResultColor] = useState('black');
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [mobileActiveTab, setMobileActiveTab] = useState('rules');
  const [warningMessage, setWarningMessage] = useState('');
  const [errorPopup, setErrorPopup] = useState({ message: '', isVisible: false, type: 'error' });
  const timerRef = useRef();
  const puzzleRef = useRef();

  // Initialize cell values from config
  const [cellValues, setCellValues] = useState({});

  // Load puzzle configuration
  useEffect(() => {
    const loadPuzzle = () => {
      try {
        const puzzleConfig = puzzleId ? getPuzzleById(puzzleId) : getDailyPuzzle();
        setConfig(puzzleConfig);
        setCellValues(computeInitialCellValues(puzzleConfig));
      } catch (error) {
        console.error('Error loading puzzle:', error);
        // Set a fallback puzzle
        const fallbackPuzzle = {
          id: 0,
          name: "Sample Puzzle",
          grid: [
            [
              { value: '5', fixed: true },
              { value: '', fixed: false },
              { value: '', fixed: false }
            ],
            [
              { value: '', fixed: false },
              { value: '3', fixed: true },
              { value: '', fixed: false }
            ],
            [
              { value: '', fixed: false },
              { value: '', fixed: false },
              { value: '1', fixed: true }
            ]
          ],
          rowOperators: [
            ['+', '*'],
            ['/', '-']
          ],
          colOperators: [
            ['+', '/'],
            ['*', '-']
          ],
          rowTargets: [20, 2],
          colTargets: [10, 3],
          answers: [
            [5, 4, 2],
            [2, 3, 4],
            [1, 5, 1]
          ],
          difficulty: 3
        };
        setConfig(fallbackPuzzle);
        setCellValues(computeInitialCellValues(fallbackPuzzle));
      }
    };

    loadPuzzle();
  }, [puzzleId]);

  const difficultyStars = config ? Math.max(1, Math.min(5, config.difficulty)) : 0;

  // Show error popup
  const showErrorPopup = (message, type = 'error') => {
    setErrorPopup({ message, isVisible: true, type });
  };

  const closeErrorPopup = useCallback(() => {
    setErrorPopup({ message: '', isVisible: false, type: 'error' });
  }, []);

  // Reset when config changes
  useEffect(() => {
    if (config) {
      setCellValues(computeInitialCellValues(config));
      setSeconds(0);
      setIsTimerRunning(true);
      setSelectedCell(null);
      setResult('');
      setWarningMessage('');
    }
  }, [config]);

  // Handle window resize to detect mobile/desktop view changes
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Timer effect
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isTimerRunning]);

  // Format timer display
  const formatTime = (timeInSeconds) => {
    const mins = String(Math.floor(timeInSeconds / 60)).padStart(2, '0');
    const secs = String(timeInSeconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  // Check if number is allowed in the cell and return detailed error info
  const checkNumberAllowed = useCallback((number, cellId) => {
    if (!config) return { allowed: false, error: 'Puzzle not loaded' };
    
    const [_, row, col] = cellId.split('-').map(Number);
    const size = config.grid.length;

    // Check row constraint
    for (let i = 1; i <= size; i++) {
      const rowCellId = `cell-${row}-${i}`;
      if (rowCellId !== cellId && cellValues[rowCellId] && parseInt(cellValues[rowCellId]) === number) {
        return { allowed: false, error: `Number ${number} already exists in row ${row}.` };
      }
    }

    // Check column constraint
    for (let i = 1; i <= size; i++) {
      const colCellId = `cell-${i}-${col}`;
      if (colCellId !== cellId && cellValues[colCellId] && parseInt(cellValues[colCellId]) === number) {
        return { allowed: false, error: `Number ${number} already exists in column ${col}.` };
      }
    }

    return { allowed: true, error: null };
  }, [cellValues, config]);

  // Handle cell selection
  const handleCellClick = (cellId) => {
    setSelectedCell(cellId);
  };

  // Handle number button click
  const handleNumberClick = (number, targetCellId = null) => {
    // If a target cell is provided (e.g., from drag-and-drop), use it instead of the currently selected cell
    const cellId = targetCellId || selectedCell;

    if (!cellId) {
      showErrorPopup('⚠️ Please select a cell first', 'error');
      return;
    }

    const numValue = typeof number === 'string' ? parseInt(number) : number;
    const validation = checkNumberAllowed(numValue, cellId);

    if (validation.allowed) {
      setCellValues(prev => ({ ...prev, [cellId]: numValue.toString() }));
      // Only clear selection if no target cell was provided explicitly (normal button click)
      if (!targetCellId) {
        setSelectedCell(null);
      }
    } else {
      showErrorPopup(`❌ Rule Violation: ${validation.error}`, 'error');
    }
  };

  // Handle cell input change
  const handleCellChange = (e, cellId) => {
    const value = e.target.value;
    
    if (value !== '' && (!/^[1-9]$/.test(value))) {
      showErrorPopup('❌ Please enter only single digits from 1 to 9', 'error');
      e.target.value = cellValues[cellId] || '';
      return;
    }

    if (value === '') {
      setCellValues(prev => ({ ...prev, [cellId]: value }));
    } else {
      const number = parseInt(value);
      const validation = checkNumberAllowed(number, cellId);
      if (validation.allowed) {
        setCellValues(prev => ({ ...prev, [cellId]: value }));
      } else {
        showErrorPopup(`❌ Rule Violation: ${validation.error}`, 'error');
        // Keep the previous value in the input field
        e.target.value = cellValues[cellId] || '';
        return;
      }
    }
  };

  // Handle delete/clear
  const handleDelete = () => {
    if (selectedCell) {
      setCellValues(prev => ({ ...prev, [selectedCell]: '' }));
    } else {
      showErrorPopup('⚠️ Please select a cell first', 'error');
    }
  };

  // Handle reset
  const handleReset = () => {
    if (config) {
      setCellValues(computeInitialCellValues(config));
      setSelectedCell(null);
      setResult('');
      setSeconds(0);
      setIsTimerRunning(true);
    }
  };

  // Evaluate a sequence of digits left-to-right with the given operators
  // (per the game's rule: no operator precedence, just left to right).
  const evaluateExpression = (digits, operators) => {
    let result = digits[0];
    for (let i = 0; i < operators.length; i++) {
      const operand = digits[i + 1];
      switch (operators[i]) {
        case '+': result += operand; break;
        case '-': result -= operand; break;
        case '*': result *= operand; break;
        case '/': result /= operand; break;
        default: return null;
      }
    }
    return result;
  };

  // Check solution
  const checkSolution = () => {
    if (!config) {
      showErrorPopup('❌ Puzzle not loaded', 'error');
      return;
    }
    
    const size = config.grid.length;
    let allFilled = true;

    for (let row = 1; row <= size; row++) {
      for (let col = 1; col <= size; col++) {
        const cellId = `cell-${row}-${col}`;
        if (!cellValues[cellId]) {
          allFilled = false;
          break;
        }
      }
      if (!allFilled) break;
    }

    if (!allFilled) {
      showErrorPopup('❌ Please complete all fields to validate your solution', 'error');
      setResult('Please complete all fields to validate your solution');
      setResultColor('#dc3545');
      return;
    }

    // Parse each cell once into a numeric grid, reused below instead of
    // re-parsing cellValues separately for the digit check and for every row/column.
    const grid = {};
    for (let row = 1; row <= size; row++) {
      for (let col = 1; col <= size; col++) {
        const cellId = `cell-${row}-${col}`;
        grid[cellId] = parseInt(cellValues[cellId], 10);
      }
    }

    const usedDigits = new Set(Object.values(grid));

    const missingDigits = [];
    for (let digit = 1; digit <= 9; digit++) {
      if (!usedDigits.has(digit)) {
        missingDigits.push(digit);
      }
    }

    if (missingDigits.length > 0) {
      showErrorPopup(`❌ Rule Violation: Missing digits ${missingDigits.join(', ')}.`, 'error');
      setResult(`Missing digits: ${missingDigits.join(', ')}.`);
      setResultColor('#dc3545');
      return;
    }

    // Evaluate one row or column: getCellId(i) walks its cells 1..size,
    // getOperator(i) gives the operator after the i-th cell (i < size).
    const checkLine = (getCellId, getOperator) => {
      const digits = [];
      const operators = [];
      for (let i = 1; i <= size; i++) {
        digits.push(grid[getCellId(i)]);
        if (i < size) {
          operators.push(getOperator(i));
        }
      }
      return evaluateExpression(digits, operators);
    };

    let incorrectRows = [];
    let incorrectCols = [];

    // Check all rows first
    for (let row = 1; row <= size; row++) {
      const result = checkLine(
        (col) => `cell-${row}-${col}`,
        (col) => config.rowOperators[row - 1][col - 1]
      );
      if (result !== config.rowTargets[row - 1]) {
        incorrectRows.push(row);
      }
    }

    // Check all columns
    for (let col = 1; col <= size; col++) {
      const result = checkLine(
        (row) => `cell-${row}-${col}`,
        (row) => config.colOperators[row - 1][col - 1]
      );
      if (result !== config.colTargets[col - 1]) {
        incorrectCols.push(col);
      }
    }

    // If there are incorrect rows or columns, provide detailed feedback
    if (incorrectRows.length > 0 || incorrectCols.length > 0) {
      let errorMessage = '';
      if (incorrectRows.length > 0) {
        errorMessage += `❌ Incorrect rows: ${incorrectRows.join(', ')}\n`;
      }
      // Only show row information, not columns, as per requirement
      errorMessage += 'Please check your calculations and try again.';
      
      showErrorPopup(errorMessage.replace(/\n/g, ' '), 'error');
      setResult(errorMessage);
      setResultColor('#dc3545');
      return;
    }

    setResult(`🎉 Congratulations! Puzzle solved correctly!\n\nDaily Challenge - Boost your Brainpower!\nReturn tomorrow for a new challenge!`);
    setResultColor('#28a745');
    setIsTimerRunning(false); // Stop the timer when puzzle is solved correctly
  };

  // Open a share-intent URL in a new tab, hardened against reverse tabnabbing
  const openShareWindow = (shareUrl) => {
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  // Share functionality
  const shareResult = async (platform) => {
    // Check if puzzle is completed
    const isPuzzleCompleted = result && result.includes('🎉 Congratulations!');

    // Create different messages based on completion status
    const message = isPuzzleCompleted
      ? `I solved today's Magic Square Challenge in ${formatTime(seconds)}! Can you beat my time? #MagicSquare #BrainTeaser #MathPuzzle`
      : `Test your math skills with this Magic Square puzzle. #MagicSquare #BrainTeaser #MathPuzzle`;

    const url = 'https://magicsquare.live';

    try {
      switch (platform) {
        case 'facebook':
          openShareWindow(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(message)}`);
          break;
        case 'twitter':
          openShareWindow(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`);
          break;
        case 'whatsapp':
          openShareWindow(`https://wa.me/?text=${encodeURIComponent(`${message} ${url}`)}`);
          break;
        case 'linkedin':
          openShareWindow(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
          break;
        default:
          // Copy to clipboard as fallback
          await navigator.clipboard.writeText(`${message} ${url}`);
          showErrorPopup('Link copied to clipboard!', 'success');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      showErrorPopup('Unable to share. Link copied to clipboard instead!', 'success');
      try {
        await navigator.clipboard.writeText(`${message} ${url}`);
      } catch (clipboardError) {
        console.error('Error copying to clipboard:', clipboardError);
        showErrorPopup('Unable to copy to clipboard. Please try again.', 'error');
      }
    }
  };

  // Show loading state while puzzle is loading
  if (!config) {
    return (
      <div className="bodmas-puzzle-container" ref={puzzleRef}>
        <div className="bodmas-puzzle-main">
          <div className="bodmas-puzzle-game-container">
            <div className="p-5 text-center">
              <p>Loading puzzle...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bodmas-puzzle-container" ref={puzzleRef}>
      {warningMessage && (
        <div className="warning-message">
          <MdWarning />
          {warningMessage}
        </div>
      )}

      <div className="bodmas-puzzle-main">
        <div className="bodmas-puzzle-game-container">
          <PuzzleHeader
            seconds={seconds}
            formatTime={formatTime}
            difficultyStars={difficultyStars}
            shareResult={shareResult}
          />
          <RulesAndTips
            mobileActiveTab={mobileActiveTab}
            setMobileActiveTab={setMobileActiveTab}
          />
          <PuzzleGrid
            config={config}
            cellValues={cellValues}
            selectedCell={selectedCell}
            dragOverCell={dragOverCell}
            handleCellChange={handleCellChange}
            handleCellClick={handleCellClick}
            setSelectedCell={setSelectedCell}
          />
          <DragInstructions isMobileView={isMobileView} />
          <ControlPanel
            handleNumberClick={handleNumberClick}
            handleDelete={handleDelete}
            handleReset={handleReset}
            checkSolution={checkSolution}
            isMobileView={isMobileView}
            setDragOverCell={setDragOverCell}
          />
          <ResultDisplay result={result} resultColor={resultColor} />
          <DailyChallengeInfo />
        </div>
      </div>

      <ErrorPopup
        message={errorPopup.message}
        isVisible={errorPopup.isVisible}
        onClose={closeErrorPopup}
        type={errorPopup.type}
      />
    </div>
  );
};

export default BODMASPuzzle;
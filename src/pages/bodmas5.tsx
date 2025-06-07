import React, { useState, useEffect, useCallback, useRef } from 'react';
import html2canvas from 'html2canvas';

const BODMASPuzzle: React.FC = () => {
  // Timer state
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [result, setResult] = useState('');
  const [resultColor, setResultColor] = useState('black');
  const [showShareButtons, setShowShareButtons] = useState(false);
  const puzzleRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  // Answers grid
  const answers = [
    [9, 3, 8, 7, 6],
    [5, 9, 4, 2, 3],
    [1, 6, 9, 3, 7],
    [8, 4, 3, 1, 5],
    [4, 2, 6, 5, 1]
  ];

  // Cell values state
  const initialCellValues = {
    'cell-1-1': '9', 'cell-1-2': '3', 'cell-1-3': '8', 'cell-1-4': '', 'cell-1-5': '',
    'cell-2-1': '', 'cell-2-2': '', 'cell-2-3': '4', 'cell-2-4': '2', 'cell-2-5': '3',
    'cell-3-1': '1', 'cell-3-2': '', 'cell-3-3': '9', 'cell-3-4': '', 'cell-3-5': '7',
    'cell-4-1': '', 'cell-4-2': '4', 'cell-4-3': '', 'cell-4-4': '1', 'cell-4-5': '5',
    'cell-5-1': '4', 'cell-5-2': '2', 'cell-5-3': '', 'cell-5-4': '5', 'cell-5-5': ''
  };

  const [cellValues, setCellValues] = useState<Record<string, string>>(initialCellValues);

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
  const formatTime = (timeInSeconds: number): string => {
    const mins = String(Math.floor(timeInSeconds / 60)).padStart(2, '0');
    const secs = String(timeInSeconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  // Check if number is allowed in the cell (no duplicates in row/column)
  const isNumberAllowed = useCallback((number: string, cellId: string): boolean => {
    const [_, row, col] = cellId.split('-').map(Number);

    for (let i = 1; i <= 5; i++) {
      const rowCellId = `cell-${row}-${i}`;
      const colCellId = `cell-${i}-${col}`;
      if (rowCellId !== cellId && cellValues[rowCellId] === number) return false;
      if (colCellId !== cellId && cellValues[colCellId] === number) return false;
    }

    return true;
  }, [cellValues]);

  // Handle cell selection
  const handleCellClick = (cellId: string) => {
    setSelectedCell(cellId);
  };

  // Handle number button click
  const handleNumberClick = (number: string) => {
    if (selectedCell) {
      if (isNumberAllowed(number, selectedCell)) {
        setCellValues(prev => ({ ...prev, [selectedCell]: number }));
        setSelectedCell(null);
      } else {
        alert("Number already used in this row or column");
      }
    }
  };

  // Handle cell input change
  const handleCellChange = (e: React.ChangeEvent<HTMLInputElement>, cellId: string) => {
    const value = e.target.value;
    
    if (!/^[1-9]?$/.test(value)) {
      return;
    }

    if (value === '' || isNumberAllowed(value, cellId)) {
      setCellValues(prev => ({ ...prev, [cellId]: value }));
    } else {
      alert("Number already used in this row or column");
      e.target.value = cellValues[cellId]; // Reset to previous value
    }
  };

  // Handle delete
  const handleDelete = () => {
    if (selectedCell) {
      setCellValues(prev => ({ ...prev, [selectedCell]: '' }));
      setSelectedCell(null);
    }
  };

  // Handle reset
  const handleReset = () => {
    setCellValues(initialCellValues);
    setResult('');
    setSeconds(0);
    setIsTimerRunning(true); // Restart the timer
    setSelectedCell(null);
    setShowShareButtons(false);
  };

  // Check solution
const checkSolution = () => {
    let allFilled = true;
    const rowResults: boolean[] = [];

    for (let row = 1; row <= 5; row++) {
      let rowCorrect = true;
      for (let col = 1; col <= 5; col++) {
        const cellId = `cell-${row}-${col}`;
        const val = cellValues[cellId];
        if (!initialCellValues[cellId] && val === "") {
          allFilled = false;
        }
        if (val && parseInt(val) !== answers[row - 1][col - 1]) {
          rowCorrect = false;
        }
      }
      rowResults.push(rowCorrect);
    }

    if (!allFilled) {
      setResult("Kindly fill all the blanks to check solution.");
      setResultColor("red");
      setShowShareButtons(false);
    } else if (rowResults.every(Boolean)) {
      setResult("✅ Excellent, Challenge Completed Successfully!");
      setResultColor("green");
      setIsTimerRunning(false); // This stops the timer
      setShowShareButtons(true);
    } else {
      const summary = rowResults
        .map((correct, i) => `Row ${i + 1} is ${correct ? "correct" : "incorrect"}`)
        .join(", ") + ", Try Again!";
      setResult(summary);
      setResultColor("orange");
      setShowShareButtons(true);
    }
  };

  // Share on social media
  const shareOnSocialMedia = async (platform: string) => {
    if (!puzzleRef.current) return;

    try {
      const canvas = await html2canvas(puzzleRef.current);
      const image = canvas.toDataURL('image/png');
      const timeTaken = formatTime(seconds);
      const message = `I solved the BODMAS Puzzle in ${timeTaken}! Can you beat my time?`;

      if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(image)}&quote=${encodeURIComponent(message)}`, '_blank');
      } else if (platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(image)}`, '_blank');
      } else if (platform === 'whatsapp') {
        window.open(`https://wa.me/?text=${encodeURIComponent(`${message} ${image}`)}`, '_blank');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  // Copy to clipboard
  const copyToClipboard = async () => {
    if (!puzzleRef.current) return;

    try {
      const canvas = await html2canvas(puzzleRef.current);
      canvas.toBlob((blob) => {
        if (blob) {
          const item = new ClipboardItem({ 'image/png': blob });
          navigator.clipboard.write([item]).then(() => {
            alert('Image copied to clipboard!');
          });
        }
      });
    } catch (error) {
      console.error('Error copying:', error);
      alert('Failed to copy image to clipboard');
    }
  };

  // Styles
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center' as const,
      backgroundColor: '#f5f5f5',
    },
    h1: {
      color: 'darkblue',
    },
    puzzle: {
      margin: 'auto',
      padding: '20px',
      width: 'fit-content',
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0 0 10px #ccc',
    },
    table: {
      borderCollapse: 'collapse' as const,
      margin: '10px auto',
    },
    td: {
      padding: '5px',
    },
    cell: {
      width: '40px',
      height: '30px',
      textAlign: 'center' as const,
      fontSize: '18px',
      border: '1px solid #333',
      borderRadius: '5px',
    },
    disabledCell: {
      backgroundColor: '#ddd',
    },
    controls: {
      marginTop: '20px',
    },
    numBtn: {
      width: '40px',
      height: '40px',
      margin: '5px',
      fontSize: '18px',
    },
    button: {
      padding: '8px 15px',
      margin: '10px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
    },
    shareButton: {
      padding: '8px 15px',
      margin: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '5px',
      border: 'none',
      color: 'white',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    result: {
      marginTop: '15px',
      fontWeight: 'bold' as const,
      fontSize: '18px',
    },
    timerContainer: {
      margin: '10px',
      fontSize: '20px',
      color: '#333',
    },
    selectedCell: {
      backgroundColor: '#ffffcc',
    },
    shareButtons: {
      margin: '20px 0',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
    },
  };

  return (
    <div style={styles.body}>
      <p>Fill the blanks with numbers 1 to 9 to complete the equations following the BODMAS rule.</p>

      <div style={styles.timerContainer}>
        <h3>⏱️ Time Elapsed: <span>{formatTime(seconds)}</span></h3>
      </div>

      <div style={styles.puzzle} ref={puzzleRef}>
        <table style={styles.table}>
        <tbody>
          {/* Row 1 */}
          <tr>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-1-1"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-1-1']}
                disabled
              />
            </td>
            <td>/</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-1-2"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-1-2']}
                disabled
              />
            </td>
            <td>*</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-1-3"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-1-3']}
                disabled
              />
            </td>
            <td>+</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-1-4"
                className="cell"
                style={{ ...styles.cell, ...(selectedCell === 'cell-1-4' ? styles.selectedCell : {}) }}
                value={cellValues['cell-1-4']}
                onChange={(e) => handleCellChange(e, 'cell-1-4')}
                onClick={() => handleCellClick('cell-1-4')}
              />
            </td>
            <td>-</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-1-5"
                className="cell"
                style={{ ...styles.cell, ...(selectedCell === 'cell-1-5' ? styles.selectedCell : {}) }}
                value={cellValues['cell-1-5']}
                onChange={(e) => handleCellChange(e, 'cell-1-5')}
                onClick={() => handleCellClick('cell-1-5')}
              />
            </td>
            <td>= 25</td>
          </tr>
          <tr>
            <td>*</td>
            <td></td>
            <td>-</td>
            <td></td>
            <td>/</td>
            <td></td>
            <td>*</td>
            <td></td>
            <td>/</td>
          </tr>
          {/* Row 2 */}
          <tr>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-2-1"
                className="cell"
                style={{ ...styles.cell, ...(selectedCell === 'cell-2-1' ? styles.selectedCell : {}) }}
                value={cellValues['cell-2-1']}
                onChange={(e) => handleCellChange(e, 'cell-2-1')}
                onClick={() => handleCellClick('cell-2-1')}
              />
            </td>
            <td>+</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-2-2"
                className="cell"
                style={{ ...styles.cell, ...(selectedCell === 'cell-2-2' ? styles.selectedCell : {}) }}
                value={cellValues['cell-2-2']}
                onChange={(e) => handleCellChange(e, 'cell-2-2')}
                onClick={() => handleCellClick('cell-2-2')}
              />
            </td>
            <td>-</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-2-3"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-2-3']}
                disabled
              />
            </td>
            <td>/</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-2-4"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-2-4']}
                disabled
              />
            </td>
            <td>*</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-2-5"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-2-5']}
                disabled
              />
            </td>
            <td>= 8</td>
          </tr>
          <tr>
            <td>+</td>
            <td></td>
            <td>*</td>
            <td></td>
            <td>+</td>
            <td></td>
            <td>-</td>
            <td></td>
            <td>+</td>
          </tr>
          {/* Row 3 */}
          <tr>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-3-1"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-3-1']}
                disabled
              />
            </td>
            <td>-</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-3-2"
                className="cell"
                style={{ ...styles.cell, ...(selectedCell === 'cell-3-2' ? styles.selectedCell : {}) }}
                value={cellValues['cell-3-2']}
                onChange={(e) => handleCellChange(e, 'cell-3-2')}
                onClick={() => handleCellClick('cell-3-2')}
              />
            </td>
            <td>+</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-3-3"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-3-3']}
                disabled
              />
            </td>
            <td>/</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-3-4"
                className="cell"
                style={{ ...styles.cell, ...(selectedCell === 'cell-3-4' ? styles.selectedCell : {}) }}
                value={cellValues['cell-3-4']}
                onChange={(e) => handleCellChange(e, 'cell-3-4')}
                onClick={() => handleCellClick('cell-3-4')}
              />
            </td>
            <td>*</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-3-5"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-3-5']}
                disabled
              />
            </td>
            <td>= 16</td>
          </tr>
          <tr>
            <td>-</td>
            <td></td>
            <td>+</td>
            <td></td>
            <td>*</td>
            <td></td>
            <td>/</td>
            <td></td>
            <td>-</td>
          </tr>
          {/* Row 4 */}
          <tr>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-4-1"
                className="cell"
                style={{ ...styles.cell, ...(selectedCell === 'cell-4-1' ? styles.selectedCell : {}) }}
                value={cellValues['cell-4-1']}
                onChange={(e) => handleCellChange(e, 'cell-4-1')}
                onClick={() => handleCellClick('cell-4-1')}
              />
            </td>
            <td>/</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-4-2"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-4-2']}
                disabled
              />
            </td>
            <td>+</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-4-3"
                className="cell"
                style={{ ...styles.cell, ...(selectedCell === 'cell-4-3' ? styles.selectedCell : {}) }}
                value={cellValues['cell-4-3']}
                onChange={(e) => handleCellChange(e, 'cell-4-3')}
                onClick={() => handleCellClick('cell-4-3')}
              />
            </td>
            <td>-</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-4-4"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-4-4']}
                disabled
              />
            </td>
            <td>*</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-4-5"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-4-5']}
                disabled
              />
            </td>
            <td>= 0</td>
          </tr>
          <tr>
            <td>/</td>
            <td></td>
            <td>/</td>
            <td></td>
            <td>-</td>
            <td></td>
            <td>+</td>
            <td></td>
            <td>*</td>
          </tr>
          {/* Row 5 */}
          <tr>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-5-1"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-5-1']}
                disabled
              />
            </td>
            <td>+</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-5-2"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-5-2']}
                disabled
              />
            </td>
            <td>-</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-5-3"
                className="cell"
                style={{ ...styles.cell, ...(selectedCell === 'cell-5-3' ? styles.selectedCell : {}) }}
                value={cellValues['cell-5-3']}
                onChange={(e) => handleCellChange(e, 'cell-5-3')}
                onClick={() => handleCellClick('cell-5-3')}
              />
            </td>
            <td>*</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-5-4"
                style={{ ...styles.cell, ...styles.disabledCell }}
                value={cellValues['cell-5-4']}
                disabled
              />
            </td>
            <td>/</td>
            <td style={styles.td}>
              <input
                type="text"
                id="cell-5-5"
                className="cell"
                style={{ ...styles.cell, ...(selectedCell === 'cell-5-5' ? styles.selectedCell : {}) }}
                value={cellValues['cell-5-5']}
                onChange={(e) => handleCellChange(e, 'cell-5-5')}
                onClick={() => handleCellClick('cell-5-5')}
              />
            </td>
            <td>= -24</td>
          </tr>
          <tr>
            <td>= 44</td>
            <td></td>
            <td>= -49</td>
            <td></td>
            <td>= 23</td>
            <td></td>
            <td>= 16</td>
            <td></td>
            <td>= 4</td>
          </tr>
          </tbody>
        </table>

        <div style={styles.controls}>
          <h3>Number Selection</h3>
          <div className="numbers">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <button
                key={num}
                style={styles.numBtn}
                onClick={() => handleNumberClick(num.toString())}
              >
                {num}
              </button>
            ))}
          </div>
          <button style={styles.button} onClick={handleDelete}>Delete</button>
          <button style={styles.button} onClick={handleReset}>Reset</button>
        </div>

        <button style={styles.button} onClick={checkSolution}>Check Solution</button>
        <div style={{ ...styles.result, color: resultColor }}>{result}</div>

        {showShareButtons && (
          <div style={styles.shareButtons}>
            <button 
              style={{ ...styles.shareButton, backgroundColor: '#3b5998' }} 
              onClick={() => shareOnSocialMedia('facebook')}
            >
              Share on Facebook
            </button>
            <button 
              style={{ ...styles.shareButton, backgroundColor: '#1DA1F2' }} 
              onClick={() => shareOnSocialMedia('twitter')}
            >
              Share on Twitter
            </button>
            <button 
              style={{ ...styles.shareButton, backgroundColor: '#25D366' }} 
              onClick={() => shareOnSocialMedia('whatsapp')}
            >
              Share on WhatsApp
            </button>
            <button 
              style={{ ...styles.shareButton, backgroundColor: '#6c757d' }} 
              onClick={copyToClipboard}
            >
              Copy Image
            </button>
          </div>
        )}

        {/* Rules Section */}
        <div id="rules">
          <h3>Rules:</h3>
          <ul>
            <li>Use BODMAS rule - left to right in rows and top to bottom in columns.</li>
            <li>Fill the blanks with single digits from 1 to 9 to complete the equations.</li>
            <li>Each digit can come only once in an equation of a row or column.</li>
            <li>All digits from 1 to 9 should come at least once in the overall square of 5 rows and 5 column equations.</li>
          </ul>  
        </div>
      </div>
    </div>
  );
};

export default BODMASPuzzle;
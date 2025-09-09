import React, { useState, useEffect, useCallback, useRef, Fragment } from 'react';
import html2canvas from 'html2canvas';
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import DifficultyLevel from '../components/difficultyProps';
// import { puzzleConfigs } from '../components/puzzleConfigs';
import { PuzzleConfig } from '../components/puzzleType';

interface BODMASPuzzleProps {
  config: PuzzleConfig;
}
const urlToShare='https://magicsquare.live/'

const BODMASPuzzle: React.FC<BODMASPuzzleProps> = ({ config }) => {
  // Timer state
    const computeInitialCellValues = (config: PuzzleConfig) => {
    return config.grid.reduce((acc, row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        acc[`cell-${rowIndex + 1}-${colIndex + 1}`] = cell.fixed ? cell.value : '';
      });
      return acc;
    }, {} as Record<string, string>);
  };

  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [result, setResult] = useState('');
  const [resultColor, setResultColor] = useState('black');
  const [showShareButtons, setShowShareButtons] = useState(false);
  const puzzleRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  // Initialize cell values from config
  const [cellValues, setCellValues] = useState<Record<string, string>>(
    () => computeInitialCellValues(config)
  );

  // const blanksLeft = Object.values(cellValues).filter(v => v === '').length;
  const blanksLeft = config.difficulty;

    // Reset when config changes
  useEffect(() => {
    setCellValues(computeInitialCellValues(config));
    setSeconds(0);
    setIsTimerRunning(true);
    setSelectedCell(null);
    setResult('');
    setShowShareButtons(false);
  }, [config]);
  


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

  // Check if number is allowed in the cell
  const isNumberAllowed = useCallback((number: string, cellId: string): boolean => {
    const [_, row, col] = cellId.split('-').map(Number);
    const size = config.grid.length;

    for (let i = 1; i <= size; i++) {
      const rowCellId = `cell-${row}-${i}`;
      const colCellId = `cell-${i}-${col}`;
      if (rowCellId !== cellId && cellValues[rowCellId] === number) return false;
      if (colCellId !== cellId && cellValues[colCellId] === number) return false;
    }

    return true;
  }, [cellValues, config.grid.length]);

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
      e.target.value = cellValues[cellId];
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
    setCellValues(computeInitialCellValues(config)); 
    setResult('');
    setShowShareButtons(false);
    setSeconds(0); 
    setIsTimerRunning(true); 
    setSelectedCell(null);
  };

  // Check solution
  const checkSolution = () => {
    const size = config.grid.length;
    let allFilled = true;
    const rowResults: boolean[] = [];

    for (let row = 1; row <= size; row++) {
      let rowCorrect = true;
      for (let col = 1; col <= size; col++) {
        const cellId = `cell-${row}-${col}`;
        const val = cellValues[cellId];
        
        if (!config.grid[row-1][col-1].fixed && val === "") {
          allFilled = false;
        }
        
        if (val && parseInt(val) !== config.answers[row - 1][col - 1]) {
          rowCorrect = false;
        }
      }
      rowResults.push(rowCorrect);
    }

    if (!allFilled) {
      setResult("Kindly fill all the blanks to check solution.");
      setResultColor("red");
      setShowShareButtons(true);
    } else if (rowResults.every(Boolean)) {
      setResult("✅ Excellent, Challenge Completed Successfully!");
      setResultColor("green");
      setIsTimerRunning(false);
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
      const message = `I solved the Magic Square Challenge in ${timeTaken}! Can you beat my time?`;

      if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}&quote=${encodeURIComponent(message)}`, '_blank');
      } else if (platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(urlToShare)}`, '_blank');
      } else if (platform === 'whatsapp') {
        window.open(`https://wa.me/?text=${encodeURIComponent(`${message} ${urlToShare}`)}`,'_blank'  );
      }
      else if (platform === 'linkedin') {
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(urlToShare)}&title=${encodeURIComponent(message)}`, '_blank');
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
      backgroundColor: '#007bff',
      color: 'white',
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

  const size = config.grid.length;

  return (
    <div style={styles.body} >
      <h1 style={styles.h1}>BODMAS Puzzle Challenge</h1>
      <p>Fill the blanks with numbers 1 to 9 to complete the equations following the BODMAS rule.</p>

      <div style={styles.timerContainer}>
        <h3>⏱️ Time Elapsed: <span>{formatTime(seconds)}</span></h3>
      </div>

      <div className="flex gap-3 items-center justify-center" style={{ width: 'fit-content', margin: 'auto' }}>
        <DifficultyLevel blanksLeft={blanksLeft} />
        <FaFacebook
          onClick={() => shareOnSocialMedia('facebook')}
          className="text-blue-600 hover:text-blue-800 cursor-pointer text-2xl"
          title="Share on Facebook"
        />
        <FaTwitter
          onClick={() => shareOnSocialMedia('twitter')}
          className="text-blue-400 hover:text-blue-600 cursor-pointer text-2xl"
          title="Share on Twitter"
        />
        <FaWhatsapp
          onClick={() => shareOnSocialMedia('whatsapp')}
          className="text-green-500 hover:text-green-700 cursor-pointer text-2xl"
          title="Share on WhatsApp"
        />
      <FaLinkedin
          onClick={() => shareOnSocialMedia('linkedin')}
          className="text-blue-600 hover:text-blue-800 cursor-pointer text-2xl"
          title="Share on LinkedIn"
        />
        
      </div>
      
      <div style={styles.puzzle} ref={puzzleRef}>
        <table style={styles.table}>
          <tbody>
            {/* Render number rows */}
            {config.grid.map((row, rowIndex) => (
              <Fragment key={`row-${rowIndex}`}>
                <tr>
                  {row.map((cell, colIndex) => {
                    const cellId = `cell-${rowIndex + 1}-${colIndex + 1}`;
                    const isFixed = cell.fixed;
                    
                    return (
                      <Fragment key={`cell-${rowIndex}-${colIndex}`}>
                        <td style={styles.td}>
                          <input
                            type="text"
                            id={cellId}
                            style={{
                              ...styles.cell,
                              ...(isFixed ? styles.disabledCell : {}),
                              ...(selectedCell === cellId ? styles.selectedCell : {})
                            }}
                            value={cellValues[cellId]}
                            disabled={isFixed}
                            onChange={!isFixed ? (e) => handleCellChange(e, cellId) : undefined}
                            onClick={!isFixed ? () => handleCellClick(cellId) : undefined}
                          />
                        </td>
                        {colIndex < row.length - 1 && (
                          <td>{config.rowOperators[rowIndex][colIndex]}</td>
                        )}
                      </Fragment>
                    );
                  })}
                  <td>= {config.rowTargets[rowIndex]}</td>
                </tr>
                
                {/* Render operator rows between number rows */}
                {rowIndex < size - 1 && (
                  <tr>
                    {config.colOperators[rowIndex].map((operator, colIndex) => (
                      <Fragment key={`op-${rowIndex}-${colIndex}`}>
                        <td>{operator}</td>
                        {colIndex < size - 1 && <td></td>}
                      </Fragment>
                    ))}
                  </tr>
                )}
              </Fragment>
            ))}
            
            {/* Render column targets */}
            <tr>
              {config.colTargets.map((target, index) => (
                <Fragment key={`col-target-${index}`}>
                  <td>= {target}</td>
                  {index < size - 1 && <td></td>}
                </Fragment>
              ))}
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

        {/* Rules Section */}
        <div id="rules" style={{ textAlign: 'left' }}>
          <h3>Rules:</h3>
          <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem' }}>
            <li>Use BODMAS rule - left to right in rows and top to bottom in columns.</li>
            <li>Fill the blanks with single digits from 1 to 9 to complete the equations.</li>
            <li>Each digit can come only once in an equation of a row or column.</li>
            <li>All digits from 1 to 9 should come at least once in the overall square.</li>
          </ol>  
        </div>
        <div id="Hints" style={{ textAlign: 'left' }}>
          <h3>Hints:</h3>
          <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem' }}>
            <li>Use BODMAS rule to solve equations: LEFT to RIGHT in rows, TOP to BOTTOM in columns.</li>
            <li>First solve Division (/) or Multiplication (*) (whichever comes first from left), then Addition (+) or Subtraction (-).</li>
            <li>Example: 7*5+4/2-1 = 35+4/2-1 = 35+2-1 = 37-1 = 36</li>
          </ol>  
        </div>
      </div>
    </div>
  );
};

export default BODMASPuzzle;
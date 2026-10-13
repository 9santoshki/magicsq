
import React, { Fragment } from 'react';

const CELL_BASE =
  'text-center font-medium rounded-[3px] transition-all duration-200 box-border [font-family:inherit] ' +
  'w-[clamp(24px,9vw,32px)] md:w-[clamp(25px,6vw,35px)] h-[clamp(24px,9vw,32px)] md:h-[clamp(25px,6vw,35px)] ' +
  'text-[clamp(0.8rem,3.5vw,1rem)] md:text-[clamp(0.8rem,3vw,1.1rem)]';

const getCellClasses = (isFixed, isActive) => {
  if (isFixed) {
    return `${CELL_BASE} border border-[#6c757d] bg-[#d1d5db] text-[#495057] cursor-not-allowed`;
  }
  if (isActive) {
    return `${CELL_BASE} border-2 border-[#007bff] bg-[#e3f2fd] text-black cursor-pointer shadow-[0_0_0_2px_rgba(0,123,255,0.2)]`;
  }
  return `${CELL_BASE} border border-black bg-white text-black cursor-pointer`;
};

const OPERATOR_CELL_CLASSES =
  'p-[1.5px] md:p-[2px] text-[clamp(0.8rem,3.5vw,1rem)] md:text-[clamp(0.8rem,3vw,1rem)] font-medium text-[#495057] text-center';

const PuzzleGrid = ({
  config,
  cellValues,
  selectedCell,
  dragOverCell,
  handleCellChange,
  handleCellClick,
  setSelectedCell,
}) => {
  const size = config.grid.length;

  return (
    <div className="bg-white p-3 md:p-[15px]">
      <div className="flex justify-center mb-[10px] md:mb-3">
        <table className="border-separate border-spacing-[1.5px] md:border-spacing-[2px] bg-transparent max-w-full overflow-x-auto block">
          <tbody>
            {config.grid.map((row, rowIndex) => (
              <Fragment key={`row-${rowIndex}`}>
                <tr>
                  {row.map((cell, colIndex) => {
                    const cellId = `cell-${rowIndex + 1}-${colIndex + 1}`;
                    const isFixed = cell.fixed;
                    const isActive = selectedCell === cellId || dragOverCell === cellId;

                    return (
                      <Fragment key={`cell-${rowIndex}-${colIndex}`}>
                        <td className="p-[1.5px] md:p-[2px]">
                          <input
                            type="text"
                            inputMode="numeric"
                            pattern="[1-9]"
                            id={cellId}
                            className={getCellClasses(isFixed, isActive)}
                            value={cellValues[cellId]}
                            disabled={isFixed}
                            onChange={!isFixed ? (e) => handleCellChange(e, cellId) : undefined}
                            onClick={!isFixed ? () => handleCellClick(cellId) : undefined}
                            onFocus={!isFixed ? () => setSelectedCell(cellId) : undefined}
                          />
                        </td>
                        {colIndex < row.length - 1 && (
                          <td className={`${OPERATOR_CELL_CLASSES} min-w-[14px] md:min-w-[15px]`}>
                            {config.rowOperators[rowIndex][colIndex]}
                          </td>
                        )}
                      </Fragment>
                    );
                  })}
                  <td className="py-0.5 px-[3px] md:px-1 text-[clamp(0.7rem,3vw,0.9rem)] md:text-[clamp(0.8rem,2.5vw,1rem)] font-medium text-black bg-white rounded-[3px] whitespace-nowrap border-0">
                    = {config.rowTargets[rowIndex]}
                  </td>
                </tr>

                {rowIndex < size - 1 && (
                  <tr>
                    {config.colOperators[rowIndex].map((operator, colIndex) => (
                      <Fragment key={`op-${rowIndex}-${colIndex}`}>
                        <td className={OPERATOR_CELL_CLASSES}>
                          {operator}
                        </td>
                        {colIndex < size - 1 && <td className="p-[1.5px] md:p-[2px]"></td>}
                      </Fragment>
                    ))}
                  </tr>
                )}
              </Fragment>
            ))}

            <tr>
              {config.colTargets.map((target, index) => (
                <Fragment key={`col-target-${index}`}>
                  <td className="py-0.5 px-[3px] md:px-1 text-[clamp(0.7rem,3vw,0.9rem)] md:text-[clamp(0.8rem,2.5vw,1rem)] font-medium text-black bg-white rounded-[3px] text-center border-0">
                    = {target}
                  </td>
                  {index < size - 1 && <td className="p-[1.5px] md:p-[2px]"></td>}
                </Fragment>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PuzzleGrid;

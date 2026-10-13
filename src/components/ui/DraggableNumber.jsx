import React, { useState, useEffect, useRef } from 'react';

const DraggableNumber = ({ number, onDrop, isMobile, setDragOverCell }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [overCell, setOverCell] = useState(null); // Track which cell the number is over
  const buttonRef = useRef(null);

  const handleMouseDown = (e) => {
    if (!isMobile) return; // Only enable for mobile
    
    const rect = buttonRef.current.getBoundingClientRect();
    const startX = e.clientX || (e.touches && e.touches[0]?.clientX);
    const startY = e.clientY || (e.touches && e.touches[0]?.clientY);
    
    if (!startX || !startY) return; // Ensure we have valid coordinates
    
    setInitialPosition({
      x: startX - rect.left,
      y: startY - rect.top
    });
    
    setDragging(true);
  };

  const handleTouchStart = (e) => {
    // Note: We can't call preventDefault here due to passive event listener restrictions
    // The browser will handle touch events normally
    handleMouseDown(e.touches[0]);
  };

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (e) => {
      e.preventDefault();
      const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
      const clientY = e.clientY || (e.touches && e.touches[0]?.clientY);
      
      if (clientX && clientY) {
        setPosition({
          x: clientX - initialPosition.x,
          y: clientY - initialPosition.y
        });
        
        // Find the cell that the number is hovering over
        const cells = document.querySelectorAll('input[id^="cell-"]');
        let closestCell = null;
        let minDistance = Infinity;
        
        cells.forEach(cell => {
          if (cell.disabled) return; // Skip disabled cells
          
          const cellRect = cell.getBoundingClientRect();
          const cellCenterX = cellRect.left + cellRect.width / 2;
          const cellCenterY = cellRect.top + cellRect.height / 2;
          
          const distance = Math.sqrt(
            Math.pow(clientX - cellCenterX, 2) + 
            Math.pow(clientY - cellCenterY, 2)
          );
          
          if (distance < minDistance && distance < 60) { // Smaller threshold for hover detection
            minDistance = distance;
            closestCell = cell;
          }
        });
        
        // Update the local state and the parent component
        if (closestCell) {
          setOverCell(closestCell.id);
          setDragOverCell(closestCell.id);
        } else {
          setOverCell(null);
          setDragOverCell(null);
        }
      }
    };

    const handleMouseUp = () => {
      // Find the closest cell to drop the number to
      const cells = document.querySelectorAll('input[id^="cell-"]');
      let closestCell = null;
      let minDistance = Infinity;
      
      cells.forEach(cell => {
        if (cell.disabled) return; // Skip disabled cells
        
        const cellRect = cell.getBoundingClientRect();
        const cellCenterX = cellRect.left + cellRect.width / 2;
        const cellCenterY = cellRect.top + cellRect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(position.x - cellCenterX, 2) + 
          Math.pow(position.y - cellCenterY, 2)
        );
        
        if (distance < minDistance && distance < 120) { // Increased threshold for better UX
          minDistance = distance;
          closestCell = cell;
        }
      });
      
      if (closestCell) {
        // Then call the onDrop function with both the number and the cell ID
        onDrop(number, closestCell.id);
      }
      
      // Clear the drag over state
      setDragOverCell(null);
      setDragging(false);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove, { passive: false });
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);

    // Prevent scrolling while dragging
    if (dragging) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
      
      // Re-enable scrolling when drag ends
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      
      // Clear drag over state if unmounting during drag
      if (dragging) {
        setDragOverCell(null);
      }
    };
  }, [dragging, initialPosition, position, number, onDrop, setDragOverCell]);

  const sizeClasses = isMobile ? 'min-w-9 h-9 text-[0.9rem]' : 'min-w-7 h-7 text-[0.8rem]';

  const stateClasses = dragging
    ? 'fixed z-[1000] border-2 border-white cursor-grabbing pointer-events-none scale-125 opacity-90 bg-[linear-gradient(135deg,#0056b3_0%,#004085_100%)] shadow-[0_8px_20px_rgba(0,123,255,0.5)]'
    : 'static border-0 cursor-grab pointer-events-auto scale-100 opacity-100 bg-[linear-gradient(135deg,#007bff_0%,#0056b3_100%)] shadow-[0_1px_3px_rgba(0,123,255,0.2)]';

  return (
    <button
      ref={buttonRef}
      className={`rounded-[4px] font-semibold text-white transition-all duration-200 [touch-action:none] select-none ${sizeClasses} ${stateClasses}`}
      style={dragging ? { left: `${position.x}px`, top: `${position.y}px` } : undefined}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      title={dragging ? `Dropping on Cell: ${overCell || 'None'}` : `Drag to place number ${number}`}
    >
      {number}
    </button>
  );
};

export default DraggableNumber;
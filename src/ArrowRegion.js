import React from 'react';

export default function ArrowRegion({ left, top, width, height, count, index, active, activateHandler }) {
  
  function handleMouseEnter() {
    activateHandler(index);
  }

  const className = active ? 'arrow-region active' : 'arrow-region';
  return (
    <div className={className} style={{left: left, top: top, width: width, height: height}} onMouseEnter={handleMouseEnter.bind(this)}>
      {count > 1 && (<span className="region-label" aria-hidden="true">{index + 1}</span>)}
    </div>
  );
  
}

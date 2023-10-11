import React from 'react';

export default function ArrowLink({ active, index, activateHandler }) {
  
  function activateRegion(e) {
    e.preventDefault();
    activateHandler(index);
  }

  const className = 'arrow-link' + (active ? ' active' : '');
    
  return (
    <div className={className}>
      <button onClick={activateRegion.bind(this)}>{index + 1}</button>
    </div>
  );
  
}
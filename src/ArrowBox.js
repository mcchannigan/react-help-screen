import React from 'react';
import {CSSTransition} from 'react-transition-group';

export default function ArrowBox({ data, active }) {
  
    const leftPct = data.left.replace('%', '');
    const widthPct = data.regionWidth.replace('%', '');
    let arrLeft = parseInt(leftPct) + (parseInt(widthPct) * 0.5);
    
    const topPct = data.top.replace('%', '');
    const heightPct = data.regionHeight.replace('%', '');
    let arrTop = parseInt(topPct) + (parseInt(heightPct));

    return (
      <div className="arrow-box">
        <div className={'arrow-container'}>
          <div className="arrow">
            <div className="arrow-up" style={{position: 'absolute', left: 'calc(' + arrLeft + '% - 0.5rem', top: arrTop + '%'}}></div>
            <CSSTransition in={active} timeout={200} classNames="stretch-v">
            <div className="arrow-body" style={{position: 'absolute', left: 'calc(' + arrLeft + '% - 0.125rem)', top: 'calc(' + arrTop + '% + 0.75rem', height: 'calc(100% - ' + arrTop + '%)'}}></div>
            </CSSTransition>
          </div>
        </div>
      </div>
      );
}

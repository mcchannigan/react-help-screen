import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';

export default class ArrowBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const leftPct = this.props.data.left.replace('%', '');
    const widthPct = this.props.data.regionWidth.replace('%', '');
    let arrLeft = parseInt(leftPct) + (parseInt(widthPct) * 0.5);
    
    const topPct = this.props.data.top.replace('%', '');
    const heightPct = this.props.data.regionHeight.replace('%', '');
    let arrTop = parseInt(topPct) + (parseInt(heightPct));

    return (
      <div className="arrow-box">
        <div className={'arrow-container'}>
          <div className="arrow">
            <div className="arrow-up" style={{position: 'absolute', left: 'calc(' + arrLeft + '% - 0.5rem', top: arrTop + '%'}}></div>
            <CSSTransition in={this.props.active} timeout={200} classNames="stretch-v">
            <div className="arrow-body" style={{position: 'absolute', left: 'calc(' + arrLeft + '% - 0.125rem)', top: 'calc(' + arrTop + '% + 0.75rem', height: 'calc(100% - ' + arrTop + '%)'}}></div>
            </CSSTransition>
          </div>
        </div>
      </div>
      );
  }
}

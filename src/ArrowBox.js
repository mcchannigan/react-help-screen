import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
import ArrowRegion from './ArrowRegion';

export default class ArrowBox extends Component {
  constructor(props) {
    super(props);
  }

  activate() {
    this.props.activateHandler(this.props.index);
  }

  render() {
    const divClass = this.props.active ? "active" : "hidden";
    
    const leftPct = this.props.data.left.replace('%', '');
    const widthPct = this.props.data.regionWidth.replace('%', '');
    let arrLeft = parseInt(leftPct) + (parseInt(widthPct) * 0.5);
    
    const topPct = this.props.data.top.replace('%', '');
    const heightPct = this.props.data.regionHeight.replace('%', '');
    let arrTop = parseInt(topPct) + (parseInt(heightPct));

    return (
      <div className="arrow-box">
      <ArrowRegion width={this.props.data.regionWidth} height={this.props.data.regionHeight} left={this.props.data.left} top={this.props.data.top} onMouseEnter={this.activate.bind(this)} active={this.props.active} index={this.props.index}/>
        <div className={'arrow-container ' + divClass}>
          
          <div className="arrow">
            <div className="arrow-up" style={{position: 'absolute', left: 'calc(' + arrLeft + '% - 0.5rem', top: arrTop + '%'}}></div>
            <CSSTransition in={this.props.active} timeout={200} classNames="stretch-v">
            <div className="arrow-body" style={{position: 'absolute', left: 'calc(' + arrLeft + '% - 0.125rem)', top: 'calc(' + arrTop + '% + 0.75rem', height: 'calc(100% - ' + arrTop + '% - 2rem)'}}></div>
            </CSSTransition>
          </div>
          <div class="arrow-desc">
          <CSSTransition in={this.props.active} timeout={200} classNames="fade stretch-v">
            <p>{this.props.data.text}</p>
          </CSSTransition>
          </div>
        </div>
      </div>
      );
  }
}

import React, { Component } from 'react';
//import {CSSTransition} from 'react-transition-group';
//import ArrowRegion from './ArrowRegion';

export default class ArrowLink extends Component {
  constructor(props) {
    super(props);
  }

  activateRegion(e) {
    e.preventDefault();
    this.props.activateHandler(this.props.index);
  }

  render() {
    const className = 'arrow-link' + (this.props.active ? ' active' : '');
    return (
      <div className={className}>
        <a href="javascript:void(0)" onClick={this.activateRegion.bind(this)}>{this.props.index + 1}</a>
      </div>
    );
  }
}
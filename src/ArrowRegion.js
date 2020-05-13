import React, { Component } from 'react';

export default class ArrowRegion extends Component {
  constructor(props) {
    super(props);
  }

  handleMouseEnter() {
    this.props.activateHandler(this.props.index);
  }

  render() {
    const className = this.props.active ? 'arrow-region active' : 'arrow-region';
    return (
      <div className={className} style={{left: this.props.left, top: this.props.top, width: this.props.width, height: this.props.height}} onMouseEnter={this.handleMouseEnter.bind(this)}>
        {this.props.count > 1 && (<span className="region-label" aria-hidden="true">{this.props.index + 1}</span>)}
      </div>
      );
  }
}

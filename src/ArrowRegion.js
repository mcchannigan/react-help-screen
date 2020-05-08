import React, { Component } from 'react';

export default class ArrowRegion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const className = this.props.active ? 'arrow-region active' : 'arrow-region';
    return (
      <div className={className} style={{left: this.props.left, top: this.props.top, width: this.props.width, height: this.props.height}} onMouseEnter={this.props.onMouseEnter}>
        <span className="region-label" aria-hidden="true">{this.props.index + 1}</span>
      </div>
      );
  }
}

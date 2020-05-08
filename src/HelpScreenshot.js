import React, { Component, Fragment } from 'react';
//import {CSSTransition} from 'react-transition-group';
import ArrowBox from './ArrowBox';
import ArrowLink from './ArrowLink';

export default class HelpScreenshot extends Component {
  constructor(props) {
    super(props);
    this.state = {activeArrow: 0, arrows: props.data.arrows};
  }

  inactivateArrows(id) {
    this.setState({activeArrow: id});
  }

  render() {
    const boxes = [];
    const boxLinks = [];
    let i = 0;
    for(const arrow of this.state.arrows) {
      boxes.push(<ArrowBox key={i} index={i} data={arrow} active={i == this.state.activeArrow} activateHandler={this.inactivateArrows.bind(this)}/>);
      boxLinks.push(<ArrowLink key={i} index={i} active={i == this.state.activeArrow} activateHandler={this.inactivateArrows.bind(this)}/>);
      i++;
    }
    return (
      <div>
        <div className="screen-container">
          <img className="screenshot" src="https://i.imgur.com/elWJXi8.jpeg"/>
          {boxes}
        </div>
        <div className="region-links-container">
          {boxLinks}
        </div>
      </div>  
    );
  }
}

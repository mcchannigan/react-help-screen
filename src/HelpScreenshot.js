import React, { Component, Fragment } from 'react';
//import {CSSTransition} from 'react-transition-group';
import ArrowBox from './ArrowBox';
import ArrowLink from './ArrowLink';
import RegionDescription from './RegionDescription';

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
    const regions = [];
    let i = 0;
    for(const arrow of this.state.arrows) {
      let active = (i == this.state.activeArrow);
      boxes.push(<ArrowBox key={i} index={i} data={arrow} active={active} activateHandler={this.inactivateArrows.bind(this)}/>);
      boxLinks.push(<ArrowLink key={i} index={i} active={active} activateHandler={this.inactivateArrows.bind(this)}/>);
      regions.push(<RegionDescription text={arrow.text} active={active}/>)
      i++;
    }
    return (
      <div>
        <div className="screen-container">
          <img className="screenshot" src={this.props.data.src} alt={this.props.data.description + ' Descriptions of components of the image follow.'}/>
          {boxes}
        </div>
        <div className="region-desc-container">
          {regions}
        </div>
        <div className="region-links-container" aria-hidden="true">
          {boxLinks}
        </div>
      </div>  
    );
  }
}

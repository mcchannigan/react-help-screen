import React, { Component, Fragment } from 'react';
import AnimateHeight from 'react-animate-height';
import ArrowRegion from './ArrowRegion';
import ArrowBox from './ArrowBox';
import ArrowLink from './ArrowLink';
import RegionDescription from './RegionDescription';

export default class HelpScreenshot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeArrow: 0,               // index of the currently active arrow region
      descHeight: 'auto',           // Manages CSS height of the description box for animation
      arrows: props.data.arrows,    // Arrow region and description data
      animationDuration: 200        // The animation duration in ms
    };
  }

  inactivateArrows(id) {
    // descHeight to 0 to initiate height animation
    this.setState({activeArrow: id, descHeight: 0});
    //setTimeout(() => {this.setState({descHeight: 'auto'})}, this.state.animationDuration);
  }

  render() {
    const boxes = [];
    const boxLinks = [];
    const regions = [];
    let activeArrow;
    let i = 0;
    // Build region and description arrays
    for(const arrow of this.state.arrows) {
      let active = (i == this.state.activeArrow);
      if(active) {
        activeArrow = arrow;
      }
      boxes.push(<ArrowRegion key={i} width={arrow.regionWidth} height={arrow.regionHeight} left={arrow.left} top={arrow.top} activateHandler={this.inactivateArrows.bind(this)} active={active} index={i} count={this.state.arrows.length}/>);
      boxLinks.push(<ArrowLink key={i} index={i} active={active} activateHandler={this.inactivateArrows.bind(this)}/>);
      regions.push(<RegionDescription key={i} text={arrow.text} active={active}/>)
      i++;
    }

    // Allow for one frame at 0 height before setting back to auto
    const dh = this.state.descHeight;
    if(dh == 0) {
      this.setState({descHeight: 'auto'});
    }

    return (
      <div className="screen-desc-container">
        <div className="screen-container">
          <img className="screenshot" src={this.props.data.src} alt={this.props.data.description + ' Descriptions of components of the image follow.'}/>
          <ArrowBox data={activeArrow}/>
          {boxes}
        </div>
        <AnimateHeight
          duration={this.state.animationDuration}
          height={dh}
          easing="ease-out"
        >
          <div className="region-desc-container">
            {regions}
          </div>
        </AnimateHeight>
        <div className="region-links-container" aria-hidden="true">
          {boxLinks.length > 1 && boxLinks}
        </div>
      </div>  
    );
  }
}

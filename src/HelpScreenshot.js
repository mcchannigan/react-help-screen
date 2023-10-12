import React, {useState} from 'react';
import AnimateHeight from 'react-animate-height';
import ArrowRegion from './ArrowRegion';
import ArrowBox from './ArrowBox';
import ArrowLink from './ArrowLink';
import RegionDescription from './RegionDescription';

export default function HelpScreenshot({data}) {

    const [activeArrow, setActiveArrow] = useState(0);                // index of the currently active arrow region
    const [descHeight, setDescHeight] = useState('auto');             // Manages CSS height of the description box for animation
    const [arrows] = useState(data.arrows);                // Arrow region and description data
    const [animationDuration] = useState(200);  // The animation duration in ms


  function inactivateArrows(id) {
    // descHeight to 0 to initiate height animation
    setActiveArrow(id);
    setDescHeight(0);
  }

  const boxes = [];
  const boxLinks = [];
  const regions = [];
  const arrowCount = arrows.length;
  let descClass = arrowCount > 1 ? '' : ' single-description';
  let activeArrowObj;
  let i = 0;
  // Build region and description arrays
  for(const arrow of arrows) {
    let active = (i === activeArrow);
    if(active) {
      activeArrowObj = arrow;
    }
    boxes.push(<ArrowRegion key={i} width={arrow.regionWidth} height={arrow.regionHeight} left={arrow.left} top={arrow.top} activateHandler={inactivateArrows.bind(this)} active={active} index={i} count={arrows.length}/>);
    boxLinks.push(<ArrowLink key={i} index={i} active={active} activateHandler={inactivateArrows.bind(this)}/>);
    regions.push(<RegionDescription key={i} text={arrow.text} active={active}/>)
    i++;
  }

  // Allow for one frame at 0 height before setting back to auto
  const dh = descHeight;
  if(dh === 0) {
    setDescHeight('auto');
  }

  if(arrowCount === 0) {
    return (
      <div className="screen-desc-container">
        <div className="screen-container">
          <img className="screenshot" src={data.src} alt={data.description}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="screen-desc-container">
        <div className="screen-container">
          <img className="screenshot" src={data.src} alt={data.description + ' Descriptions of components of the image follow.'}/>
            <ArrowBox data={activeArrowObj}/>
          {boxes}
        </div>
        <AnimateHeight
          duration={animationDuration}
          height={dh}
          easing="ease-out"
        >
          <div className={'region-desc-container' + descClass}>
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

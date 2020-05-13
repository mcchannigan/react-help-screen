import React from 'react';
import ReactMarkdown from 'react-markdown';
import {CSSTransition} from 'react-transition-group';

export default function RegionDescription(props) {
    const divClass = props.active ? "active" : "hidden";
    return (
      <div className={"arrow-desc " + divClass}>
        <CSSTransition in={props.active} timeout={200} classNames="fade stretch-v">
          <ReactMarkdown source={props.text}/>
        </CSSTransition>
      </div>
    );
}
import React, {useState, useEffect, useRef} from 'react';
import ReactMarkdown from 'react-markdown';
import HelpScreenshot from './HelpScreenshot';
import Navigation from './Navigation';
import makeHeaderId from './utils';

export default function GuidePage({page, helpData, markdown}) {
  const renderers = {
      root : (p) => {
        const children = p.children;
        const TOCLines = children.reduce((acc, { key, props }) => {
          // Skip non-headings and h4 or greater
          if (key.indexOf('heading') !== 0 || props.level > 3) {
            return acc;
          }
          // Indent by two spaces per heading level after h1
          let indent = '';
          for (let idx = 1; idx < props.level; idx++) {
            indent = `${indent}  `;
          }
  
          // Append line to TOC
          const id = makeHeaderId(props.children[0].props.children);
          return acc.concat([`${indent}* [${props.children[0].props.children}](#${id})`]);
        }, []);
  
        return (
          <div className="guide-content">
            <div className="toc-container">
              <h1>Contents</h1>
              <ReactMarkdown source={TOCLines.join("\n")} />
            </div>
            <div className="page-content">
              {children}
            </div>
          </div>
        );
      },
      heading : (p) => {
        // Set id based on text of heading
        const id = makeHeaderId(p.children[0].props.children);
        switch(p.level) {
          case(1):
            return (<h1 id={id}>{p.children}</h1>);
          case(2):
            return (<h2 id={id}>{p.children}</h2>);
          case(3):
            return (<h3 id={id}>{p.children}</h3>);
          case(4):
            return (<h4>{p.children}</h4>);
          default:
            return (<h5>{p.children}</h5>);
        }
      },
      paragraph : (props) => {
          const text = props.children[0].props.children;
          // Paragraphs of format "{x}" will output screenshots
          const match = text.match(/\{(.+)\}/);
          if(match) {
              return <HelpScreenshot data={currentHelpData[match[1]]} />;
          } else {
              return (<p>{props.children}</p>);
          }
      }
    };
  
    
  const [currentPage] = useState(page);
  const [scrolled, setScrolled] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [currentHelpData] = useState(helpData);

  const mountedRef = useRef(false);
  useEffect(() => {
    if(!mountedRef.current) {
      // mount
      mountedRef.current = true;
    } else {
      if(!contentLoaded) {
        if(document.querySelector('p')) {
          document.querySelector('.guide-container').style.opacity = 1;
          setContentLoaded(true);
        }
      }
      if(!scrolled && window.location.hash.length > 0) {
        let element = document.getElementById(window.location.hash.substring(1));
        if(element != null) {
          //element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
          window.scrollTo(0, element.offsetTop);
          setScrolled(true);
        }
      }
    }
  });
  
  return (
      <div className="guide-container">
          <Navigation page={currentPage} pageCount={markdown.length}/>
          <ReactMarkdown source={markdown[currentPage - 1]} renderers={renderers} escapeHtml={false}/>
      </div>
  );
}
  
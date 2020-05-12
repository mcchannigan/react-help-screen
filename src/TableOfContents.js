import React from 'react';
import ReactMarkdown from 'react-markdown';

function makeHeaderId(inStr) {
    return inStr.toLowerCase().replace(' ', '-');
}

export const renderers = {
    root : function(p) {
      const children = p.children;
      const TOCLines = children.reduce((acc, { key, props }) => {
        // Skip non-headings
        if (key.indexOf('heading') !== 0) {
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
        <div>
          <ReactMarkdown source={TOCLines.join("\n")} />
          {children}
        </div>
      );
    },
    heading : function(p) {
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
          return (<h4 id={id}>{p.children}</h4>);
        default:
          return (<h5 id={id}>{p.children}</h5>);
      }
    },
    paragraph : (props) => {
        const text = props.children[0].props.children;
        const match = text.match(/\{(.+)\}/);
        if(match) {
            console.log(this);
            console.log(props);
            console.log(match[1]);
            return null;
        } else {
            return (<p>{props.children}</p>);
        }
    }
  };
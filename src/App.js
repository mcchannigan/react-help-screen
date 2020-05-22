import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import HelpScreenshot from './HelpScreenshot';
import './App.css';


export default class App extends Component {
  renderers = {
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
        const id = this.makeHeaderId(props.children[0].props.children);
        return acc.concat([`${indent}* [${props.children[0].props.children}](#${id})`]);
      }, []);

      return (
        <div className="guide-container">
          <div className="toc-container">
            <h1>Table of Contents</h1>
            <ReactMarkdown source={TOCLines.join("\n")} />
          </div>
          {children}
        </div>
      );
    },
    heading : (p) => {
      // Set id based on text of heading
      const id = this.makeHeaderId(p.children[0].props.children);
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
            return <HelpScreenshot data={this.state.helpData[match[1]]} />;
        } else {
            return (<p>{props.children}</p>);
        }
    }
  };

  constructor() {
    super();
    
    this.state = {
      name: 'React',
      helpData: require('./assets/help.json')
    };
  }

  componentDidMount() {
    const markdownPath = require("./assets/body.md");

    fetch(markdownPath)
    .then(response => {
      return response.text()
    })
    .then(text => {
      this.setState({
        markdown: text
      });
    });
  }

  makeHeaderId(inStr) {
    return inStr.toLowerCase().replace(/ /g, '-');
  }

  render() {
    return (
        <ReactMarkdown source={this.state.markdown} renderers={this.renderers} escapeHtml={false}/>
    );
  }
}


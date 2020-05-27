import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import GuidePage from './GuidePage';
import './App.css';


export default class App extends Component {

  constructor() {
    super();
    
    this.state = {
      name: 'React',
      markdownPages: [],
      helpData: require('./assets/help.json')
    };
  }

  makeRenderer(page) {
    return {
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
          return acc.concat([`${indent}* [${props.children[0].props.children}](/page/${page}#${id})`]);
        }, []);
  
        return (
          <div className="guide-container">
            <div className="toc-container">
              <h2>Page {page}</h2>
              <ReactMarkdown source={TOCLines.join("\n")} />
            </div>
          </div>
        );
      }
    }
  }

  componentDidMount() {
    const markdownPaths = [
      require("./assets/body.md"), 
      require("./assets/page2.md"), 
      require("./assets/page3.md"), 
      require("./assets/page4.md")
    ];

    for(let i = 0; i < markdownPaths.length; i++) {
      const markdownPath = markdownPaths[i];
      fetch(markdownPath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        const mkdownArray = this.state.markdownPages.slice();
        mkdownArray.push(text);
        this.setState({
          markdownPages: mkdownArray
        });
      });
    }
  }

  makeHeaderId(inStr) {
    return inStr.toLowerCase().replace(/ /g, '-');
  }

  render() {
    const tocPages = [];
    for (let i = 0; i < this.state.markdownPages.length; i++) {
      tocPages.push(<ReactMarkdown key={i} source={this.state.markdownPages[i]} renderers={this.makeRenderer(i + 1)}/>);
    }

    return (
      <Router>
        <div className="page-container">
        <Switch>
          <Route exact path="/">
            <h1>Table of Contents</h1>
            {tocPages}
          </Route>
          <Route path="/page/:id" component={props => <GuidePage markdown={this.state.markdownPages} helpData={this.state.helpData} page={props.match.params.id}/>}>
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

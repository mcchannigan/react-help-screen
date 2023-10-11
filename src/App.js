import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import GuidePage from './GuidePage';
import makeHeaderId from './utils';
import './App.css';


export default function App() {
  let hd = null;
  if(process.env.REACT_APP_GUIDE_TYPE === 'admin') {
    hd = require('./assets/help-admin.json');
  } else if(process.env.REACT_APP_GUIDE_TYPE === 'student') {
    hd = require('./assets/help-student.json');
  } else if(process.env.REACT_APP_GUIDE_TYPE === 'nonuh') {
    hd = require('./assets/help-nonuh.json')
  } else {
    hd = require('./assets/help.json');
  }
  const [markdownPages, setMarkdownPages] = useState([]);
  const [page, setPage] = useState(null);
  const [helpData] = useState(hd);

  function makeRenderer(page) {
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
          const id = makeHeaderId(props.children[0].props.children);
          return acc.concat([`${indent}* [${props.children[0].props.children}](?page=${page}#${id})`]);
        }, []);
  
        return (
          <div className="guide-content">
            <div className="toc-container main-toc">
              <h2><a href={'?page=' + page}>Page {page}</a></h2>
              <ReactMarkdown source={TOCLines.join("\n")} />
            </div>
          </div>
        );
      }
    }
  }

  function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
  }

  const mountedRef = useRef(false);
  useEffect(() => {
    if(!mountedRef.current) {
      let page = null;
      let markdownPaths = null;
      let docTitle = "SECE Guide";
      if(process.env.REACT_APP_GUIDE_TYPE === 'admin') {
        markdownPaths = [require("./assets/admin.md")];
        page = 1;
        docTitle += " for Administrators";
      } else if(process.env.REACT_APP_GUIDE_TYPE === 'student') {
        markdownPaths = [require("./assets/student.md")];      
        page = 1;
        docTitle += " for Students";
      } else if(process.env.REACT_APP_GUIDE_TYPE === 'nonuh') {
        markdownPaths = [require("./assets/nonuh.md")];      
        page = 1;
        docTitle += " for Non-UH Employers";
      } else {
        markdownPaths = [
          require("./assets/body.md"), 
          require("./assets/page2.md"), 
          require("./assets/page3.md"), 
          require("./assets/page4.md"),
          require("./assets/page5.md")
        ];
        page = getQueryVariable('page');
        docTitle += " for UH Employers";
      }
      document.title = docTitle;

      const mkdownArray = Array(markdownPaths.length);
      let pagesFetched = 0;
      for(let i = 0; i < markdownPaths.length; i++) {
        const markdownPath = markdownPaths[i];
        fetch(markdownPath)
        .then(response => {
          return response.text();
        })
        .then(text => {
          mkdownArray[i] = text;
          pagesFetched++;

          if(pagesFetched == markdownPaths.length) {
            setMarkdownPages(mkdownArray);
          }
        });
      }

      if(page != null) {
        setPage(page);
      }
      mountedRef.current = true;
    }
  });

  
  const tocPages = [];
  const pageCount = markdownPages.length; 
  for (let i = 0; i < pageCount; i++) {
    tocPages.push(<ReactMarkdown key={i} source={markdownPages[i]} renderers={makeRenderer(i + 1)}/>);
  }
  if(page != null) {
    return (
      <div className="page-container">
        <GuidePage markdown={markdownPages} helpData={helpData} page={page}/>
      </div>
    );
  } else if (pageCount == 0) {
    return (
      <div className="page-container"></div>
    );
  } else {
    return (
      <div className="page-container">
        <div className="page-content main-toc">
          <h1>Guide for UH Employers</h1>
          <p>This guide was adapted from a PDF version, which is available <a href="http://hawaii.edu/sece/forms/Employer-Handbook-2.pdf">here</a>.</p>
          <h2>Table of Contents</h2>
          {tocPages}
        </div>
      </div>
    );
  }
}

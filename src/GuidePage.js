import React, {useState, useEffect, useRef} from 'react';
import ReactMarkdown from 'react-markdown';
import HelpScreenshot from './HelpScreenshot';
import Navigation from './Navigation';
import makeHeaderId from './utils';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import HeadingObserver from './HeadingObserver';

export default function GuidePage({page, helpData, markdown}) {
  let tableOfContents = [];
  const renderers = {
    h1(p) {
      // Set id based on text of heading
      const id = makeHeaderId(p.children);
      tableOfContents.push(`* [${p.children}](#${id})`);
      return (<h1 id={id}>{p.children}</h1>);
    },
    h2(p) {
      const id = makeHeaderId(p.children);
      tableOfContents.push(`  * [${p.children}](#${id})`);
      return (<h2 id={id}>{p.children}</h2>);
    },
    h3(p) {
      const id = makeHeaderId(p.children);
      tableOfContents.push(`    * [${p.children}](#${id})`);
      return (<h3 id={id}>{p.children}</h3>);
    },
    p(props) {
        const text = props.children;
        // Paragraphs of format "{x}" will output screenshots
        const match = Array.isArray(text) ? false : text.match(/\{(.+)\}/);
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
  const [tocList, setTocList] = useState(null);

  const mountedRef = useRef(false);
  useEffect(() => {
    if(!mountedRef.current) {
      // mount
      mountedRef.current = true;
    } else {
      if(!contentLoaded) {
        if(document.querySelector('p')) {
          setTocList(tableOfContents.join('\n'));
          document.querySelector('.guide-container').style.opacity = 1;
          setContentLoaded(true);
        }
      }
      if(!scrolled && window.location.hash.length > 0) {
        let element = document.getElementById(window.location.hash.substring(1));
        if(element != null) {
          window.scrollTo(0, (element.offsetTop - element.offsetHeight));
          setScrolled(true);
        }
      }
    }
  });
  
  return (
      <div className="guide-container">
          <Navigation page={currentPage} pageCount={markdown.length}/>
          <div className="guide-content">
            <aside className="toc-container">
              <h1>Contents</h1>
              <ReactMarkdown>{tocList}</ReactMarkdown>
            </aside>
            <article className="page-content">
              <ReactMarkdown components={renderers} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{markdown[currentPage - 1]}</ReactMarkdown>
            </article>
          </div>
          <HeadingObserver/>
      </div>
  );
}
  
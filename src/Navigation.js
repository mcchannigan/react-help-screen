import React from 'react';

export default function Navigation(props) {
    return (
    <nav className={`page-nav ${props.footer ? "bottom" : ""}`}>
        <div className="page-link">
        {props.page > 1 && 
            (<a href={'?page=' + (parseInt(props.page) - 1)}>Previous Page</a>)
        }
        </div>
        <div className="page-link">
            {props.pageCount > 1 && (<a href=".">Table of Contents</a>)}
        </div>
        <div className="page-link">
        {props.page < props.pageCount &&
            (<a href={'?page=' + (parseInt(props.page) + 1)}>Next Page</a>)
        }
        </div>
    </nav>
    );
}
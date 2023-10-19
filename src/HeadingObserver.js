import { useEffect, useRef } from "react";

export default function HeadingObserver() {
    const previousEntry = useRef(null);
    useEffect(() => {
        // Set up observer for TOC headings
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    document.querySelector(`.toc-container a[href="#${entry.target.id}"]`).classList.add('visible');
                } else {
                    document.querySelector(`.toc-container a[href="#${entry.target.id}"]`).classList.remove('visible');
                }
            });

            document.querySelectorAll(`.toc-container a.active`).forEach((element) => {
                element.classList.remove('active');
            });
            let firstVisible = document.querySelector('.toc-container a.visible');
            if(firstVisible) {
                // Choose first header on screen (if any)
                firstVisible.classList.add('active');
                previousEntry.current = firstVisible;
            } else {
                // No headers on screen. Check if we are above or below previous entry
                if(previousEntry.current) {
                    let href = previousEntry.current.getAttribute("href");
                    let boundingRect = document.querySelector(href).getBoundingClientRect();
                    if(boundingRect.top > 0) {
                        // activate previous header
                        let prevLink = null;
                        let prevEl = null;
                        document.querySelectorAll('.toc-container a').forEach((el) => {
                            if(el.getAttribute('href') === href) {
                                prevLink = prevEl;
                            }
                            prevEl = el;
                        });
                        if(prevLink) {
                            previousEntry.current = prevLink;
                        }
                    }
                    previousEntry.current.classList.add('active');
                }
            }
        }, 
        {
            root : null,
            rootMargin : "0px",
            threshold : [0.0, 1.0]
        });

        document.querySelectorAll(".page-content h1, .page-content h2, .page-content h3").forEach((element) => {
            observer.observe(element);
        });
    });

    return null;
}
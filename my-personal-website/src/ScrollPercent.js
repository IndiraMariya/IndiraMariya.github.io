import React, { useEffect, useRef } from 'react';

const ScrollPercent = () => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const element = document.documentElement;
    const body = document.body;
    const scrollTop = 'scrollTop';
    const scrollHeight = 'scrollHeight';
    const progressBar = progressBarRef.current;

    const handleScroll = () => {
      const scroll = (element[scrollTop] || body[scrollTop]) / ((element[scrollHeight] || body[scrollHeight]) - element.clientHeight) * 100;
      progressBar.style.setProperty('--scroll', scroll -2 + '%');
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="progress-bar" ref={progressBarRef}></div>;
};

export default ScrollPercent;

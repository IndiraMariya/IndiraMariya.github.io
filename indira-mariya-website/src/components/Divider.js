import React, { useEffect, useRef, useState } from 'react';

function measureCharWidth(font, letterSpacing) {
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  ctx.font = font;
  return ctx.measureText('~').width + letterSpacing;
}

function Divider() {
  const ref = useRef(null);
  const [count, setCount] = useState(100);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      const computed = window.getComputedStyle(el.querySelector('.dash-line'));
      const charWidth = measureCharWidth(
        `${computed.fontWeight} ${computed.fontSize} ${computed.fontFamily}`,
        parseFloat(computed.letterSpacing) || 0
      );
      const containerWidth = el.offsetWidth * 0.95;
      setCount(Math.ceil(containerWidth / charWidth));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="divider" ref={ref}>
      <span className="dash-line">{'~'.repeat(count)}</span>
    </div>
  );
}

export default Divider;
import React, { useEffect, useRef, useState } from 'react';

const SCRAMBLE = '#&%@01<>/{}[]=*+';

function DecryptText({ text, className }) {
  const [display, setDisplay] = useState(text);
  const ref = useRef({ raf: null, start: 0 });

  useEffect(() => {
    const REVEAL_MS = 2000;      // whole thing resolves in under a second
    const SCRAMBLE_TICK = 150;   // ms between scramble changes (slower movement)
    let lastScramble = 0;
    let cache = text.split('');

    const step = (now) => {
      if (!ref.current.start) ref.current.start = now;
      const elapsed = now - ref.current.start;
      const revealed = Math.floor((elapsed / REVEAL_MS) * text.length);

      const changeScramble = now - lastScramble > SCRAMBLE_TICK;
      if (changeScramble) lastScramble = now;

      let out = '';
      for (let i = 0; i < text.length; i++) {
        if (i < revealed || text[i] === ' ') {
          out += text[i];
        } else {
          if (changeScramble) {
            cache[i] = SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)];
          }
          out += cache[i];
        }
      }
      setDisplay(out);

      if (revealed <= text.length) {
        ref.current.raf = requestAnimationFrame(step);
      } else {
        setDisplay(text);
      }
    };

    ref.current.raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(ref.current.raf);
  }, [text]);

  return <span className={className} aria-label={text}>{display}</span>;
}

export default DecryptText;

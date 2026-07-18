import React, { useEffect, useRef } from 'react';

const SYMBOLS = '#'.split('');
const LOWERCASE = '&%'.split('');

function pickChar() {
  return Math.random() < 0.75
    ? SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
    : LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)];
}

const COLORS = ['rgba(90, 110, 200, 0.33)'];

const AVOID_PAD = 10;
const RIPPLE_RADIUS = 140;
const RIPPLE_STRENGTH = 7.0;

function getResponsiveValues(w) {
  if (w >= 1600) return { count: 130, size: 32 };
  if (w >= 1200) return { count: 90, size: 28 };
  if (w >= 900)  return { count: 50, size: 26 };
  return                { count: 30,  size: 24 };
}

function overlapsBox(x, y, r, box) {
  if (!box) return false;
  return (
    x + r > box.x && x - r < box.x + box.w &&
    y + r > box.y && y - r < box.y + box.h
  );
}

function makeParticle(canvasW, canvasH, box, size) {
  const angle = Math.random() * Math.PI * 2;
  const speed = 0.5;
  let x, y, tries = 0;
  do {
    x = 16 + Math.random() * (canvasW - 32);
    y = 16 + Math.random() * (canvasH - 32);
    tries++;
  } while (overlapsBox(x, y, 20, box) && tries < 60);

  return {
    x, y,
    char: pickChar(),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    baseSpeed: speed,
    alpha: 0.62 + Math.random() * 0.28,
    charTimer: 0,
    charInterval: 100 + Math.random() * 200,
    rippleVx: 0,
    rippleVy: 0,
  };
}

function AsciiParticles({ nameRef }) {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    particles: [],
    mouse: { x: -9999, y: -9999 },
    nameBox: null,
    raf: null,
    W: 0,
    H: 0,
  });

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const state = stateRef.current;
    const parent = canvas.parentElement;

    function measureName() {
      if (!nameRef?.current) return null;
      const nr = nameRef.current.getBoundingClientRect();
      const pr = parent.getBoundingClientRect();
      // scale DOM coords into canvas pixel space (handles zoom / font reflow)
      const scaleX = canvas.width / pr.width;
      const scaleY = canvas.height / pr.height;
      return {
        x: (nr.left - pr.left) * scaleX - AVOID_PAD,
        y: (nr.top - pr.top) * scaleY - AVOID_PAD,
        w: nr.width * scaleX + AVOID_PAD * 2,
        h: nr.height * scaleY + AVOID_PAD * 2,
      };
    }


    function resize() {
      state.W = parent.offsetWidth;
      state.H = parent.offsetHeight;
      canvas.width = state.W;
      canvas.height = state.H;
      state.nameBox = measureName();
      const { count, size } = getResponsiveValues(state.W);
      state.particles = Array.from({ length: count }, () =>
        makeParticle(state.W, state.H, state.nameBox, size)
      );
    }

    function tick() {
      const { W, H, particles, mouse } = state;
      state.nameBox = measureName();
      const nameBox = state.nameBox;
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < RIPPLE_RADIUS && dist > 0) {
          const force = (1 - dist / RIPPLE_RADIUS) * RIPPLE_STRENGTH;
          p.rippleVx += (dx / dist) * force * 0.35;
          p.rippleVy += (dy / dist) * force * 0.35;
        }
        p.rippleVx *= 0.78;
        p.rippleVy *= 0.78;

        const nx = p.x + p.vx + p.rippleVx;
        const ny = p.y + p.vy + p.rippleVy;

        if (overlapsBox(nx, ny, p.size * 0.6, nameBox)) {
          if (nameBox) {
            const cx = nameBox.x + nameBox.w / 2;
            const cy = nameBox.y + nameBox.h / 2;
            const edx = p.x - cx;
            const edy = p.y - cy;
            const elen = Math.sqrt(edx * edx + edy * edy) || 1;
            const spd = p.baseSpeed * 1.4;
            p.vx = (edx / elen) * spd;
            p.vy = (edy / elen) * spd;
          }
        } else {
          p.x = nx;
          p.y = ny;
        }

        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx); }
        if (p.x > W) { p.x = W; p.vx = -Math.abs(p.vx); }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy); }
        if (p.y > H) { p.y = H; p.vy = -Math.abs(p.vy); }

        p.charTimer++;
        if (p.charTimer > p.charInterval) {
          p.char = pickChar();
          p.charTimer = 0;
          p.charInterval = 100 + Math.random() * 200;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.font = `${p.size}px 'Roboto Mono', 'Courier New', monospace`;
        ctx.fillStyle = p.color;
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();
      }

      state.raf = requestAnimationFrame(tick);
    }

    function onClick(e) {
      const r = parent.getBoundingClientRect();
      const cx = e.clientX - r.left;
      const cy = e.clientY - r.top;
      for (const p of state.particles) {
        const dx = p.x - cx;
        const dy = p.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < 260) {
          const force = (1 - dist / 260) * 22;
          p.rippleVx += (dx / dist) * force;
          p.rippleVy += (dy / dist) * force;
        }
      }
    }


    function onMouseMove(e) {
      const r = parent.getBoundingClientRect();
      state.mouse.x = e.clientX - r.left;
      state.mouse.y = e.clientY - r.top;
    }
    function onMouseLeave() {
      state.mouse.x = -9999;
      state.mouse.y = -9999;
    }

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    resize();
    tick();

    parent.addEventListener('mousemove', onMouseMove);
    parent.addEventListener('mouseleave', onMouseLeave);
    parent.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(state.raf);
      ro.disconnect();
      parent.removeEventListener('mousemove', onMouseMove);
      parent.removeEventListener('mouseleave', onMouseLeave);
      parent.removeEventListener('click', onClick);
    };
  }, [nameRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}

export default AsciiParticles;
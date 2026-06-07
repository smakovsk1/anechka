import { useEffect, useRef } from 'react';
import './App.css';

const SYMBOLS = ['🌸', '🌺', '🌹', '🌷', '💮', '🪷'];

function Petals() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    for (let i = 0; i < 18; i++) {
      const el = document.createElement('div');
      el.className = 'petal';
      el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      el.style.left = Math.random() * 100 + '%';
      el.style.animationDuration = (6 + Math.random() * 8) + 's';
      el.style.animationDelay = (Math.random() * 10) + 's';
      el.style.fontSize = (14 + Math.random() * 14) + 'px';
      container.appendChild(el);
    }
  }, []);

  return <div className="petals-bg" ref={containerRef} />;
}

function Heart() {
  return (
    <svg className="heart-svg" viewBox="0 0 420 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="hg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ff8fb0" />
          <stop offset="45%" stopColor="#f05585" />
          <stop offset="100%" stopColor="#c0305a" />
        </radialGradient>
        <radialGradient id="shine" cx="38%" cy="32%" r="30%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <path
        d="M210 352 C110 285 32 220 32 142 C32 88 70 50 118 50 C152 50 180 68 210 92 C240 68 268 50 302 50 C350 50 388 88 388 142 C388 220 310 285 210 352Z"
        fill="url(#hg)"
      />
      <path
        d="M210 352 C110 285 32 220 32 142 C32 88 70 50 118 50 C152 50 180 68 210 92 C240 68 268 50 302 50 C350 50 388 88 388 142 C388 220 310 285 210 352Z"
        fill="url(#shine)"
      />
      <path
        d="M100 88 C84 106 75 128 78 154"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function App() {
  return (
    <div className="app">
      <Petals />
      <div className="scene">
        <div className="heart-wrap">
          <Heart />
          <div className="heart-text">
            <span className="heart-line1">Анечка</span>
            <span className="heart-line2">ты самый прекрасный цветочек</span>
          </div>
        </div>
        <div className="flowers-row">
          {['🌸', '🌺', '🌹', '🌷', '🌸'].map((f, i) => (
            <span key={i} className="flower">{f}</span>
          ))}
        </div>
        <p className="tagline">з любов'ю · с любовью · махаббатпен</p>
      </div>
    </div>
  );
}

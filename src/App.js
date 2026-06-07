import { useEffect, useRef, useState } from 'react';
import './App.css';

const CHOCOS = ['🍫','🍬','🍭','🍩','🍪','🧁'];
const LABELS = ['болтушка','ты ваще не тут','пипяу','западный кз','туууууй','повалили','бебебе','вафлэ','чечетка','ццц'];
const POSITIONS = [
  {top:'12%',left:'8%'},{top:'10%',left:'62%'},{top:'20%',left:'85%'},
  {top:'70%',left:'70%'},{top:'90%',left:'55%'},{top:'82%',left:'10%'},
  {top:'68%',left:'8%'},{top:'6%',left:'35%'},{top:'45%',left:'75%'},{top:'42%',left:'25%'},
];
const ROTATIONS = [-8,5,-4,7,-6,3,-10,6,-3,8];
const COLORS = ['#c0305a','#a0206a','#d04070','#8b1a3a','#b03060','#c84878','#903050','#d05080','#a82858','#b83868'];
const SIZES = [22,26,24,28,23,25,27,22,26,30];

function Background() {
  const ref = useRef(null);
  useEffect(() => {
    const container = ref.current;
    for (let i = 0; i < 22; i++) {
      const el = document.createElement('div');
      el.className = 'item';
      el.textContent = CHOCOS[Math.floor(Math.random() * CHOCOS.length)];
      el.style.fontSize = (16 + Math.random() * 14) + 'px';
      el.style.left = Math.random() * 100 + '%';
      el.style.animationDuration = (5 + Math.random() * 7) + 's';
      el.style.animationDelay = (Math.random() * 10) + 's';
      container.appendChild(el);
    }
  }, []);
  return <div className="bg" ref={ref} />;
}

function FloatingLabels() {
  return LABELS.map((text, i) => (
    <div
      key={i}
      className="floating-label"
      style={{
        top: POSITIONS[i].top,
        left: POSITIONS[i].left,
        '--rot': ROTATIONS[i] + 'deg',
        color: COLORS[i],
        fontSize: SIZES[i] + 'px',
        animationDelay: `${0.3 + i * 0.2}s, ${1.5 + i * 0.3}s`,
        animationDuration: `1s, ${3 + i * 0.4}s`,
      }}
    >
      {text}
    </div>
  ));
}

function Popup({ onClose }) {
  return (
    <div className="popup-overlay show">
      <div className="popup-bg" onClick={onClose} />
      <div className="popup-card">
        <span className="popup-hearts">💕</span>
        <span className="popup-text">Я тебя люблю</span>
        <span className="popup-sub">навсегда и всегда 🌸</span>
        <br />
        <button className="popup-close" onClick={onClose}>закрыть</button>
        <div className="player-wrap">
  <iframe
    src="https://www.youtube.com/embed/tRAoxHdkFDQ?autoplay=0&controls=1"
    title="Моргенштерн - Пососи"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
    allowFullScreen
  />
</div>
      </div>
    </div>
  );
}

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="app">
      <Background />
      <FloatingLabels />
      <div className="scene">
        <div className="heart-wrap">
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
            <path d="M210 352 C110 285 32 220 32 142 C32 88 70 50 118 50 C152 50 180 68 210 92 C240 68 268 50 302 50 C350 50 388 88 388 142 C388 220 310 285 210 352Z" fill="url(#hg)" />
            <path d="M210 352 C110 285 32 220 32 142 C32 88 70 50 118 50 C152 50 180 68 210 92 C240 68 268 50 302 50 C350 50 388 88 388 142 C388 220 310 285 210 352Z" fill="url(#shine)" />
            <path d="M100 88 C84 106 75 128 78 154" stroke="rgba(255,255,255,0.35)" strokeWidth="9" strokeLinecap="round" fill="none" />
          </svg>
          <div className="heart-text">
            <span className="heart-line1">Анечка</span>
            <span className="heart-line2">ты самый прекрасный цветочек</span>
          </div>
        </div>
        <div className="flowers-row">
          {['🌸','🌺','🌹','🌷','🌸'].map((f, i) => <span key={i} className="flower">{f}</span>)}
        </div>
        <p className="tagline">з любов'ю · с любовью · махаббатпен</p>
        <button className="love-btn" onClick={() => setShowPopup(true)}> Нажми меня</button>
      </div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

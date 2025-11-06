import React from 'react';
import './Programiz.css';
import { useNavigate } from 'react-router-dom';

function Programiz() {
  const navigate = useNavigate();

  return (
    <div className="programiz-container">
      <h1 className="programiz-title">Learn Programming for Free</h1>
      <p className="programiz-subtitle">Explore tutorials in multiple languages, anytime, anywhere.</p>

      <div className="button-grid">
        <button onClick={() => navigate('/Python')} className="btn">Python</button>
        <button onClick={() => navigate('/SQL')} className="btn">SQL</button>
        <button onClick={() => navigate('/R')} className="btn">R</button>
        <button onClick={() => navigate('/HTML')} className="btn">HTML</button>
        <button onClick={() => navigate('/CSS')} className="btn">CSS</button>
        <button onClick={() => navigate('/JavaScript')} className="btn">JavaScript</button>
        <button onClick={() => navigate('/TypeScript')} className="btn">TypeScript</button>
        <button onClick={() => navigate('/Java')} className="btn">Java</button>
        <button onClick={() => navigate('/C')} className="btn">C</button>
        <button onClick={() => navigate('/Cpp')} className="btn">C++</button>
        <button onClick={() => navigate('/Ch')} className="btn">C#</button>
        <button onClick={() => navigate('/Go')} className="btn">Go</button>
        <button onClick={() => navigate('/Kotlin')} className="btn">Kotlin</button>
        <button onClick={() => navigate('/Swift')} className="btn">Swift</button>
        <button onClick={() => navigate('/DSA')} className="btn">DSA</button>
        <button onClick={() => navigate('/NumPY')} className="btn">NumPy</button>
        <button onClick={() => navigate('/Pandas')} className="btn">Pandas</button>
        <button onClick={() => navigate('/Rust')} className="btn">Rust</button>
        <button onClick={() => navigate('/Ruby')} className="btn">Ruby</button>
      </div>
    </div>
  );
}

export default Programiz;

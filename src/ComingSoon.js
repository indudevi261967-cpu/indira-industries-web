import React from 'react';
import mainLogo from './assets/IIND MAIN.png';
import lubeLogo from './assets/IINDLUBE LOGO.png';
import pureLogo from './assets/IINDPURE LOGO.png';
import stylLogo from './assets/IINDSTYL LOGO.png';
import './App.css';

const ComingSoon = () => {
  return (
    <div className="main-container">
      <header className="header-section">
        <img src={mainLogo} alt="Indira Industries" className="main-logo-img" />
        <h1 className="tagline">THE NAME OF TRUST</h1>
      </header>

      <div className="divisions-grid">
        <div className="division-card">
          <img src={lubeLogo} alt="IINDLUBE" />
          <p>LUBRICANTS</p>
        </div>
        <div className="division-card">
          <img src={stylLogo} alt="IINDSTYL" />
          <p>GARMENTS</p>
        </div>
        <div className="division-card">
          <img src={pureLogo} alt="IINDPURE" />
          <p>FMCG</p>
        </div>
      </div>

      <footer className="footer-note">
        <p>Our digital presence is under construction. Stay tuned for excellence.</p>
      </footer>
    </div>
  );
};

export default ComingSoon;
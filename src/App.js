import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#fff' }}>
      {/* Nayi 5 pages ki images */}
      <img src="/page1.jpg" alt="Home" style={{ width: '100%', display: 'block' }} />
      <img src="/page2.jpg" alt="IINDLUBE" style={{ width: '100%', display: 'block' }} />
      <img src="/page3.jpg" alt="IINDSTYL" style={{ width: '100%', display: 'block' }} />
      <img src="/page4.jpg" alt="IINDPURE" style={{ width: '100%', display: 'block' }} />
      <img src="/page5.jpg" alt="Contact" style={{ width: '100%', display: 'block' }} />
    </div>
  );
}

export default App;
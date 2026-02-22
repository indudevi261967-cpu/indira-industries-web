import React, { useRef } from 'react';
import './App.css';

function App() {
  // Scrolling References
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const page4Ref = useRef(null);
  const page5Ref = useRef(null);

  const scrollToPage = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const googleFormLink = "https://forms.gle/ToFuJVGzX96CETzr6";

  return (
    <div className="App" style={{ backgroundColor: '#000', margin: 0, padding: 0 }}>
      
      {/* PAGE 1: HOME */}
      <div ref={page1Ref} style={{ position: 'relative', width: '100%', lineHeight: 0 }}>
        <img src="/page1.jpg" alt="Home" style={{ width: '100%' }} />
        {/* Navigation Buttons Overlays */}
        <div onClick={() => scrollToPage(page2Ref)} style={{ position: 'absolute', top: '45%', left: '33%', width: '33%', height: '15%', cursor: 'pointer', background: 'transparent' }} title="Go to Page 2"></div>
        <div onClick={() => scrollToPage(page3Ref)} style={{ position: 'absolute', top: '72%', left: '4%', width: '15%', height: '22%', cursor: 'pointer', background: 'transparent' }} title="Go to Page 3"></div>
        <div onClick={() => scrollToPage(page4Ref)} style={{ position: 'absolute', top: '72%', left: '42%', width: '15%', height: '22%', cursor: 'pointer', background: 'transparent' }} title="Go to Page 4"></div>
        <div onClick={() => scrollToPage(page5Ref)} style={{ position: 'absolute', top: '72%', left: '80%', width: '15%', height: '22%', cursor: 'pointer', background: 'transparent' }} title="Go to Page 5"></div>
      </div>

      {/* PAGE 2: DIVISIONS */}
      <div ref={page2Ref} style={{ position: 'relative', width: '100%', lineHeight: 0 }}>
        <img src="/page2.jpg" alt="Divisions" style={{ width: '100%' }} />
        {/* All "Details" and "Angel Partner" buttons go to Page 5 Form */}
        <div onClick={() => scrollToPage(page5Ref)} style={{ position: 'absolute', top: '68%', left: '5%', width: '25%', height: '8%', cursor: 'pointer' }}></div>
        <div onClick={() => scrollToPage(page5Ref)} style={{ position: 'absolute', top: '68%', left: '38%', width: '25%', height: '8%', cursor: 'pointer' }}></div>
        <div onClick={() => scrollToPage(page5Ref)} style={{ position: 'absolute', top: '68%', left: '70%', width: '25%', height: '8%', cursor: 'pointer' }}></div>
        <div onClick={() => scrollToPage(page5Ref)} style={{ position: 'absolute', top: '78%', left: '30%', width: '50%', height: '15%', cursor: 'pointer' }}></div>
      </div>

      {/* PAGE 3: LOCATION */}
      <div ref={page3Ref} style={{ width: '100%', lineHeight: 0 }}>
        <img src="/page3.jpg" alt="Location" style={{ width: '100%' }} />
      </div>

      {/* PAGE 4: EMAIL */}
      <div ref={page4Ref} style={{ width: '100%', lineHeight: 0 }}>
        <img src="/page4.jpg" alt="Email" style={{ width: '100%' }} />
      </div>

      {/* PAGE 5: INVESTOR ZONE / FORM */}
      <div ref={page5Ref} style={{ position: 'relative', width: '100%', lineHeight: 0 }}>
        <img src="/page5.jpg" alt="Contact Us" style={{ width: '100%' }} />
        {/* Main Investor Zone Button to Google Form - FIXED FOR VERCEL */}
        <div 
          onClick={() => window.open(googleFormLink, "_blank", "noreferrer")}
          style={{ position: 'absolute', top: '56%', left: '9%', width: '82%', height: '30%', cursor: 'pointer', display: 'block' }}
          title="Open Investor Form"
        ></div>
      </div>

    </div>
  );
}

export default App;
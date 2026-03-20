import React, { useState } from 'react';

const InvestorPortal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 99999 }}>
      
      {/* 1. ब्लिंकिंग ट्रिगर बटन (The Floating Gold Button) */}
      {!isOpen && (
        <div 
          onClick={() => setIsOpen(true)}
          style={{
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            padding: '15px 25px',
            borderRadius: '50px',
            boxShadow: '0 10px 25px rgba(255, 215, 0, 0.4)',
            cursor: 'pointer',
            textAlign: 'center',
            maxWidth: '280px',
            border: '2px solid #fff',
            animation: 'pulse 2s infinite' // यह इसे चमकाएगा
          }}
        >
          <div style={{ color: '#000', fontWeight: 'bold', fontSize: '16px', marginBottom: '5px' }}>
            Join us as an Angel Investor
          </div>
          <p style={{ color: '#333', fontSize: '12px', margin: 0, lineHeight: '1.2' }}>
            Click for flexible investment options & handsome ROI
          </p>
          
          {/* ब्लिंकिंग के लिए छोटा सा स्टाइल टैग (Inline) */}
          <style>
            {`
              @keyframes pulse {
                0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.7); }
                70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(255, 215, 0, 0); }
                100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 215, 0, 0); }
              }
            `}
          </style>
        </div>
      )}

      {/* 2. पॉप-अप मॉडल (The Confidential Form) */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.9)',
          display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
          zIndex: 100000, overflowY: 'auto', padding: '20px'
        }}>
          <div style={{ 
            backgroundColor: '#fff', width: '100%', maxWidth: '900px', 
            borderRadius: '15px', position: 'relative', marginTop: '20px' 
          }}>
            
            {/* क्लोज बटन (X) */}
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: '10px', right: '20px',
                fontSize: '35px', background: 'none', border: 'none',
                cursor: 'pointer', color: '#000', zIndex: 100001
              }}
            >
              &times;
            </button>

            <div style={{ padding: '20px', textAlign: 'center' }}>
               <h2 style={{ color: '#2c3e50', fontSize: '20px', marginBottom: '10px' }}>
                 We respect your privacy, this communication is strictly confidential.
               </h2>
            </div>

            {/* Google Form Iframe */}
            <div style={{ width: '100%', height: '80vh', overflow: 'hidden' }}>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeueWR0rLUi27Ek6U6KfQfKEqfw63GH76Wt950t78U1kNmQCA/viewform?embedded=true" 
                width="100%" 
                height="3181" 
                frameBorder="0" 
                title="IINDLUBE Investor Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorPortal;
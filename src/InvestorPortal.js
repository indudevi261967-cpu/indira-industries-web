import React, { useState } from 'react';

const InvestorPortal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 99999 }}>
      
      {/* 1. Floating Gold Trigger Button */}
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
            animation: 'pulse 2s infinite'
          }}
        >
          <div style={{ color: '#000', fontWeight: 'bold', fontSize: '16px', marginBottom: '5px' }}>
            Join us as an Angel Investor
          </div>
          <p style={{ color: '#333', fontSize: '12px', margin: 0, lineHeight: '1.2' }}>
            Click for flexible investment options & handsome ROI
          </p>
          <style>{`@keyframes pulse { 0% { transform: scale(1); } 70% { transform: scale(1.05); } 100% { transform: scale(1); } }`}</style>
        </div>
      )}

      {/* 2. Enhanced Modal Overlay */}
      {isOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.95)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 100000, padding: '20px'
        }}>
          <div style={{ 
            backgroundColor: '#fff', width: '100%', maxWidth: '800px', 
            borderRadius: '20px', position: 'relative', padding: '40px 20px',
            textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
          }}>
            
            <button 
              onClick={() => setIsOpen(false)}
              style={{ position: 'absolute', top: '15px', right: '20px', fontSize: '30px', border: 'none', background: 'none', cursor: 'pointer' }}
            >
              &times;
            </button>

            <h2 style={{ color: '#1a1a1a', marginBottom: '10px' }}>IINDLUBE Investor Gateway</h2>
            <p style={{ color: '#666', marginBottom: '25px' }}>We respect your privacy. All communications are strictly confidential.</p>

            {/* Direct Action Button - This will never fail */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeueWR0rLUi27Ek6U6KfQfKEqfw63GH76Wt950t78U1kNmQCA/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#2c3e50',
                color: '#fff',
                padding: '15px 35px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                marginBottom: '20px'
              }}
            >
              Fill Investor Enquiry Form →
            </a>

            <p style={{ fontSize: '12px', color: '#999' }}>
              The form will open in a new secure tab for your convenience.
            </p>

          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorPortal;
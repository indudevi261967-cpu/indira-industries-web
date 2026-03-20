import React, { useState } from 'react';
import './InvestorPortal.css';

const InvestorPortal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="investor-wrapper">
      {/* 1. ट्रिगर बटन जो फॉर्म को खोलेगा */}
      {!isOpen && (
        <div className="blinking-trigger" onClick={() => setIsOpen(true)}>
          <div className="blink-text">Join us as an Angel Investor</div>
          <p className="sub-trigger">Click here if interested for flexible investment options with handsome/decent ROI</p>
        </div>
      )}

      {/* 2. पॉप-अप मोडल जिसमें आपका Google Form है */}
      {isOpen && (
        <div className="modal-overlay" style={{ overflowY: 'auto', padding: '20px 10px' }}>
          <div className="investor-modal" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
            
            {/* क्लोज (X) बटन */}
            <button 
              className="close-btn" 
              onClick={() => setIsOpen(false)}
              style={{ position: 'absolute', top: '5px', right: '15px', fontSize: '28px', background: 'transparent', border: 'none', cursor: 'pointer', color: '#555', zIndex: 10 }}
            >
              ×
            </button>

            <h2 className="confidential-tag" style={{ textAlign: 'center', marginBottom: '20px', paddingRight: '30px' }}>
              We respect your privacy, so this communication will be always confidential
            </h2>

            {/* IINDLUBE Investor Google Form Iframe */}
            <div style={{ width: '100%', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeueWR0rLUi27Ek6U6KfQfKEqfw63GH76Wt950t78U1kNmQCA/viewform?embedded=true" 
                width="100%" 
                height="3181" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
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
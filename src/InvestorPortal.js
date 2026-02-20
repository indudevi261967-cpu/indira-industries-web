import React, { useState } from 'react';
import './InvestorPortal.css';

// 1. यह है वर्चुअल कीबोर्ड का हिस्सा (नया निर्देश)
const VirtualKeyboard = ({ onKeyClick }) => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Clear'];
  return (
    <div className="virtual-keyboard">
      {keys.map(key => (
        <button key={key} type="button" onClick={() => onKeyClick(key)}>{key}</button>
      ))}
    </div>
  );
};

const InvestorPortal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeInput, setActiveInput] = useState(null); // यह याद रखेगा कि आप कहाँ टाइप कर रहे हैं

  return (
    <div className="investor-wrapper">
      {!isOpen && (
        <div className="blinking-trigger" onClick={() => setIsOpen(true)}>
          <div className="blink-text">Join us as an Angel Investor</div>
          <p className="sub-trigger">Click here if interested for flexible investment options with handsome/decent ROI</p>
        </div>
      )}

      {isOpen && (
        <div className="modal-overlay">
          <div className="investor-modal">
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
            <h2 className="confidential-tag">We respect your privacy, so this communication will be always confidential</h2>

            <form className="investor-form">
              {/* सभी इनपुट फील्ड्स */}
              <input type="text" placeholder="Full Name" onFocus={() => setActiveInput('name')} />
              <input type="text" placeholder="Location" onFocus={() => setActiveInput('location')} />
              
              <label>Investment Capabilities:</label>
              <select>
                <option>1.0 L – 5.0 L</option>
                <option>5.0 L to 10.0 L</option>
                <option>10.0 L to 20.0 L</option>
                <option>20.0 L to 50.0 L</option>
                <option>Above</option>
              </select>

              <div className="lock-section">
                <label>Create your 4-digit Lock Code:</label>
                <input type="password" placeholder="xxxx" maxLength="4" onFocus={() => setActiveInput('lock')} />
              </div>

              {/* 2. यहाँ कीबोर्ड दिखाई देगा */}
              <p style={{fontSize: '10px', color: '#FFD700', marginTop: '10px'}}>Secure Virtual Keyboard:</p>
              <VirtualKeyboard onKeyClick={(key) => console.log("Key pressed:", key)} />

              <button type="submit" className="gold-submit">Submit Confidentially</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorPortal;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductEnquiry from './ProductEnquiry';
import InvestorPortal from './InvestorPortal'; // आपका इन्वेस्टर पोर्टल भी यहीं आएगा

// यह आपका मुख्य होम पेज है (Canva + Investor Button)
function Home() {
  return (
    <div style={{ backgroundColor: '#050510', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0', margin: '0', position: 'relative' }}>

      {/* Canva Embed Code */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', height: '0', paddingTop: '56.25%', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
        <iframe
          title="IINDLUBE Portfolio"
          loading="lazy"
          style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0' }}
          src="https://www.canva.com/design/DAHB32zUFyU/uuskrnWpjVcWBAgUTcLL3w/view?embed"
          allowFullScreen="allowfullscreen"
          allow="fullscreen">
        </iframe>
      </div>

      {/* इन्वेस्टर पोर्टल का 'Blinking Button' यहाँ वेबसाइट के ऊपर दिखेगा */}
      <InvestorPortal />

    </div>
  );
}

// यह वेबसाइट का मेन नेविगेशन है
export default function App() {
  return (
    <Router>
      <Routes>
        {/* जब कोई सीधा वेबसाइट खोलेगा (/) तो Home दिखेगा */}
        <Route path="/" element={<Home />} />
        
        {/* जब कोई प्रोडक्ट इंक्वायरी पर क्लिक करेगा तो नया फॉर्म पेज खुलेगा */}
        <Route path="/product-enquiry" element={<ProductEnquiry />} />
      </Routes>
    </Router>
  );
}
import React from 'react';

// 1. यह है हमारा मास्टर डेटाबेस (JSON)
const twoWheelerOils = [
  {
    id: 1,
    name: "IINDLUBE SYNTH-RACE",
    grade: "10W-50",
    specs: "API SN, JASO MA2",
    application: "सुपरबाइक्स और रेसिंग बाइक्स (KTM, Ninja)",
    edge: "100% Fully Synthetic. 10,000 RPM पर भी ऑयल फिल्म नहीं टूटती।",
    image: "/images/synth-race.jpg" // आप बाद में यहाँ अपनी असली फोटो का नाम डालेंगे
  },
  {
    id: 2,
    name: "IINDLUBE SYNTH-PRO",
    grade: "5W-30",
    specs: "API SN, JASO MA2",
    application: "प्रीमियम कम्यूटर बाइक्स (Pulsar, Apache)",
    edge: "एडवांस हीट-शील्ड तकनीक, भारी ट्रैफिक में इंजन ओवरहीट से बचाव।",
    image: "/images/synth-pro.jpg"
  },
  {
    id: 3,
    name: "IINDLUBE CRUISE-MAX",
    grade: "15W-50",
    specs: "API SM, JASO MA2",
    application: "क्रूज़र और भारी इंजन (Royal Enfield)",
    edge: "एक्सट्रीम लोड प्रोटेक्शन और इंजन की थम्प (Thump) को बनाए रखता है।",
    image: "/images/cruise-max.jpg"
  },
  {
    id: 4,
    name: "IINDLUBE SCOOT-PRO",
    grade: "10W-30",
    specs: "API SN, JASO MB",
    application: "गियरलेस स्कूटर्स (Activa, Jupiter)",
    edge: "JASO MB स्पेशल: ड्राई क्लच वाले स्कूटर्स के लिए तुरंत पिकअप।",
    image: "/images/scoot-pro.jpg"
  }
  // हम ऐसे ही बाकी प्रोडक्ट्स भी यहाँ जोड़ेंगे...
];

// 2. यह है हमारा स्मार्ट लेआउट (UI) जो डेटा को कार्ड्स में बदलेगा
export default function IindlubeCatalog() {
  return (
    <div style={{ padding: '40px 20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', color: '#003366', marginBottom: '30px' }}>
        IINDLUBE: Premium 2-Wheeler Range
      </h2>
      
      {/* ग्रिड लेआउट - जो कार्ड्स को लाइन से लगाएगा */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        
        {/* जादू यहाँ है: यह लूप डेटाबेस को पढ़ेगा और कार्ड्स बनाएगा */}
        {twoWheelerOils.map((product) => (
          <div key={product.id} style={{
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '10px',
            width: '300px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease'
          }}>
            {/* प्रोडक्ट इमेज की जगह */}
            <div style={{
              height: '180px',
              backgroundColor: '#eaeaea',
              borderRadius: '8px',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
              fontSize: '14px'
            }}>
              [Product Image: {product.grade}]
            </div>

            {/* प्रोडक्ट की डिटेल्स */}
            <h3 style={{ color: '#D32F2F', margin: '0 0 10px 0', fontSize: '18px' }}>{product.name}</h3>
            <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Grade: <span style={{ color: '#333' }}>{product.grade}</span></p>
            <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}><strong>Specs:</strong> {product.specs}</p>
            <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}><strong>Best For:</strong> {product.application}</p>
            
            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />
            
            <p style={{ margin: '0', fontSize: '13px', color: '#006600', fontWeight: 'bold' }}>
              🌟 The IINDLUBE Edge:
            </p>
            <p style={{ margin: '5px 0 0 0', fontSize: '13px', color: '#333', fontStyle: 'italic' }}>
              {product.edge}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}
import React, { useState } from 'react';
import './App.css';

const products = [
  // AUTOMOTIVE SERIES
  { id: 1, cat: 'Auto', name: 'Premium Synth-Gold', grade: '0W-20 / 5W-30', use: 'Modern Luxury Cars' },
  { id: 2, cat: 'Auto', name: 'Power Ride 4T', grade: '10W-30 / 20W-40', use: 'Bikes & Scooters' },
  { id: 3, cat: 'Auto', name: 'Heavy Duty Truck King', grade: '15W-40 CI-4 / CK-4', use: 'Commercial Vehicles' },
  { id: 4, cat: 'Auto', name: 'Gear-Tech EP', grade: '80W-90 / 85W-140', use: 'Differential & Gearboxes' },
  
  // INDUSTRIAL SERIES
  { id: 5, cat: 'Ind', name: 'Hydro-Guard AW', grade: 'ISO VG 32 / 46 / 68', use: 'Hydraulic Systems' },
  { id: 6, cat: 'Ind', name: 'Industrial Gear-Max', grade: 'SP 150 / 220 / 320 / 460', use: 'Heavy Machinery Gears' },
  { id: 7, cat: 'Ind', name: 'Cool-Cut Soluble', grade: 'Premium Grade', use: 'Metal Working & CNC' },
  { id: 8, cat: 'Ind', name: 'Thermo-Flow', grade: 'Thermic Fluid 500', use: 'Heat Transfer Systems' }
];

function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredProducts = products.filter(p => 
    (filter === 'All' || p.cat === filter) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) || p.grade.toLowerCase().includes(search.toLowerCase()))
  );

  return (<div className="App" style={{ backgroundColor: '#fff' }}>
      {/* Aaj ki nayi 5 pages ki design */}
      <img src="/page1.jpg" alt="Home" style={{ width: '100%', display: 'block' }} />
      <img src="/page2.jpg" alt="IINDLUBE" style={{ width: '100%', display: 'block' }} />
      <img src="/page3.jpg" alt="IINDSTYL" style={{ width: '100%', display: 'block' }} />
      <img src="/page4.jpg" alt="IINDPURE" style={{ width: '100%', display: 'block' }} />
      <img src="/page5.jpg" alt="Contact" style={{ width: '100%', display: 'block' }} />
    </div>
      ) : (
        <div className="main-frame" style={{ padding: '20px' }}>
          <h2 style={{ color: '#D4AF37' }}>IINDLUBE MASTER DIRECTORY</h2>
          
          <div className="search-box" style={{ marginBottom: '20px' }}>
            <input 
              type="text" 
              placeholder="Search by Grade (e.g. 40, 68, Gear)..." 
              style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #D4AF37', background: '#111', color: '#fff' }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
            <button onClick={() => setFilter('All')} style={{ background: filter === 'All' ? '#D4AF37' : '#222', padding: '5px 15px', color: '#fff', border: 'none', cursor: 'pointer' }}>All</button>
            <button onClick={() => setFilter('Auto')} style={{ background: filter === 'Auto' ? '#D4AF37' : '#222', padding: '5px 15px', color: '#fff', border: 'none', cursor: 'pointer' }}>Automotive</button>
            <button onClick={() => setFilter('Ind')} style={{ background: filter === 'Ind' ? '#D4AF37' : '#222', padding: '5px 15px', color: '#fff', border: 'none', cursor: 'pointer' }}>Industrial</button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #D4AF37', color: '#D4AF37' }}>
                <th style={{ padding: '10px' }}>Product Name</th>
                <th style={{ padding: '10px' }}>Grades</th>
                <th style={{ padding: '10px' }}>Application</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(p => (
                <tr key={p.id} style={{ borderBottom: '1px solid #333' }}>
                  <td style={{ padding: '10px' }}>{p.name}</td>
                  <td style={{ padding: '10px', color: '#FFD700' }}>{p.grade}</td>
                  <td style={{ padding: '10px', fontSize: '0.8rem' }}>{p.use}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: '30px', border: '1px dashed #D4AF37', padding: '15px', textAlign: 'center' }}>
            <p>Don't see your specific grade? <strong>We formulate custom solutions.</strong></p>
            <p style={{ color: '#D4AF37' }}>Contact for TDS/MSDS: indira.industries@example.com</p>
          </div>

          <button className="cta-button" style={{ marginTop: '20px' }} onClick={() => setPage(1)}>BACK TO HOME</button>
        </div>
      )}
    </div>
  );
}

export default App;
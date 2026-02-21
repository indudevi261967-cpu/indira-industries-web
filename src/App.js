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
);
}
export default App;
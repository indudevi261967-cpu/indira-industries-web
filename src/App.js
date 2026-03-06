import React from 'react';

export default function App() {
  return (
    <div style={{ backgroundColor: '#050510', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      
      {/* Canva Embed Code */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', height: '0', paddingTop: '56.25%', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', overflow: 'hidden', borderRadius: '12px' }}>
        <iframe 
          loading="lazy" 
          style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0' }} 
          src="https://www.canva.com/design/DAHB32zUFyU/uuskrnWpjVcWBAgUTcLL3w/view?embed" 
          allowFullScreen="allowfullscreen" 
          allow="fullscreen">
        </iframe>
      </div>

    </div>
  );
}
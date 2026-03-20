import React from 'react';

const ProductEnquiry = () => {
  return (
    <div style={{ backgroundColor: '#f4f4f9', minHeight: '100vh', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '32px', marginBottom: '10px' }}>IINDLUBE Product Enquiry</h1>
        <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.5' }}>
          Explore our premium range of lubricants. Please fill out the form below with your requirements, and our team will get back to you with the best solutions.
        </p>
      </div>

      {/* Google Form Iframe Container */}
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        backgroundColor: '#fff', 
        borderRadius: '12px', 
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)', 
        overflow: 'hidden' 
      }}>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSeK7e4Y5dVsfevTjYqPv1L3L6ZCXchTrDcfWzyqtkg8jthVYg/viewform?embedded=true" 
          width="100%" 
          height="1731" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
          title="IINDLUBE Product Enquiry Form"
          style={{ display: 'block' }}
        >
          Loading…
        </iframe>
      </div>

    </div>
  );
};

export default ProductEnquiry;
import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  if (subscribed) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: '#A6E36F',
        fontWeight: 600,
        fontSize: '0.95rem',
        padding: '10px 0'
      }}>
        <CheckCircle size={20} />
        <span>Subscribed successfully!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
      <input 
        type="email" 
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email" 
        style={{
          flex: 1,
          padding: '14px',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: '#ffffff',
          fontSize: '0.95rem'
        }} 
      />
      <button 
        type="submit" 
        className="btn btn-lime" 
        style={{
          padding: '14px 20px',
          whiteSpace: 'nowrap'
        }}
      >
        <Mail size={16} /> Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;

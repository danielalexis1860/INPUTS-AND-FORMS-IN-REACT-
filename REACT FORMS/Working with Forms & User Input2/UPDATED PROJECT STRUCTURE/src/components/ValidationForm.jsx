import React, { useState } from 'react';

const ValidationForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Handle input change and validate email
  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !/\S+@\S+\.\S+/.test(value)) {
      setError('Invalid email address');
    } else {
      setError('');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && email) {
      alert(`Submitted email: ${email}`);
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Email Validation</h2>
      <div style={fieldStyle}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      {error && <p style={errorStyle}>{error}</p>}
      <button type="submit" disabled={!!error || !email} style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

// Inline styles for uniformity
const formStyle = { maxWidth: '400px', margin: '0 auto' };
const fieldStyle = { marginBottom: '15px' };
const inputStyle = { width: '100%', padding: '8px', boxSizing: 'border-box' };
const buttonStyle = { padding: '10px 20px' };
const errorStyle = { color: 'red', fontSize: '0.9em' };

export default ValidationForm;

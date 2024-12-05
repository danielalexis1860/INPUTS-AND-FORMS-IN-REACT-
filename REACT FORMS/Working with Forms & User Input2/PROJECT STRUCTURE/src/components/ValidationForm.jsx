import React, { useState } from 'react';

const ValidationForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setError('Invalid email address');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && email) {
      alert(`Submitted email: ${email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Email Validation</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleChange} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  );
};

export default ValidationForm;

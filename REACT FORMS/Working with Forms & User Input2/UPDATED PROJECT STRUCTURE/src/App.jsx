import React from 'react';
import LoginForm from './components/LoginForm.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import ValidationForm from './components/ValidationForm.jsx';

function App() {
  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Forms Example</h1>
      
      {/* Registration Form */}
      <RegistrationForm />
      <hr />

      {/* Login Form */}
      <LoginForm />
      <hr />

      {/* Email Validation Form */}
      <ValidationForm />
    </div>
  );
}

export default App;

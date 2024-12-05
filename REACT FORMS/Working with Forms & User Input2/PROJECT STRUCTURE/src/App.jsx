import React from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ValidationForm from './components/ValidationForm';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Forms Example</h1>
      <RegistrationForm />
      <hr />
      <LoginForm />
      <hr />
      <ValidationForm />
    </div>
  );
};

export default App;

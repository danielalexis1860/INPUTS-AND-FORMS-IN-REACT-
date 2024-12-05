import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  // Initialize React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Login Data:', data);
    alert(`Welcome back, ${data.username}!`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
      <h2>Login</h2>
      <div style={fieldStyle}>
        <label>Username:</label>
        <input
          {...register('username', { required: 'Username is required' })}
          style={inputStyle}
        />
        {errors.username && <p style={errorStyle}>{errors.username.message}</p>}
      </div>
      <div style={fieldStyle}>
        <label>Password:</label>
        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
          style={inputStyle}
        />
        {errors.password && <p style={errorStyle}>{errors.password.message}</p>}
      </div>
      <button type="submit" style={buttonStyle}>Login</button>
    </form>
  );
};

// Inline styles for simplicity
const formStyle = { maxWidth: '400px', margin: '0 auto' };
const fieldStyle = { marginBottom: '15px' };
const inputStyle = { width: '100%', padding: '8px', boxSizing: 'border-box' };
const buttonStyle = { padding: '10px 20px' };
const errorStyle = { color: 'red', fontSize: '0.9em' };

export default LoginForm;

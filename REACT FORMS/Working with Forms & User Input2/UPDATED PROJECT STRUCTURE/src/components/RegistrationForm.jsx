import React from 'react';
import { useFormik } from 'formik';

const RegistrationForm = () => {
  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    // Validation function
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = 'Required';
      }
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
      return errors;
    },
    // Handle form submission
    onSubmit: (values) => {
      console.log('Registration Data:', values);
      alert('Registration Successful!');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={formStyle}>
      <h2>Register</h2>
      <div style={fieldStyle}>
        <label>Username:</label>
        <input
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          style={inputStyle}
        />
        {formik.errors.username ? <p style={errorStyle}>{formik.errors.username}</p> : null}
      </div>
      <div style={fieldStyle}>
        <label>Email:</label>
        <input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          style={inputStyle}
        />
        {formik.errors.email ? <p style={errorStyle}>{formik.errors.email}</p> : null}
      </div>
      <div style={fieldStyle}>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          style={inputStyle}
        />
        {formik.errors.password ? <p style={errorStyle}>{formik.errors.password}</p> : null}
      </div>
      <button type="submit" style={buttonStyle}>Register</button>
    </form>
  );
};

// Inline styles for consistency
const formStyle = { maxWidth: '400px', margin: '0 auto' };
const fieldStyle = { marginBottom: '15px' };
const inputStyle = { width: '100%', padding: '8px', boxSizing: 'border-box' };
const buttonStyle = { padding: '10px 20px' };
const errorStyle = { color: 'red', fontSize: '0.9em' };

export default RegistrationForm;

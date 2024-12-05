import React from 'react';
import { useFormik } from 'formik';

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
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
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log('Registration Data:', values);
      alert('Registration Successful!');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Register</h2>
      <div>
        <label>Username:</label>
        <input
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username ? <p style={{ color: 'red' }}>{formik.errors.username}</p> : null}
      </div>
      <div>
        <label>Email:</label>
        <input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email ? <p style={{ color: 'red' }}>{formik.errors.email}</p> : null}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password ? <p style={{ color: 'red' }}>{formik.errors.password}</p> : null}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

import React, { useState } from 'react';
import { AdminSignInContainer, FormContainer, InputField, SubmitButton } from '../styles/AdminSignInStyles';
import axios from 'axios';

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:4000/api/v1/register/signin', { email, password }); 
      console.log('Response:', response);

      if (response.status === 200) {
        window.location.href = '/admin/dashboard';
      } else {
        setError('Sign-in failed. Please check your credentials and try again.');
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : 'An error occurred during sign-in.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminSignInContainer>
      <h2>Admin Sign In</h2>
      <FormContainer>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> 
        <SubmitButton onClick={handleSignIn} disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </SubmitButton>
      </FormContainer>
    </AdminSignInContainer>
  );
};

export default AdminSignIn;

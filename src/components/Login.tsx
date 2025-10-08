import React, { useState } from 'react';
import '../App.css';
import Dashboard from './Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/authSlice';
import type { RootState } from '../store';

const validCredentials = {
  username: 'admin',
  password: 'password123',
};


const validCredentials = {
  username: 'admin',
  password: 'password123',
};


const Login: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    if (!username || !password) {
      setError('Username and password are required');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (
      username === validCredentials.username &&
      password === validCredentials.password
    ) {
      dispatch(login(username));
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  if (isAuthenticated) {
    return <Dashboard />;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import '../App.css';
import Dashboard from './Dashboard';

const validCredentials = {
  username: 'admin',
  password: 'password123',
};

function useLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

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
      setSuccess(true);
      setError('');
    } else {
      setError('Invalid username or password');
      setSuccess(false);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    success,
    handleSubmit,
  };
}

const Login: React.FC = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    error,
    success,
    handleSubmit,
  } = useLoginForm();

  if (success) {
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

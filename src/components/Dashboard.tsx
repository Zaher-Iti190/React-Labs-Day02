import React from 'react';
import CounterCard from './CounterCard';
import TimerCard from './TimerCard';
import NotesCard from './NotesCard';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';
import type { RootState } from '../store';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.auth.username);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2em', padding: '0 2em' }}>
        <h2>Welcome, {username}!</h2>
        <button onClick={handleLogout} style={{ padding: '0.5em 1em', background: '#d32f2f', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>
      </header>
      <div className="dashboard-container" style={{ display: 'flex', gap: '2em', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2em' }}>
        <CounterCard />
        <TimerCard />
        <NotesCard />
      </div>
    </div>
  );
};

export default Dashboard;

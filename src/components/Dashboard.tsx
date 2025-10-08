import React from 'react';
import CounterCard from './CounterCard';
import TimerCard from './TimerCard';
import NotesCard from './NotesCard';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container" style={{ display: 'flex', gap: '2em', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2em' }}>
      <CounterCard />
      <TimerCard />
      <NotesCard />
    </div>
  );
};

export default Dashboard;

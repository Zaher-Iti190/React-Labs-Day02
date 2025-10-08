import React, { useState } from 'react';

const CounterCard: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <h3>Counter</h3>
      <p>Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterCard;

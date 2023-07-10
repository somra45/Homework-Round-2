import { useState } from 'react';
import './UseState.css';

const UseState = () => {
  const [count, setCount] = useState(0); 
  const [theme, setTheme] = useState('light');

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button>Dark</button>
      <button>Light</button>
      <h2>{count}</h2>
      <button onclick={() => {
        setCount(count + 1);
      }}>
        Increment
      </button>
      <button onclick={() => {
        setCount(count - 1);
      }}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
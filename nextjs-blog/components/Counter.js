import { useState } from 'react';

const Counter = ({ incrementAmount, buttonColor }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => {
      if (prevCount + incrementAmount > 10) {
        return 0; // Reset to 0 if it exceeds 10
      }
      return prevCount + incrementAmount;
    });
  };

  return (
    <div>
      <button 
        onClick={handleIncrement} 
        style={{ backgroundColor: buttonColor }}
      >
        Increment by {incrementAmount}
      </button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;

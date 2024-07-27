import React from 'react';
import ReactDOM from 'react-dom/client';

//This app is a simple counter that increments the count when the user clicks a button, and resets the count when the user clicks another button.

const root = ReactDOM.createRoot(document.getElementById('root'));

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() =>setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


root.render(<Counter />);


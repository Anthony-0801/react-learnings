import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';



const root = ReactDOM.createRoot(document.getElementById('root'));


function App() {
   const [buttonText, setButtonText] = useState('Show');
   const [displayValue, setDisplayValue] = useState('none');

   function toggleVisibility() {
      setButtonText(buttonText === 'Show' ? 'Hide' : 'Show');
      setDisplayValue(displayValue === 'none' ? 'block' : 'none');
   }

   return (
      <div>
         <button onClick={toggleVisibility}>{buttonText}</button>
         <p style={{ display: displayValue }}>This is some text</p>
      </div>
   );
}


root.render(<App />);


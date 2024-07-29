import React from 'react';
import { useState } from 'react';
export default App;

function App() {
    const [display, setDisplay] = useState(false);
    
 
    function toggleVisibility() {
       setDisplay(!display);
    }
 
    return (
       <div>
          <button onClick={toggleVisibility}>{display ? 'Hide' : 'Show'}</button>
          {display && <p>This is some text.</p>}
       </div>
    );
 }



import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';



const root = ReactDOM.createRoot(document.getElementById('root'));

function BackgroundSetter() {
  const [background, setBackground] = useState('#eee');
  return (
    <div style={{height: 200, backgroundColor: background}}
    onMouseEnter={() => setBackground('yellow')}
    onMouseLeave={() => setBackground('#eee')}>
       Change the background
    </div>
 );
}


root.render(<BackgroundSetter />);


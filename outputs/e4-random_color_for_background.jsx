import React from 'react';
import { useState } from 'react';
export default App;

function App() {
    const [color, setColor] = useState('yellow');

        function Randomizer() {
            var rgb = [
                Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256)
             ];
             var randomColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
             setColor(randomColor);
    }

        return (
        <div>
            <h1 style={{textShadow: '2px 1px 5px white', backgroundColor: color}}>A heading</h1>
            <button onClick={Randomizer}>Change color</button>
        </div>
        );
 
}



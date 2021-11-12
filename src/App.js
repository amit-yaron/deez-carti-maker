import React, { useState } from 'react';
import cartiIt from './cartiIt';

function App() {
  const [text, setText] = useState("")
  return (
    <div>
      <h1>took 10 minutes to make</h1>
      <h2>carti text maker</h2>
      <h3>type text and carti text will appear</h3>
      <input type="text" onChange={_ => setText(_.target.value)} />
      <div>{cartiIt(text)}</div>
      <footer>
        <p>i will not be designing this website</p>
      </footer>
    </div>
  );
}

export default App;

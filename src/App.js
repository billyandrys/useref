
import React, {useState, useRef } from 'react'
function App() {

  const [text, setText] = useState('Hello!');
  const inputRef = useRef()
  const handleFocus = ()=>{
    const input = inputRef.current
    input.focus()
  }

  return (
    <div className="App">
      <input ref={inputRef} type='text' value={text} onChange={e=>setText(e.target.value)}  id='text'/>
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

export default App;

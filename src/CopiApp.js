import React,  { useState, useRef }from 'react'


function CopiApp() {

    const [text, setText] = useState('Hola!');
    const [smg, setSmg] = useState(false);
    const inputRef = useRef()

    const handleCopy = ()=>{
          const input = inputRef.current
          input.select()
          document.execCommand('copy')
          setSmg(true)
          setTimeout(()=>setSmg(false), 1000)
    }

  return (

    <>
        <input ref={inputRef} type='text'  value={text} onChange={e=>setText(e.target.value)}/>
        <button onClick={handleCopy}>Copi App</button>
        {smg && <h3>Copied</h3>}
    </>
  )
}

export default CopiApp
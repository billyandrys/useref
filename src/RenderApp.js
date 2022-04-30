import userEvent from '@testing-library/user-event';
import React, {useState, useEffect, useRef} from 'react'


export const RenderApp = () => {
  const [text, setText] = useState(''); 
  const refRender = useRef(1)

  useEffect(()=>{
    refRender.current ++ 
  })

  return (
    <div>
    <input type='text' value={text} onChange={e=>setText(e.target.value)}/>
    <h1>{refRender.current}</h1>

    </div>
  )
}

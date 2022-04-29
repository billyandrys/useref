import React, {useState, useEffect, useRef} from 'react'

function ScrollAnimation() {
    const [background, setBackground] = useState('pink')
    const divRef = useRef()
    useEffect(()=>{

        const handleScroll =()=>{
            const divR = divRef.current
            const { y } = divR.getBoundingClientRect()
            console.log(y)
            const backgroundColor = y <= 0  ?  'orange' : 'pink'
            setBackground(backgroundColor)
        }
        window.addEventListener('scroll', handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <div>
            <div ref={divRef} style={{ height: '180vh', background}}>
                <h1>Scroll change background color</h1>
            </div>
    </div>
  )
}

export default ScrollAnimation
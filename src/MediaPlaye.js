import React, { useRef, useState } from 'react'

function MediaPlaye() {
    const [player, setPlayer] = useState(false);
    const videoRef = useRef()
    const handleVideo =()=>{
        const video = videoRef.current
        
        player ? video.pause() : video.play()
        setPlayer(!player)
         
    }
  return (
    <div>
        <video ref={videoRef} width='600' onClick={handleVideo}>
            <source src='planet.mp4' type='video/mp4'/>
        </video>
        <button onClick={handleVideo}>{player ? 'play' : 'pause'}</button>
    </div>
  )
}

export default MediaPlaye
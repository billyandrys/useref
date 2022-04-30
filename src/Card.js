import React, {useEffect, useRef} from 'react'
import getPost from './helper/getPost'

function Card() {
    const [post, setPost] = React.useState('')
    const [loading, setLoading] = React.useState(true);
    const isMountedRef = useRef(true)
    const updatePost =()=>{
        getPost()
        .then(data=> {
            if(isMountedRef){
                setPost(data)
                setLoading(false)
            }
        })
    }
    useEffect(()=>{

            updatePost()
           
            return ()=>{
                isMountedRef.current = false
            }

    }, [])
    if(loading)  return <h1>Loading...</h1>
  return (
      
    <div>{post.title}</div>
  )
}

export default Card
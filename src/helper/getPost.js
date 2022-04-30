const getPost = ()=>{
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>response.json())
        .then(data=>data)
}


export default getPost
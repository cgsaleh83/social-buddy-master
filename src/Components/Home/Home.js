import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';


const Home = () => {
    
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);
    return (
        <div>
            <h1>My Total Post:- {post.length}</h1>
        {
                post.map(post => <Post post={post}></Post>)
        }
        </div>
    );
};

export default Home;
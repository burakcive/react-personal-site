import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogs } from '../data/repo';

const BlogPost = () => {
    let { id } = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        let post = blogs.filter(x => x.id === +id);
        if (post.length === 1) {
            console.log(post[0]);
            setPost(post[0]);
        }

    }, [id, setPost])

    if (!post) return <div>Loading...</div>

    return (
        <React.Fragment>
            <h2>{post.name}</h2>
            <h4>{post.tags}</h4>
            <p>{post.body}</p>
            <Link to={`/`} >Back to posts...</Link>
            <div>{post.createdOn.toDateString()}</div>
        </React.Fragment>
    )
}

export default BlogPost

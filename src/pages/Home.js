import React, { useEffect, useState } from 'react'
import { blogs } from '../data/repo'
import { Link } from 'react-router-dom'

const Home = () => {

    const [blogposts, setblogposts] = useState([]);
   
    useEffect(() => {
        setblogposts(retrieveBlogs());
    }, [setblogposts])

    const retrieveBlogs = () =>{
        return blogs;
    }

    if(blogposts.length === 0) return <div>There is nothing here.</div>
    
    return (
        <React.Fragment>
            {blogposts.map(blog => (
                <div key={blog.id}>
                    <h2>{blog.name}</h2>
                    <h4>{blog.tags}</h4>
                    <p>{blog.body.substring(0, 250)}</p>
                    <Link to={`/blogpost/${blog.id}`} >Read more...</Link>
                    <div>{blog.createdOn.toDateString()}</div>
                    <hr />
                </div>
            ))}
        </React.Fragment>
    )
}

export default Home

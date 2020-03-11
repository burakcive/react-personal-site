import React from 'react'
import { blogs } from '../data/repo'

const Home = () => {
    return (
        <React.Fragment>
            {blogs.map(blog => (
                <div key={blog.id}>
                    <h2>{blog.name}</h2>
                    <h4>{blog.tags}</h4>
                    <p>{blog.body}</p>
                    <div>{blog.createdOn.toDateString()}</div>
                    <hr />
                </div>
            ))}
        </React.Fragment>
    )
}

export default Home

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FullBlog = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/allblogs/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    const { title, image, description } = blog


    return (
        <div className='min-h-screen'>
            <h1>Title: {title}</h1>
            <p>Description: {description}</p>
        </div>
    );
};

export default FullBlog;
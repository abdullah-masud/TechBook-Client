import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FullBlog = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/allblogs/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [blogId])

    const { title, image, description } = blog


    return (
        <div className='min-h-screen max-w-7xl mx-auto mt-4 mb-12 px-2'>
            <img className='w-full ' src={image} alt="" />
            <h1 className='lg:text-4xl text-center text-2xl my-4 font-semibold'>{title}</h1>
            <p className='lg:text-lg text-justify px-2'> {description}</p>
        </div>
    );
};

export default FullBlog;
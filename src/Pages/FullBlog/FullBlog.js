import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FullBlog = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`https://techbook-server.onrender.com/allblogs/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [blogId])

    const { title, image, description } = blog

    return (
        <div className='max-w-7xl mx-auto mt-4 mb-12 px-3'>
            <div className='lg:my-20'>
                <img className='lg:float-left lg:pr-4 lg:pl-2 lg:w-2/4' src={image} alt="" />
                <div className=''>
                    <h1 className='lg:text-4xl lg:text-left text-center text-2xl lg:mb-4 lg:my-0 my-4 font-semibold'>{title}</h1>
                    <p className='lg:text-lg text-justify lg:px-2'> {description}</p>
                </div>
            </div>
        </div>
    );
};

export default FullBlog;
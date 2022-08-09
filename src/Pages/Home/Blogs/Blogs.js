import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='max-w-7xl mx-auto min-h-screen lg:mt-24 mt-12 lg:mb-0 mb-12'>
            <h2 className='text-5xl font-bold text-center my-9'>Blogs</h2>
            <div className='grid px-3'>
                {
                    blogs.slice(0, 3).map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    />)
                }
            </div>
            <div className='flex justify-center lg:mt-0 my-4'>
                <a href="#_" class=" relative inline-block px-4 py-2 font-medium group">
                    <span class=" absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#0b4553] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full bg-white border-2 border-[#2B4865] group-hover:bg-[#0b4553]"></span>
                    <span class="relative text-[#0b4553] group-hover:text-white">See More
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Blogs;
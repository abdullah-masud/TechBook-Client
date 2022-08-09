import React from 'react';
import useBlogs from '../../hooks/useBlogs';
import Blog from '../Home/HomeBlogs/Blog';

const Blogs = () => {
    const [blogs] = useBlogs()

    return (
        <div className='flex lg:flex-row flex-col-reverse min-h-screen max-w-7xl mx-auto my-12 justify-center'>
            <div className='grid px-3'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    />)
                }
            </div>
            <div className="lg:divider lg:divider-horizontal"></div>
            <div className='flex flex-row lg:justify-start justify-center lg:flex-col gap-3 lg:mt-4'>
                <button className='btn btn-xs btn-outline btn-primary'>All</button>
                <button className='btn btn-xs btn-outline btn-primary'>Programming</button>
                <button className='btn btn-xs btn-outline btn-primary'>Food</button>
                <button className='btn btn-xs btn-outline btn-primary'>Travel</button>
            </div>
        </div>
    );
};

export default Blogs;
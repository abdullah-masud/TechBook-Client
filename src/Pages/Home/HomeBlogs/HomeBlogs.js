import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBlogs from '../../../hooks/useBlogs';
import Blog from './Blog';

const HomeBlogs = () => {
    const [blogs] = useBlogs()

    const navigate = useNavigate();

    const handleSeeMore = () => {
        navigate(`/blogs`)
        window.scrollTo(0, 0)
    }

    return (
        <div className='max-w-7xl mx-auto lg:mt-24 mt-12 lg:mb-0 mb-12 '>
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
                <button onClick={handleSeeMore} className="relative inline-block px-4 py-2 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
                    <span className="relative text-primary group-hover:text-white">See More
                    </span>
                </button>
            </div>
        </div>
    );
};

export default HomeBlogs;


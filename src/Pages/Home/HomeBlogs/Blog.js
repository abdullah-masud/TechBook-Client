import React from 'react';
import { Link } from 'react-router-dom'
import blogStyle from './Blog.module.css'

const Blog = ({ blog }) => {
    const { title, image, description, category } = blog;
    return (
        <div className=''>
            <div className={`${blogStyle.blogCard}  max-w-6xl`}>
                <div className={`${blogStyle.meta}`}>
                    <div className={blogStyle.photo}
                        style={{
                            backgroundImage: `url(${image})`
                        }}
                    ></div>
                    <ul className={blogStyle.details}>
                    </ul>
                </div>
                <div className={blogStyle.description}>
                    <h1>{title}</h1>
                    <h2>{category}</h2>
                    <p>{description.slice(0, 120)}</p>
                    <p className={`${blogStyle.readMore} `}>
                        <Link to=''>Continue Reading</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
import React from 'react';
import { useNavigate } from 'react-router-dom'
import blogStyle from './Blog.module.css'

const Blog = ({ blog }) => {
    const { _id, title, image, description, category } = blog;

    const navigate = useNavigate();
    const navigateToFullBlog = (id) => {
        navigate(`/fullBlog/${id}`);
        window.scrollTo(0, 0)
    }

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
                        <button onClick={() => navigateToFullBlog(_id)}>Continue Reading</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
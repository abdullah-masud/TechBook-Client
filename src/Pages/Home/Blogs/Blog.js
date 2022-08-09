import React from 'react';
import blogStyle from './Blog.module.css'

const Blog = ({ blog }) => {
    const { title, image, description, category } = blog;
    return (
        <div className=''>
            <div class={`${blogStyle.blogCard} border max-w-6xl`}>
                <div class={`${blogStyle.meta}`}>
                    <div class={blogStyle.photo}
                        style={{
                            backgroundImage: `url(${image})`
                        }}
                    ></div>
                    <ul class={blogStyle.details}>
                    </ul>
                </div>
                <div class={blogStyle.description}>
                    <h1>{title}</h1>
                    <h2>{category}</h2>
                    <p>{description.slice(0, 120)}</p>
                    <p class={`${blogStyle.readMore} `}>
                        <a href="#">Read More</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
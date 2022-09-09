import React from 'react';
import { useNavigate } from 'react-router-dom'
import blogStyle from '../../Pages/Home/HomeBlogs/Blog.module.css'
import { MdDeleteOutline } from 'react-icons/md';
import { toast } from 'react-toastify';

const MyBlog = ({ blog, myBlogs, setMyBlogs }) => {
    const { _id, title, image, description, category } = blog;

    const navigate = useNavigate();
    const navigateToFullBlog = (id) => {
        navigate(`/fullBlog/${id}`);
        window.scrollTo(0, 0)
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?');
        if (proceed) {
            const url = `https://techbook-server.onrender.com/allblogs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remaining = myBlogs.filter(todo => todo._id !== id);
                    setMyBlogs(remaining);
                    toast.error('Blog Deleted')
                })
        }
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
                    <div className='flex items-center justify-between '>
                        <h1 className=''>{title}</h1>
                        <MdDeleteOutline onClick={() => handleDelete(_id)} className='lg:text-4xl text-6xl  text-red-400 cursor-pointer' />
                    </div>
                    <h2>{category}</h2>
                    <p>{description?.slice(0, 120)}</p>
                    <p className={`${blogStyle.readMore} `}>
                        <button onClick={() => navigateToFullBlog(_id)}>Continue Reading</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyBlog;
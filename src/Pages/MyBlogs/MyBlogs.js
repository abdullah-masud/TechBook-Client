import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyBlog from './MyBlog';

const MyBlogs = () => {
    const [user] = useAuthState(auth);
    const [myBlogs, setMyBlogs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/profileBlogs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyBlogs(data))
    }, [myBlogs, user?.email])


    return (
        <div className='min-h-screen max-w-7xl mx-auto justify-center'>
            <h2 className='text-3xl font-semibold text-center text-primary mt-10 lg:mb-12 mb-4'>My Blogs</h2>
            <div className='grid px-3'>
                {
                    myBlogs?.map(blog => <MyBlog
                        key={blog._id}
                        blog={blog}
                        myBlogs={myBlogs}
                        setMyBlogs={setMyBlogs}
                    />).reverse()
                }
            </div>

        </div>
    );

};

export default MyBlogs;
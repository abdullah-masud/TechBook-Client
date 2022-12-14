import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyBlog from './MyBlog';

const MyBlogs = () => {
    const [user] = useAuthState(auth);
    const [myBlogs, setMyBlogs] = useState([]);

    useEffect(() => {
        fetch(`https://techbook-server.onrender.com/profileBlogs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyBlogs(data))
    }, [myBlogs, user?.email])



    if (myBlogs?.length !== 0) {
        return (
            <div className='min-h-screen max-w-7xl mx-auto justify-center'>
                <h2 className='text-3xl font-semibold text-center text-primary mt-10  mb-4'>My Blogs</h2>
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
        )
    }
    else {
        return (
            <div className='min-h-screen max-w-7xl mx-auto justify-center'>
                <h2 className='text-3xl font-semibold text-center text-primary mt-10  mb-4'>No Blogs Available</h2>
            </div>
        )
    }


};

export default MyBlogs;
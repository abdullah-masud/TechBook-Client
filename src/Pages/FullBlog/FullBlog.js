import React from 'react';
import { useParams } from 'react-router-dom';

const FullBlog = () => {
    const { blogId } = useParams();

    return (
        <div className='min-h-screen'>
            <h1>Full Blog : {blogId} </h1>
        </div>
    );
};

export default FullBlog;
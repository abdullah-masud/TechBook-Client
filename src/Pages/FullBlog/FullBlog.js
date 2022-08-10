import React from 'react';
import { useParams } from 'react-router-dom';

const FullBlog = () => {
    const { blogId } = useParams();

    return (
        <div>
            <h1>Full Blog : {blogId} </h1>
        </div>
    );
};

export default FullBlog;
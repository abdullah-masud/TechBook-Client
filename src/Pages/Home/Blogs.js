import React from 'react';
import gmail from '../../assets/blog1/gmail.png'

const Blogs = () => {
    return (
        <div className='max-w-7xl mx-auto my-12'>
            <h2 className='text-3xl font-bold'>Blogs</h2>
            {/* Blog1 */}
            <div className='my-2'>
                <h2 className='text-2xl font-semibold'>Why I stopped using Gmail — and why you should too</h2>
                <img className='my-2' src={gmail} alt="" />
                <p className='my-2'>
                    Everyone uses Gmail, right? I use it, you use it, depending on whether you created a Facebook profile for your grandmother, you probably created a Gmail address for her as well. Everyone uses Gmail, right? I use it, you use it, depending on whether you created a Facebook profile for your grandmother, you probably created a Gmail address for her as well.Everyone uses Gmail, right? I use it, you use it, depending on whether you created a Facebook profile for your grandmother, you probably created a Gmail address for her as well.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
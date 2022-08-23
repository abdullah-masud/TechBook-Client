import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Blog from '../Home/HomeBlogs/Blog';

const Profile = () => {
    return (
        <div className='min-h-screen'>
            <h2>hello</h2>
        </div>
    )
};

export default Profile;
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Blog from '../Home/HomeBlogs/Blog';
import defaultImage from '../../assets/images/defaultImage.png'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import MyBlogs from '../MyBlogs/MyBlogs';

const Profile = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: profile, isLoading, refetch } = useQuery('profile', () => fetch(`http://localhost:5000/userProfile?email=${user?.email}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    const imageStorageKey = '17b42be990566269a9132b2782f7586f';

    const onSubmit = data => {
        console.log(data)
        const image = data?.displayPicture[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const displayPicture = result.data.url
                    const userDp = {
                        displayPicture: displayPicture,
                    }
                    fetch(`http://localhost:5000/user/${user?.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userDp)
                    })
                        .then(res => res.json())
                        .then(result => {
                            refetch()
                            window.location.reload()
                            toast.success('Profile Picture Uploaded')
                            // console.log(result);
                        })
                }

            })
    }

    return (
        <>
            <div className='max-w-7xl mx-auto my-12 px-2'>
                <div className='flex lg:flex-row flex-col justify-center gap-x-20 items-center shadow-xl rounded-lg pb-10'>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col my-6 '>
                        <div className="flex flex-col justify-center items-center">
                            <img className='rounded-full w-52 h-52' src={profile[0]?.displayPicture ? profile[0]?.displayPicture : defaultImage} alt="" />

                            <input
                                {...register("displayPicture")}
                                className='my-4 w-[100px]' type="file" />
                        </div>
                        <div className='flex justify-center mt-2'>
                            <button class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-primary rounded-full hover:bg-white group">
                                <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-primary">Upload</span>
                            </button>
                        </div>
                    </form>

                    <div className='my-2'>
                        <h2 className='text-4xl text-primary lg:text-left  text-center'>{user?.displayName}</h2>
                        <h2 className='text-2xl my-4 text-primary lg:text-left text-center'>{user?.email}</h2>

                    </div>
                </div>

            </div>
            <MyBlogs />
        </>
    )
};

export default Profile;
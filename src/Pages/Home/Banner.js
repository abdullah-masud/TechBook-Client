import React from 'react';
import banner from '../../assets/images/banner3.png'
import heroImage from '../../assets/images/heroImage.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: `url(${banner})` }}>
            <div className="flex flex-col items-center w-3/4 lg:flex-row-reverse">
                <img src={heroImage} className="lg:max-w-2xl max-w-xs  rounded-lg shadow-2xl " alt='' />
                <div className='lg:mr-28'>
                    <h1 className="lg:text-6xl lg:w-full w-80 lg:mt-0 mt-3 text-3xl font-bold">Share Your Thoughts Here</h1>
                    <p className='my-5 text-lg font-semibold'>A Website that Connects Writers and Readers</p>
                    <button className='btn btn-primary bg-[#002B5B] hover:bg-[#2B4865] border-none text-white'>Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;
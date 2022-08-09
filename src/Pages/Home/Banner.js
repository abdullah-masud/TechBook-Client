import React from 'react';
import bgBanner from '../../assets/images/banner.png'
import heroImage from '../../assets/images/heroImage.jpg'

const Banner = () => {
    return (
        <div className="hero  " style={{ backgroundImage: `url(${bgBanner})` }}>
            <div className="flex flex-col items-center w-3/4 lg:flex-row-reverse py-12 max-w-7xl mx-auto">
                <img src={heroImage} className="lg:max-w-xl md:max-w-md max-w-xs  rounded-lg shadow-2xl " alt='' />
                <div className='lg:mr-28'>
                    <h1 className="lg:text-6xl lg:w-full w-80 lg:mt-0 mt-3 text-3xl font-bold">Share Your Thoughts Here</h1>
                    <p className='my-5 text-lg font-semibold'>A Website that Connects Writers and Readers</p>
                    <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#0b4553] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span class="absolute inset-0 w-full h-full bg-[#0b4553] border-2 border-[#2B4865] group-hover:bg-[#0b4553]"></span>
                        <span class="relative text-[#ffff] group-hover:text-[#ffff]">Get Started</span>
                    </a>
                </div>
            </div>
        </div >
    );
};

export default Banner;
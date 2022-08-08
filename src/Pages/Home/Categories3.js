import React from 'react';
import './Categories3.css'
import road from '../../assets/images/road.jpg'
import mountain from '../../assets/images/mountain.jpg'
import ballon from '../../assets/images/balloon.jpg'
import { Link } from 'react-router-dom';

const Categories3 = () => {
    return (
        <div className='max-w-7xl mx-auto my-12'>
            <h1 className='text-4xl font-bold'>Categories</h1>
            <div className='wrapper flex lg:justify-around lg:flex-row flex-col my-12 gap-10  lg:px-0 px-4'>
                <div className="card">
                    <img src={road} alt="" />
                    <div className='info'>
                        <h1 className='text-3xl font-bold'>Programming</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quia.</p>
                        <button className='btn btn-primary bg-[#002B5B] hover:bg-[#2B4865] border-none text-white'>Explore</button>
                    </div>
                </div>

                <div className="card">
                    <img src={road} alt="" />
                    <div className='info'>
                        <h1 className='text-3xl font-bold'>Food</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quia.</p>
                        <button className='btn btn-primary bg-[#002B5B] hover:bg-[#2B4865] border-none text-white'>Explore</button>
                    </div>
                </div>

                <div className="card">
                    <img src={road} alt="" />
                    <div className='info'>
                        <h1 className='text-3xl font-bold'>Travel</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quia.</p>
                        <button className='btn btn-primary bg-[#002B5B] hover:bg-[#2B4865] border-none text-white'>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories3;
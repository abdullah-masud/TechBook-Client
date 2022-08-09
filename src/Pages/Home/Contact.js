import React from 'react';
import contact from '../../assets/images/contact.png'

const Contact = () => {
    return (
        <div className='max-w-7xl mx-auto  my-12 '>
            <div className=" ">
                <div className="hero-content flex-col  lg:flex-row ">
                    <img className='lg:w-1/2 ' src={contact} alt='' />
                    <div className=' w-full flex lg:items-start items-center flex-col ' >
                        <h1 className="text-5xl font-bold ">Contact Us</h1>
                        <input type="text" placeholder="Name" className="input input-bordered w-4/5 my-5" />
                        <input type="text" placeholder="Email" className="input input-bordered w-4/5 " />
                        <textarea rows={4} className="textarea textarea-bordered w-4/5 mt-5" placeholder="Message"></textarea>
                        <div className='lg:ml-1 my-4'>
                            <a href="#_" class=" relative inline-block px-4 py-2 font-medium group">
                                <span class=" absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#0b4553] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-white border-2 border-[#2B4865] group-hover:bg-[#0b4553]"></span>
                                <span class="relative text-[#0b4553] group-hover:text-white">Submit
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
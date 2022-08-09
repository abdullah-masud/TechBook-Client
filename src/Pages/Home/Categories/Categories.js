import React from 'react';
import food from '../../../assets/images/food.jpg'
import travel from '../../../assets/images/travel.jpg'
import programming from '../../../assets/images/programming.jpg'
import categoriesStyle from './Categories.module.css'


const Categories = () => {
    return (
        <div className='max-w-7xl mx-auto lg:my-16 my-10'>
            <h1 className='text-5xl font-bold text-center'>Categories</h1>
            <div className='wrapper flex lg:justify-around lg:flex-row flex-col my-12 gap-10  lg:px-0 px-4'>
                <div className={`${categoriesStyle.card} card`}>
                    <img src={programming} alt="" />
                    <div className={categoriesStyle.info}>
                        <h1 className='text-3xl font-bold'>Programming</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quia.</p>
                        <button className={`${categoriesStyle.btn} btn border-none text-white`}>Explore</button>
                    </div>
                </div>

                <div className={`${categoriesStyle.card} card`}>
                    <img src={food} alt="" />
                    <div className={categoriesStyle.info}>
                        <h1 className='text-3xl font-bold'>Food</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quia.</p>
                        <button className={`${categoriesStyle.btn} btn border-none text-white`}>Explore</button>
                    </div>
                </div>

                <div className={`${categoriesStyle.card} card`}>
                    <img src={travel} alt="" />
                    <div className={categoriesStyle.info}>
                        <h1 className='text-3xl font-bold'>Travel</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quia.</p>
                        <button className={`${categoriesStyle.btn} btn border-none text-white`}>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
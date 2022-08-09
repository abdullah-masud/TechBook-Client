import React from 'react';
import Banner from './Banner';
import Blogs from './Blogs/Blogs';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <Blogs />
        </div>
    );
};

export default Home;
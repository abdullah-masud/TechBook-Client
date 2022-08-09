import React from 'react';
import Banner from './Banner';
import HomeBlogs from './HomeBlogs/HomeBlogs';
import Categories from './Categories/Categories';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <HomeBlogs />
            <Contact />
        </div>
    );
};

export default Home;
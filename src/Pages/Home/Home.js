import React from 'react';
import Banner from './Banner';
import Blogs from './Blogs';
import Categories from './Categories';
import Categories2 from './Categories2';
import Categories3 from './Categories3';

const Home = () => {
    return (
        <div>
            <Banner />
            {/* <Categories /> */}
            {/* <Categories2 /> */}
            <Categories3 />
        </div>
    );
};

export default Home;
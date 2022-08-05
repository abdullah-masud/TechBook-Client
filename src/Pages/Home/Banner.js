import React from 'react';
import banner from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div class="hero borde min-h-screen" style={{ backgroundImage: `url(${banner})` }
            }>
                <div class="hero-overlay bg-opacity-50"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">TechBook</h1>
                        <p class="">A website that connects writers and readers</p>
                        <p class="mb-5">Share your stores with us.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
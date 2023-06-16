/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Gallery from './Gallery';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <div className='grid lg:grid-cols-3 gap-4 mx-10'>
                <div className='lg:col-span-2'>
                    <Category></Category>
                </div>
                <div>
                    <Review></Review>
                </div>
            </div>

        </div>
    );
};

export default Home;
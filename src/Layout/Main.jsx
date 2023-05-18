/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';

const Main = () => {
    return (
        <div className='my-12 mx-12 shadow-lg rounded-lg'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
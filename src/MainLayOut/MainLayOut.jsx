import React from 'react';
import Navbar from './../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayOut = () => {
    return (
        <>
          <Navbar></Navbar>  
          <div className='min-h-[calc(100vh-116px)]'>
                <div className=' mx-auto px-4 md:px-8 lg:px-12 xl:px-16'>
                    <Outlet/>
                </div>
          </div>
          <Footer></Footer>
        </>
    );
};

export default MainLayOut;
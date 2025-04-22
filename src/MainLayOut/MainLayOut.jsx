import React from 'react';
import Navbar from './../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayOut = () => {
    return (
        <>
          <Navbar></Navbar>  
          <div className='min-h-[calc(100vh-116px)]'>
                <div className='sm:container mx-auto'>
                    <Outlet/>
                </div>
          </div>
          <Footer></Footer>
        </>
    );
};

export default MainLayOut;
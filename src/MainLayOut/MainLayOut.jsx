import React from 'react';
import Navbar from './../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

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
          <ToastContainer></ToastContainer>
        </>
    );
};

export default MainLayOut;
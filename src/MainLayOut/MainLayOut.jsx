import React from 'react';
import Navbar from './../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayOut = () => {
    return (
        <>
          <Navbar></Navbar>  
          <Outlet></Outlet>
          <Footer></Footer>
        </>
    );
};

export default MainLayOut;
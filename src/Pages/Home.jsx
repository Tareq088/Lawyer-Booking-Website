import React from 'react';
import Hero from '../Components/Hero';
import Services from './../Components/Services';
import LawyersContainer from './../Components/LawyersContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const lawyersData = useLoaderData();
    
    return (
        <div>
            <Hero/>
            <LawyersContainer lawyersData={lawyersData}></LawyersContainer>
            <Services/>
        </div>
    );
};

export default Home;
import React from 'react';
import heroImg from '../assets/hero.png'

const Hero = () => {
    return (
        <div className='relative'>
            <img src={heroImg} alt="" className='w-full max-h-[500px]'/>
            <div className='sm:container mx-auto text-white absolute top-[20%] md:top-[25%] lg:top-[30%] text-center'>
                <h1 className='text-base sm:text-lg md:text-2xl lg:text-4xl font-extrabold'>It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h1>
                <p className='text-xs sm:text-base md:text-lg lg:text-lg font-medium'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>


        </div>
    );
};

export default Hero;
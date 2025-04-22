import React from 'react';
import service1Img from '../assets/service-1.png';
import service2Img from '../assets/service-2.png';
import service3Img from '../assets/service-3.png';
import service4Img from '../assets/service-4.png';
import CountUp from 'react-countup';

const Services = () => {
    return (
        <div className=' my-10'>
            <h2 className='text-3xl font-extrabold text-center'>We Provide Best Law Services</h2>
            <p className='tex-base mt-4 mb-8 text-center'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
                <div className='bg-gray-200 py-5 px-10 rounded-2xl flex flex-col space-y-2'>
                    <img className='w-15 h-15' src={service1Img} alt="service-1 image" />
                    <p className='text-4xl font-extrabold'> <CountUp start={0} end={199} />+</p>
                    <p className='text-lg'>Total Lawyer</p>
                </div>
                <div className='bg-gray-200 py-5 px-10 rounded-2xl flex flex-col space-y-2'>
                    <img className='w-15 h-15' src={service2Img} alt="service-1 image" />
                    <p className='text-4xl font-extrabold'> <CountUp start={0} end={467} />+</p>
                    <p className='text-lg'>Total Reviews</p>
                </div>
                <div className='bg-gray-200 py-5 px-10 rounded-2xl flex flex-col space-y-2'>
                    <img className='w-15 h-15' src={service3Img} alt="service-1 image" />
                    <p className='text-4xl font-extrabold'> <CountUp start={0} end={1900} />+</p>
                    <p className='text-lg'>Cases Initiated</p>
                </div>
                <div className='bg-gray-200 py-5 px-10 rounded-2xl flex flex-col space-y-2'>
                    <img className='w-15 h-15' src={service4Img} alt="service-1 image" />
                    <p className='text-4xl font-extrabold'> <CountUp start={0} end={300} />+</p>
                    <p className='text-lg'>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
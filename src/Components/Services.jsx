import React from 'react';
import service1Img from '../assets/service-1.png'

const Services = () => {
    return (
        <div>
            <h2>We Provide Best Law Services</h2>
            <p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='bg-gray-200 p-5 border rounded-2xl flex flex-col'>
                    <img className='w-15' src={service1Img} alt="service-1 image" />
                    <p>199+</p>
                    <p>Total Lawyer</p>
                </div>
                <div className='bg-gray-200 p-5 border rounded-2xl flex flex-col'>
                    <img className='w-10' src={service1Img} alt="service-1 image" />
                    <p>199+</p>
                    <p>Total Lawyer</p>
                </div>
                <div className='bg-gray-200 p-5 border rounded-2xl flex flex-col'>
                    <img className='w-10' src={service1Img} alt="service-1 image" />
                    <p>199+</p>
                    <p>Total Lawyer</p>
                </div>
                <div className='bg-gray-200 p-5 border rounded-2xl flex flex-col'>
                    <img className='w-10' src={service1Img} alt="service-1 image" />
                    <p>199+</p>
                    <p>Total Lawyer</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
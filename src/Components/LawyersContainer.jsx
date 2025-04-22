import React from 'react';
import LawyerCard from './LawyerCard';
import Button from './UI/Button';

const LawyersContainer = ({lawyersData}) => {
    // console.log(lawyersData);
    
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-extrabold text-center'>Our Best Lawyers</h2>
            <p className='tex-base mt-4 mb-8 text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine <br /> checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='grid gap-x-20 grid-cols-1 lg:grid-cols-2'>
            {
                lawyersData.map( lawyer => 
                                        <LawyerCard 
                                        key={lawyer.id}
                                        lawyer={lawyer}>

                                        </LawyerCard>)
            }
            </div>
            <div className='text-center mt-10'>
                <Button label="Show All Lawyer"></Button>
            </div>
     
        </div>

    );
};

export default LawyersContainer;
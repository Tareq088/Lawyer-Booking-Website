import React, { useLayoutEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';

const LawyerDetails = () => {
    const LawyersData = useLoaderData();
    // console.log(Lawyersdata)
            // jei id er view details e click korchi sei id er value ta asbe 
    const {id} = useParams();
    console.log(id, typeof(id))
            // jei id te click korchi sei er data khojar jonno find use korchi
    const singleLawyerData = LawyersData.find(lawyer => lawyer.id === parseInt(id));
    console.log(singleLawyerData);
            // singleLawyerData er data destructure korchi
    const {name, licenseNo, workingExperience,photo,expert, visitPrice} = singleLawyerData || {};

    return (
        <div>
            <div className='bg-gray-100 rounded-2xl p-7 text-center'>
                <h2 className='text-3xl font-extrabold'>Lawyer’s Profile Details</h2>
                <p className='tex-base mt-4 mb-8'>A lawyer, also known as an attorney, is a legal professional who provides advice, representation, and legal <br /> services to individuals, businesses, and organizations.</p>
            </div>
            <br /><br />
            <div className='p-7 rounded-2xl'>
                <div className="flex">
                <div className='bg-gray-100 rounded-xl p-6 w-[20%]'>
                     <img className='w-27 h-27 rounded-full object-cover' src={photo}  alt="Lawyer Photo" /> 
                </div>

                <div className='w-[75%] space-y-0'>   
                        <p className='inline-block py-1 px-3 border rounded-3xl text-sm bg-blue-100 text-blue-900'>  {workingExperience}</p>

                    <h2 className="text-xl font-extrabold">{name}</h2>
                    <div className='flex gap-10'>
                        <p className='text-base text-gray-400'>{expert}</p>
                        <p className='flex gap-2  text-gray-500 my-1'> <span>&#174;</span>  License No: {licenseNo}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p>Availability</p>
                        <p className=' py-1 px-3 border rounded-3xl text-sm bg-blue-100 text-blue-900'>  Saturday </p>
                        <p className=' py-1 px-3 border rounded-3xl text-sm bg-blue-100 text-blue-900'>  Sunday </p>
                        <p className=' py-1 px-3 border rounded-3xl text-sm bg-blue-100 text-blue-900'>  Monday </p>
                    </div>
                    <div className='flex gap-2'>
                        <p>Consultation Fee:</p>
                        <p>Taka: {visitPrice.split(" ")[1]}</p>
                    </div>

                    {/* <Link to={`/lawyer-details/${id}`}>
                    <button 
                        className="btn border-blue-700 text-blue-800 w-full rounded-4xl hover:text-white hover:bg-blue-700">View Details
                    </button>
                    </Link> */}
               
                </div>
                
                </div>
            </div>
        </div>
    );
};

export default LawyerDetails;
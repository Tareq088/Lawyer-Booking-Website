import React from 'react';
import { Link } from 'react-router';


const LawyerCard = ({lawyer}) => {
    //console.log(lawyer)
    const {name, id, licenseNo, workingExperience,photo,expert} = lawyer || {};
    return (
        <div>
            <div className='flex gap-7 shadow-md rounded-2xl p-4 mb-10'>
                <div className='bg-gray-100 rounded-xl px-6 pt-6 w-[20%'>
                     <img className='w-27 h-25 rounded-full object-cover' src={photo}  alt="Lawyer Photo" /> 
                </div>
                <div className='w-[75%] space-y-0 '>   
                    <div className='flex gap-3 mb-3'>
                        <p className='py-1 px-3 rounded-3xl text-sm bg-green-100 text-green-900'>Available</p>
                        <p className='py-1 px-3 rounded-3xl text-sm bg-blue-100 text-blue-900'>{workingExperience}</p>
                    </div>
                    <h2 className="text-xl font-extrabold">{name}</h2>
                    <p className='text-base text-gray-400'>{expert}</p>
                    <hr className='border-dotted  w-fll h-1'/>
                    <p className='flex gap-2  text-gray-500 my-1'> <span>&#174;</span>  License No: {licenseNo}</p>
                    <Link to={`/lawyer-details/${id}`}>
                        <button 
                            className="btn border-blue-100 text-blue-800 w-full rounded-4xl hover:text-white hover:bg-blue-700">View Details
                        </button>
                    </Link>
               
                </div>

            </div>
            
        </div>
    );
};

export default LawyerCard;
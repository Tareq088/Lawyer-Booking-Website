import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams} from 'react-router';
import exclamatoryImage from'../assets/exclamatory.png';
import { addBooking } from '../Utilities';
import ErrorPage from './ErrorPage';
import Button from '../Components/UI/Button';
const LawyerDetails = () => {
    const LawyersData = useLoaderData();
            // jei id er view details e click korchi sei id er value ta asbe 
    const {id} = useParams();
            console.log(id, typeof(id))
            // jei id te click korchi sei er data khojar jonno find use korchi
    const singleLawyerData = LawyersData.find(lawyer => lawyer.id === parseInt(id));
    console.log(singleLawyerData)
            // singleLawyerData er data destructure korchi
    const {name, licenseNo, workingExperience,photo,expert, visitPrice,available} = singleLawyerData || {};
            //ui er jonno: book e click korle lawyer er data kono ekjaigate rakhbo
   const handleBooking = (singlerLawyer) =>{
    // setLawyeBooking([...lawyerBooking, singleLawyer])
    addBooking(singlerLawyer)
   }
   const[idFound,setIdFound] = useState(false);
   useEffect( ()=>{
        if(singleLawyerData){
            setIdFound(true)
        }
       else{ setIdFound(false)}
   } , [singleLawyerData])

//    const [lawyer] = useState(false);
    return (
        <div>
            {
                idFound === false?
                (
                    <div className='flex flex-col items-center space-y-5 p-2 mb-7'>
                        <h1 className='text-9xl text-red-700 font-extrabold mt-10 mb-5'>404</h1>
                        <p>Oops! The page You are looking for doesn't exist.</p>
                        <Link to='/'><Button label='Go Back Home'></Button></Link>
                    </div>
                )
                :
                <div>
                    <div className='bg-gray-100 rounded-2xl p-7 text-center'>
                        <h2 className='text-3xl font-extrabold'>Lawyer’s Profile Details</h2>
                        <p className='tex-base mt-4 mb-8'>A lawyer, also known as an attorney, is a legal professional who provides advice, representation, and legal <br /> services to individuals, businesses, and organizations.</p>
                    </div>
                    <br />
                    <div className='p-7 border border-gray-300 rounded-2xl'>
                        <div className="flex flex-col sm:flex-row gap-5 md:gap-10 lg:gap-20 items-center">
                            <div className='bg-gray-100 rounded-xl p-3 sm:p-6 sm:w-20% md:w-[30%] lg:w-[35%] flex justify-center items-center'>
                                <img className='w-30 h-30 sm:w-30 sm:h-30  md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-full object-cover' src={photo}  alt="Lawyer Photo" /> 
                            </div>
                            <div className='w-[75%] space-y-2'>   
                            <p className='inline-block py-1 px-3 rounded-3xl text-sm bg-blue-100 text-blue-900'>  {workingExperience}</p>
                            <h2 className="text-xl md:text-3xl font-extrabold">{name}</h2>
                            <div className='flex flex-col sm:flex-row sm:gap-10 sm:items-center'>
                                <p className='text-base text-gray-400'>{expert}</p>
                                <p className='text-base flex gap-2  text-gray-500 my-1'> <span>&#174;</span>  License No: {licenseNo}</p>
                            </div>
                            <div className='flex flex-col sm:flex-row sm:gap-2'>
                                <p className='font-bold'>Availability</p>
                                <div className='flex gap-1'>
                                    {
                                        available.map((day,index)=> {return(
                                            <div key={index}>
                                                <p className=' py-1 px-3 rounded-3xl text-sm bg-amber-50 text-amber-500 cursor-pointer'>  {day} </p>
                                            </div>
                                        )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <p className='font-bold'>Consultation Fee:</p>
                                        {/* taka. 400 dewa ache visitPrice e: tai age split kore taka lekha bad dilam */}
                                <p className='text-green-800 font-bold'>Taka: {visitPrice}</p>
                            </div>

                            </div>
                        
                        </div>
                    </div>
                    <br />
                    <div className='p-7 border border-gray-300 rounded-2xl'>
                        <h2 className='text-xl font-extrabold text-center'>Book an Appointment</h2>
                        <hr className='text-gray-500 border-dotted w-full my-3'/>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold'>Availability</p>
                            <p className=' py-1 px-3 border border-green-300 rounded-3xl text-sm font-bold bg-green-100 text-green-700 cursor-pointer'>  Lawyer Available Today </p>
                        </div>
                        <hr className='text-gray-500 border w-full my-3'/>
                        <div className='inline-flex gap-3 py-1 px-3 rounded-3xl text-sm bg-red-50 text-amber-400 cursor-pointer mb-2'>
                            <img src={exclamatoryImage} className='w-5 h-5' alt="" /> 
                            <p className=''> 
                                Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation. </p>
                        </div>
                        <Link to='/booking'>
                        <button 
                        
                            onClick={ ()=>{
                                handleBooking(singleLawyerData)
                            }
                            }

                            href="#_" className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold leading-6 text-white bg-green-600 border border-transparent rounded-full hover:bg-green-500 focus:outline-none focus:ring-green-600 cursor-pointer">
                            Book Appointment Now
                        </button>
                        </Link>
                    </div>
                </div>
            }
        </div>
        
    );
};

export default LawyerDetails;
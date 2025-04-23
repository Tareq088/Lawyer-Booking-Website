import React from 'react';

const BookingAppointment = ({lawyer}) => {
    const {name, expert, visitPrice,} = lawyer;
    return (
        <div>
                                    <div className='border border-gray-200 rounded-2xl p-10 mb-5'>
                            <p className='font-bold text-xl mb-1'>{name}</p>
                            <div className='flex justify-between'>
                                <p className='text-base text-gray-400'>{expert}</p>
                                <p className='text-base text-gray-400'>Appointment Fee: <span>{visitPrice} Taka</span></p>
                            </div>
                            <hr className='text-gray-500 border-dotted w-full my-3'/>
                            <button 
                                href="#_" className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold leading-6 text-red-700 hover:text-white border border-red-600 rounded-full hover:bg-red-500 focus:outline-none focus:ring-red-600 cursor-pointer">
                                Cancel Appointment
                            </button>
                        </div>
            
        </div>
    );
};

export default BookingAppointment;
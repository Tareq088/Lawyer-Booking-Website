import React from 'react';
import { useLoaderData } from 'react-router';
import { LuCalendarCog } from "react-icons/lu";

const Blogs = () => {
    const quesAnswers = useLoaderData();
    // console.log(quesAnswers)
    const myDate = new Date().toISOString().split('T')[0];
    // console.log(myDate)
    return (
        <div>
            <h2 className='text-3xl font-extrabold text-center'>Blogs</h2>
            <p className='tex-base text-gray-500 mt-4 mb-8 text-center'>Let's explore some basic ques and answers where the data are kept in json format.</p>
            {
                quesAnswers.map((eachQuesAns,index) => 
                    <div key={index} className='bg-gray-100 px-4 py-8 my-5 rounded-2xl'>
                        <p className='text-lg font-bold'>{eachQuesAns.question}</p>
                        <hr className='text-gray-500 border-dotted w-full my-3'/>
                        <p className='font-bold text-blue-800'>Answer:</p>
                        <p>{eachQuesAns.answer}</p>
                        <hr className='text-gray-500 border-dotted w-full my-3'/>
                        <div className='flex gap-2 items-center'>
                        <LuCalendarCog />
                        <p><span>Added at </span>{myDate}</p>
                        </div>
                    </div>
                 )
            }
        </div>
    );
};

export default Blogs;
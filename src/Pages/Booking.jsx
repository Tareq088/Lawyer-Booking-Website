import React, { useEffect, useState } from 'react';
import { getBooking, removeBooking } from '../Utilities';
import { BarChart, XAxis, YAxis,Bar, Cell, CartesianGrid, ResponsiveContainer,} from 'recharts';
import BookingAppointment from '../Components/BookingAppointment';
import Button from '../Components/UI/Button';
import { Link } from 'react-router';


const Booking = () => {
    const[displayLawyers, setDisplayLawyers] = useState([])
    useEffect( ()=>{
        setDisplayLawyers(getBooking())
    } , [] )
    const handleRemoveBooking =(singleLawyer)=>{
                // website or UI theke remove korar jonno
        const remainingLawyer = displayLawyers.filter(Lawyer => Lawyer.id !== singleLawyer.id);
        setDisplayLawyers(remainingLawyer); 
        // local storage theke remove korar jonno
        // index.js file er removeBooking e jei ta te cancel click korchi sekahne singlelawyer er data pathabo
        removeBooking(singleLawyer)
    }
    // console.log(displayLawyers)

    const colors = ['green', 'blue', 'yellow', 'tomato', 'red', 'pink'];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
    return (
        <div style={{width:"100%",height:"100%"}}>
            {
                displayLawyers.length === 0?

                (
                    <div className='flex flex-col items-center gap-3 my-20'>
                        <h1 className='text-3xl font-bold'>You Have Not Booked Any Appointment Yet</h1>
                        <Link to='/'>
                            <Button label="Book an Appointment"></Button>
                        </Link>
                        
                    </div>
                )
                :
                <div>
                    <h2 className='text-3xl font-extrabold text-center'>My Today Appointments</h2>
                    <p className='tex-base mt-4 mb-8 text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart width={1300} height={300} margin={{
                                                                        top: 5,
                                                                        right: 30,
                                                                        left: 20,
                                                                        bottom: 5,
                                                                    }} data={displayLawyers}>
                                <CartesianGrid strokeDasharray="8 8" />
                                <XAxis dataKey={"name"} fontSize={12} md:fontSize={20}></XAxis>
                                <YAxis></YAxis>
                                <Bar dataKey={"visitPrice"} fill="#8884d8" shape={<TriangleBar/>} label={{ position: 'top' }}>
                                    {
                                        displayLawyers.map((entry,index)=><Cell key={`cell-${index}`} fill={colors[index % 20]}></Cell>)
                                    }
                                </Bar>
                            </BarChart>
                    </ResponsiveContainer>
                  

                 

                    {
                        displayLawyers.map((lawyer,index) => 
                                                        <BookingAppointment key={index} 
                                                        handleRemoveBooking={handleRemoveBooking}
                                                        lawyer={lawyer}>
                                                        </BookingAppointment>
                                                        )
                    }
                </div>
            }
        </div>
    );
};

export default Booking;
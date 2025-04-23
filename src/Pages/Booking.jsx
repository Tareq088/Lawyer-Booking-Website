import React, { useEffect, useState } from 'react';
import { getBooking } from '../Utilities';
import { BarChart, XAxis, YAxis,Bar, Cell, CartesianGrid } from 'recharts';
import BookingAppointment from '../Components/BookingAppointment';


const Booking = () => {
    const[displayLawyers, setDisplayLawyers] = useState([])
    useEffect( ()=>{
        setDisplayLawyers(getBooking())
    } , [] )
    console.log(displayLawyers)
    // const price = parseInt(displayLawyers.visitPrice.match(/\d+/));
    // console.log(price)
    // displayLawyers.visitPrice.split(" ")[1]
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
        <div>
            <h2 className='text-3xl font-extrabold text-center'>My Today Appointments</h2>
            <p className='tex-base mt-4 mb-8 text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            <BarChart width={1300} height={300} data={displayLawyers}>
                <CartesianGrid strokeDasharray="8 8" />
                <XAxis dataKey={"name"} fontSize={12}></XAxis>
                <YAxis></YAxis>
                
                <Bar dataKey={"visitPrice"} fill="#8884d8" shape={<TriangleBar/>}>
                    {
                        displayLawyers.map((entry,index)=><Cell key={`cell-${index}`} fill={colors[index % 20]}></Cell>)
                    }
                </Bar>

            </BarChart>
            {
                displayLawyers.map((lawyer,index) => 
                                                <BookingAppointment key={index} 
                                                lawyer={lawyer}>
                                                </BookingAppointment>
                                                )
            }
        </div>
    );
};

export default Booking;
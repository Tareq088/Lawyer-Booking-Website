import {toast} from 'react-toastify';


const getBooking =()=>{
    const Bookings = localStorage.getItem("booking");
    if(Bookings) return JSON.parse(Bookings)
        return []
}

const addBooking = (singleLawyer) =>{
    const bookingCart = getBooking();
    const isExist = bookingCart.find(p => p.id === singleLawyer.id)
    if(isExist) {toast.error("Appointment already scheduled") ; return console.log("added already") }
        bookingCart.push(singleLawyer);
        toast.success(`successfully shcedule for ${singleLawyer.name}  successfully`)
    localStorage.setItem("booking",JSON.stringify(bookingCart))
}
const removeBooking = (singleLawyer) =>{
    const bookingCart = getBooking();
    const remainingCart = bookingCart.filter(p =>p.id !== singleLawyer.id);
    localStorage.setItem("booking", JSON.stringify(remainingCart));
    toast.warn(`Appointment form ${singleLawyer.name}removed`)
}

export {
    getBooking,
    addBooking,
    removeBooking,

}
import {toast} from "react-hot-toast";


const getBooking =()=>{
    const Bookings = localStorage.getItem("booking");
    if(Bookings) return JSON.parse(Bookings)
        return []
}

const addBooking = (singleLawyer) =>{
    const bookingCart = getBooking();
    const isExist = bookingCart.find(p => p.id === singleLawyer.id)
    if(isExist) {toast("deleted") ; return console.log("added already") }
        bookingCart.push(singleLawyer);
        toast.success("successfully added")
    localStorage.setItem("booking",JSON.stringify(bookingCart))
}

export {
    getBooking,
    addBooking,

}
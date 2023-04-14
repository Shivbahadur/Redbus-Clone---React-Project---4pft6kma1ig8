import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmSeat = () => {
    const location=useLocation();
    const{noOfSeats,ticketPrice}=location.state;
    console.log(noOfSeats.length);
    return (
        <div>
            <div className="ticketConfirmation">
            <h1 className="fare">Total fare amount: {noOfSeats.length} x {ticketPrice} = &#8377; {noOfSeats.length*ticketPrice}</h1>
                congratulation your ticket is booked.
            </div>
        </div>
    )
}

export default ConfirmSeat;
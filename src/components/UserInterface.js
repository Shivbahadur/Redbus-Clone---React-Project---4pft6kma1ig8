import React from "react";

const UserInterface=(props)=>{
    //const{name,age,seatNO,phoneNumber,gender}=props.details;
    console.log("userInterface",props);
    return(
        <div>
                {props.details.map((item,index)=>(
                    <li className="ls">
                    <div>Name: {item.name}</div>
                    <div>Age: {item.age}</div>
                    <div>Gender: {item.gender}</div>
                    <div>Seat NO: {item.seatNO}</div>
                    <div>Phone number: {item.phoneNumber}</div>
                </li>
                ))}
        </div>
    )
}

export default UserInterface;
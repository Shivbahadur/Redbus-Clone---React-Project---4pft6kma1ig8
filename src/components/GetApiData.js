import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

let GetApiData = (props) => {

    const navigate=useNavigate();
    const[data,setData]=useState([]);
    useEffect(()=>{
        console.log(props.val);
        setData(props.val);
    })
    

    let arrangeDeparture=()=>{}
    let arrangeArrival=()=>{}
    
    let arrangeRating=()=>{
        let arrangeData= data.sort((a,b)=>{
            return a.rating-b.rating;
        })
        console.log('rating of bus',arrangeData);
    }

    let arrangePrice=()=>{
        let arrangeData= data.sort((a,b)=>{
            return a.ticketPrice-b.ticketPrice;
        })
        console.log('price',arrangeData);
    }

    const bookTicket=(e)=>{
        console.log(e.target.id);
        navigate("/BusSeats", {state:{busData: data,id: e.target.id}});
    }



    return (
        <div>
            
            <div className="displayBuses">
            <div className="header">
                <h1  className="heading">SORT BY:</h1>
                <button onClick={arrangeDeparture} className="headerBtn">Departure</button>
                <button onClick={arrangeArrival} className="headerBtn">Arrival</button>
                <button onClick={arrangeRating} className="headerBtn">Rating</button>
                <button onClick={arrangePrice} className="headerBtn">Price</button>
            </div>
                    {
                        (data.length==0) ? <h1 className="noBusFound">No bus found</h1> :  data.map((item) => (
                            <div className="list" onClick={bookTicket} id={item.id}>
                                <div className="highlight">{item.busName}</div>
                                <div>   DEPARTURE <br /><span className="highlight">{item.departureTime}</span></div>
                                <div>   ARRIVAL <br /><span className="highlight">{item.arrivalTime}</span></div>
                                <div className="highlight bgC">__/10</div>
                                <div className="highlight">{item.ticketPrice}/-</div>
                            </div>
                    )) 
                    }
            </div>
        </div>
    )
}

export default GetApiData;
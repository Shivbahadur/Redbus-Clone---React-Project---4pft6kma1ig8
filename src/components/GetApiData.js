import React, { useState, useEffect } from "react";

let GetApiData = (props) => {

    const[data,setData]=useState([]);
    useEffect(()=>{
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
                        data.map((item) => (
                            <div className="list">
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
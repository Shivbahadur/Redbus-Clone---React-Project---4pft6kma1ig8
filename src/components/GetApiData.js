import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

let GetApiData = (props) => {

    const navigate=useNavigate();
    const[data,setData]=useState([]);
    useEffect(()=>{
        console.log(props.val);
        setData(props.val);
    })
    

    let arrangeDeparture=()=>{
        data.departureTime.sort((a, b) => {
            // extract the hour and minute components of each time string
            const aComponents = a.split(/[^\d]/);
            const bComponents = b.split(/[^\d]/);
            let aHour = parseInt(aComponents[0]);
            let bHour = parseInt(bComponents[0]);
            const aMinute = parseInt(aComponents[1]);
            const bMinute = parseInt(bComponents[1]);
    
            // convert AM/PM to 24-hour format
            if (a.includes("PM") && aHour < 12) aHour += 12;
            if (b.includes("PM") && bHour < 12) bHour += 12;
    
            // compare the times based on their hour and minute components
            if (aHour < bHour) return -1;
            if (aHour > bHour) return 1;
            if (aMinute < bMinute) return -1;
            if (aMinute > bMinute) return 1;
            return 0;
        });
    }
    let arrangeArrival=()=>{
        data.arrivalTime.sort((a, b) => {
            // extract the hour and minute components of each time string
            const aComponents = a.split(/[^\d]/);
            const bComponents = b.split(/[^\d]/);
            let aHour = parseInt(aComponents[0]);
            let bHour = parseInt(bComponents[0]);
            const aMinute = parseInt(aComponents[1]);
            const bMinute = parseInt(bComponents[1]);
    
            // convert AM/PM to 24-hour format
            if (a.includes("PM") && aHour < 12) aHour += 12;
            if (b.includes("PM") && bHour < 12) bHour += 12;
    
            // compare the times based on their hour and minute components
            if (aHour < bHour) return -1;
            if (aHour > bHour) return 1;
            if (aMinute < bMinute) return -1;
            if (aMinute > bMinute) return 1;
            return 0;
        });
    }
    

    let arrangePrice=()=>{
        data.sort((a,b)=>{
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
                <button className="headerBtn">Rating</button>
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
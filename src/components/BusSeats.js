import React from 'react';
import '../styles/BusSeats.css';
import { useLocation, useNavigate } from 'react-router-dom';
import busIcon from '../components/resources/busIcon.png';

const BusSeats = () => {

    // variables for storing bus detail
    var busName='';
    var departureTime='';
    var arrivalTime='';
    var ticketPrice='';

    //recieve data from getApiData
    const location = useLocation();
    const{busData,id}=location.state;

    for(let i=0; i<busData.length;i++){
        if(busData[i].id==id){
            busName= busData[i].busName ;
            arrivalTime= busData[i].arrivalTime;
            departureTime= busData[i].departureTime;
            ticketPrice= busData[i].ticketPrice;
        }
    }

// booking seats
    var noOfSeats=[];
    const bookBusSeat = (e) => {
        e.target.classList.toggle('seatColor');
        if(e.target.className !='seat'){
            noOfSeats[e.target.id-1]=e.target.id;
        }else{
            noOfSeats[e.target.id-1]= null;
        }
    }

    const navigate=useNavigate();
    const bookTicket=()=>{
        navigate('/UserDetail',{state:{noOfSeats:noOfSeats,ticketPrice:ticketPrice}});
    }
    

    return (
        <div className='busSeatPage'>
            <br/><br/>
            <div className="list">
                <div className="highlight">{busName}</div>
                <div>   DEPARTURE <br /><span className="highlight">{departureTime}</span></div>
                <div>   ARRIVAL <br /><span className="highlight">{arrivalTime}</span></div>
                <div className="highlight bgC">__/10</div>
                <div className="highlight">{ticketPrice}/-</div>
            </div>
            <br/><br/>
            <div>
                <img src={busIcon} className="busImgIcon busColor"/>
            </div>
            <div className='busStructure'>
                <div className='largeSide'>
                    <button className='seat' onClick={bookBusSeat} id='24'>A24</button><button className='seat' onClick={bookBusSeat} id='23'>A23</button>
                    <button className='seat' onClick={bookBusSeat} id='22'>A22</button><button className='seat' onClick={bookBusSeat} id='21'>A21</button>
                    <button className='seat' onClick={bookBusSeat} id='20'>A20</button><button className='seat' onClick={bookBusSeat} id='19'>A19</button>
                    <button className='seat' onClick={bookBusSeat} id='18'>A18</button><button className='seat' onClick={bookBusSeat} id='17'>A17</button>
                    <button className='seat' onClick={bookBusSeat} id='16'>A16</button><button className='seat' onClick={bookBusSeat} id='15'>A15</button>
                    <button className='seat' onClick={bookBusSeat} id='14'>A14</button><button className='seat' onClick={bookBusSeat} id='13'>A13</button>
                    <button className='seat' onClick={bookBusSeat} id='12'>A12</button><button className='seat' onClick={bookBusSeat} id='11'>A11</button>
                    <button className='seat' onClick={bookBusSeat} id='10'>A10</button><button className='seat' onClick={bookBusSeat} id='9'>A9</button>
                    
                </div>
                <div className='smallSide'>
                    <button className='seat' onClick={bookBusSeat} id='8'>A8</button><button className='seat' onClick={bookBusSeat} id='7'>A7</button>
                    <button className='seat' onClick={bookBusSeat} id='6'>A6</button><button className='seat' onClick={bookBusSeat} id='5'>A5</button>
                    <button className='seat' onClick={bookBusSeat} id='4'>A4</button><button className='seat' onClick={bookBusSeat} id='3'>A3</button>
                    <button className='seat' onClick={bookBusSeat} id='2'>A2</button><button className='seat' onClick={bookBusSeat} id='1'>A1</button>
                </div>
            </div><br/>
            <div className='arrowBelowBus'>
                -----------------------------------------------&rarr; 
            </div><br/><br/>
            <button className='btnBookTicket' onClick={bookTicket}>BOOK TICKET</button>
        </div>
    )
}

export default BusSeats;
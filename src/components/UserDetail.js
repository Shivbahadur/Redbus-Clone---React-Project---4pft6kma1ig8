import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserInterface from './UserInterface';

const UserDetail = () => {
    //useLocation hook is used to get data from where button is clicked.
    const location = useLocation();
    const { noOfSeats, ticketPrice } = location.state;
    let j = 0;
    let arr = [];
    for (let i of noOfSeats) {
        if (i != null) {
            arr[j] = i;
            j++;
        }
    }
    const [x,setX]=useState(1);
    console.log("x value",x);

    const [error, setError] = useState('');
    const initialValues = { name: '', age: '', gender: 'Male', phoneNumber: '', seatNO: '' };
    const [inputValue, setInputValue] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(true);

    const [pasData, setPasData] = useState([]);
    console.log(pasData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    }


    const add = (e) => {
        if (!inputValue.name || !inputValue.age || !inputValue.gender || !inputValue.phoneNumber) {
            setError("All the field are mandatory.");
            return;
        } else if(inputValue.phoneNumber.length<10 || inputValue.phoneNumber.length>10){
            setError("Phone number must be of 10 degits")
            return;
        }
        else {
            setError('');
        }
        inputValue.seatNO = arr[x-1];
        setX((x)=>x+1);
        setPasData([...pasData, inputValue]);
        setInputValue(initialValues);
        initialValues.gender = "Male"
        if (x == arr.length) {
            setIsSubmit(false);
        }
    }

    const navigate = useNavigate();
    const submit = () => {
        navigate('/ConfirmSeat', { state: { ticketPrice: ticketPrice, noOfSeats: arr } });
        const data = JSON.parse(localStorage.getItem('passengerDetail')) || [];
        localStorage.setItem('passengerDetail', JSON.stringify([...data, pasData]));
    }

    return (
        <div className="userDetailPage">
            <div><UserInterface details={pasData} /></div>
            {
                (isSubmit) && <div>
                    <h1><u>Enter passengers detail</u></h1>
                    <br />
                    <div className="detailBox">
                        <h2><u>Enter {x} passenger detail</u></h2>
                        <div>
                            Name:
                            <input type="text" name="name" className="userInput" onChange={handleChange} value={inputValue.name} />
                            Age:
                            <input type="number" name="age" className="userInput" onChange={handleChange} value={inputValue.age} />
                            Gender:
                            <select onChange={handleChange} className="userInput" name="gender" value={inputValue.gender}>
                                <option>Male</option>
                                <option>female</option>
                                <option>other</option>
                            </select>
                            Phone number:
                            <input type="number" name="phoneNumber" className="userInput" onChange={handleChange} value={inputValue.phoneNumber} />
                        </div>
                        <p className="error">{error}</p>
                    </div>
                    <button onClick={add} className="add">add passenger</button>
                </div>
            }

            <div>
             {
                (!isSubmit) && <button onClick={submit} className="submit">Submit</button>
             }   
            </div>
        </div>
    )
}

export default UserDetail;
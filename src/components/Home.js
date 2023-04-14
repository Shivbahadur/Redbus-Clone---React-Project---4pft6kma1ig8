import React, { useState, useEffect } from "react";
import GetApiData from "./GetApiData";
import BottomImage from "./bottomImage";
import switchBtnIcon from "../components/resources/switchBtnIcon.png";
import busIcon from "../components/resources/busIcon.png"

const Home = () => {
    const [source, getSource] = useState('delhi');
    const [destination, getDestination] = useState('jaipur');
    const [date, getDate] = useState('');
    const [to, getTo] = useState('');
    const [from, getFrom] = useState('');
    const [data, setData] = useState([]);
    const [btnClicked,getBtnClicked]=useState(false);
    console.log(data);


    let getData = async () => {
        let response = await fetch(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${from}&destination=${to}`);
        setData(await response.json());
    }

    useEffect(() => {
        getData();
        console.log('useeffect running');
    },[from, to]);

    const getDetails = () => {
        getFrom(source);
        getTo(destination);
        getBtnClicked((btnClicked)=>true);
    }
    const swap=()=>{
        let temp=source;
        getSource(destination);
        getDestination(temp);
    }
    return (
        <div>
            <div className="homeContainer">
                <div>
                    <h1>FROM</h1> <br />
                    <input className="inputs" type='text' onChange={(e) => getSource(e.target.value)} value={source}/>
                </div>
                <button className="switchbtn" onClick={swap}><img height="50px" width="50px" src={switchBtnIcon}></img></button>
                <div>
                    <h1>TO</h1> <br />
                    <input className="inputs" type='text' onChange={(e) => getDestination(e.target.value)} value={destination} />
                </div>
                <div>
                    <h1>DATE</h1> <br />
                    <input className="inputs" type='date' onChange={(e) => getDate(e.target.value)} />
                </div>
                <button className="searchBtn" onClick={getDetails}>SEARCH BUSES</button>
            </div>
            <br/>
                <img className="busImgIcon" src={busIcon}/>
                
            {/* API- `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${from}&destination=${to}` */}
{/* Another API- 'https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses' */}
 {
    (btnClicked ? <GetApiData val={data}/> : <BottomImage/>)
 }
        
        
        </div>
    )
}

export default Home;
import React from 'react'
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import Home from './Home';
import '../styles/App.css';
import Register from './Register';
import Login from './Login';
import NotFound from './NotFound';
import BusSeats from './BusSeats';
import UserDetail from './UserDetail';
import ConfirmSeat from './ConfirmSeat';
const App = () => {


  return (
    <div id="main">
      
      <BrowserRouter>
      {/* <Link to='/Register' className='btn'>Register</Link>
      <Link to='/Login' className='btn'>Login</Link> */}
      
      <Routes>
        {/* <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/> */}
        <Route path='/BusSeats' element={<BusSeats/>}/>
        <Route path='/UserDetail' element={<UserDetail/>}/>
        <Route path='/ConfirmSeat' element={<ConfirmSeat/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/*' element={<NotFound/>}/>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}


export default App;

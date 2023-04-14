import React, { useEffect } from "react";
import { useState } from "react";

const Login = () => {

    const initialValues = { username: '', password: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [isLogin,setIsLogin]=useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues)
    }
    
    const LoginUser=()=>{
        const data= JSON.parse( localStorage.getItem('user'));
        console.log(data);
        for(let i=0;i<data.length;i++){
            if(data[i].username==formValues.username && data[i].password==formValues.password){
                console.log('login succesfully');
                setIsLogin(true);
            }
        }
    }
    useEffect(()=>{
        if(!isLogin){
            console.log('incorrect detail');
        }
    },[isLogin]);

    return (
        <div>
            <input type="text" data-testid='name' name="username" value={formValues.username} onChange={handleChange} />
            <input type="password" data-testid='password' name="password" value={formValues.password} onChange={handleChange} />
            <button onClick={LoginUser}>Login</button>
        </div>
    )
}

export default Login;



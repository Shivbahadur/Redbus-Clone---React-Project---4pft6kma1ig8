import React from "react";
import { useState } from "react";

const Register = () => {

    const initialValues = { username: '', password: '' };
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues)
    }
    
    const RegisterUser=()=>{
        const data= JSON.parse( localStorage.getItem('user')) || [];
        localStorage.setItem('user',JSON.stringify([...data,formValues]));
        console.log('user registered');
    }

    return (
        <div>
            <input type="text" data-testid='name' name="username" value={formValues.username} onChange={handleChange} />
            <input type="password" data-testid='password' name="password" value={formValues.password} onChange={handleChange} />
            <button onClick={RegisterUser}>Register</button>
        </div>
    )
}

export default Register;
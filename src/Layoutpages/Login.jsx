import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {

  const [inputs, setinputs] = useState({
    email: "",
    pass: "",
  });

  const changehandle = (e) => {
    const { name, value } = e.target;
    setinputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const loginhandle = (e) => {
    e.preventDefault();
    const userlogged = JSON.parse(localStorage.getItem("user"));
    console.log(userlogged);  

    if (userlogged && inputs.email === userlogged.email && inputs.pass === userlogged.pass) {
      alert("Login successful");
      navigate('/Home');
    } else if (!userlogged) {
      alert("No user data found in localStorage");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <form>
        <h1>Login Form</h1>
        <div>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            sx={{ margin: '10px' }}
            value={inputs.email}
            onChange={changehandle}
          />
        </div>
        <div>
          <TextField
            name="pass"
            label="Password"
            type="password"  
            variant="outlined"
            sx={{ margin: '10px' }}
            value={inputs.pass}
            onChange={changehandle}
          />
        </div>
        <div>
          <Button variant="contained" onClick={loginhandle}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;

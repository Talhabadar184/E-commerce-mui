import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Signup() {
  const [inputs, setinputs] = useState({
    name: "",
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
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      navigate('/Home'); 
    }
  }, []);

  const submission = (e) => {
    console.log(inputs);
    localStorage.setItem("user", JSON.stringify(inputs));
    navigate('/Login');
  };

  return (
    <div className="container">
      <form>
        <h1>Signup Form</h1>
        <div>
          <TextField
            name="name"
            label="Username"
            variant="outlined"
            sx={{ margin: '10px' }}
            value={inputs.name}
            onChange={changehandle}
          />
        </div>
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
          <Button variant="contained" onClick={submission}>
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

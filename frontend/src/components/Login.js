import { useState } from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const Login = (props) => {


  const [hide, sethide] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(null);
  const [hideandshow, setHideandshow] = useState(false);


  const onChangeUsername = (event) => {
    setName(event.target.value);
    
  };
  
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    localStorage.setItem('Email', email);

  };

  const resetInputs = () => {
    setName("");
    setEmail("");
    setDate(null);
  };


  const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    
    const newUser = {
      name: name,
      email: email,
      date: Date.now(),
    };

    axios
      .post("http://localhost:8080/user/login", newUser)
      .then((response) => {
        alert("Congrats now click on users ");

        setHideandshow(true)

      });

    resetInputs();
  };



  return (
    <Grid container align={"center"} spacing={2} >
      <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChangeUsername}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Login
        </Button>
       <div>

       
        {hideandshow && 
        <div>
         

          <form action="../../home1" method="post"
            className="form">
            <button type="submit">USERS</button>
          </form>
        </div>}
      </div>
    </Grid>
       
       
    </Grid >
  );
};

export default Login
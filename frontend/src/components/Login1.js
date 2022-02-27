import { useState } from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const Login1 = (props) => {


  const [hide, sethide] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(null);
  const [hideandshow, setHideandshow] = useState(false);


  const onChangeUsername = (event) => {
    setName(event.target.value);
    localStorage.setItem('Name', name);
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
    localStorage.setItem('VName', name);
    localStorage.setItem('VEmail', email);
    const newUser = {
      name: name,
      email: email,
      date: Date.now(),
    };

    axios
      .post("http://localhost:8080/vendor/login", newUser)
      .then((response) => {
        alert("Congrats now click on vendors ");
        localStorage.setItem('VName', name);
        localStorage.setItem('VEmail', email);
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
         

          <form action="../../frtobe1" method="post"
            className="form">
            <button type="submit">VENDORS</button>
          </form>
        </div>}
      </div>
    </Grid>
       
       
    </Grid >
  );
};

export default Login1
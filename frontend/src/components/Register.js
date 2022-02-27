import { useState } from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Login from './Login';

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [Batch, setBatch] = useState("");
  const [date, setDate] = useState(null);

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeBatch = (event) => {
    setBatch(event.target.value);
  };

  const onChangeage = (event) => {
    setAge(event.target.value);
  };

  const resetInputs = () => {
    setName("");
    setEmail("");
    setAge("");
    setBatch("");
    setDate(null);
  };

  
  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      email: email,
      date: Date.now(),
      age: age,
      Batch:Batch,
    };

    axios
      .post("http://localhost:8080/user/register", newUser)
      .then((response) => {
        alert("Created\t" + response.data.name);
        console.log(response.data);
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
        <TextField
          label="Age"
          variant="outlined"
          value={age}
          onChange={onChangeage}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Batch"
          variant="outlined"
          value={Batch}
          onChange={onChangeBatch}
        />
      </Grid>
      
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Register
        </Button>
      </Grid>
      <Login></Login>
      
    </Grid>
    
  );
};

export default Register
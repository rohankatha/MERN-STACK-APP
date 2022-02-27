import { useState } from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Register1 = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Vendorname, setVendorname] = useState("");
  const [Contact, setContact] = useState("");
  const [Openingtime, setOpeningtime] = useState("");
  const [Closingtime, setClosingtime] = useState("");
 
  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeVend = (event) => {
    setVendorname(event.target.value);
  };

  const onChangeCont = (event) => {
    setContact(event.target.value);
  };
  const onChangeOt = (event) => {
    setOpeningtime(event.target.value);
  };

  const onChangeCt = (event) => {
    setClosingtime(event.target.value);
  };

  const resetInputs = () => {
    setName("");
    setEmail("");
    setVendorname("");
    setContact("");
    setOpeningtime("");
    setClosingtime("");

    
  };

  
  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      email: email,
      Vendorname:Vendorname,
      Contact: Contact,
      Openingtime:Openingtime,
      Closingtime:Closingtime,

      
    };

    axios
      .post("http://localhost:8080/vendor/register", newUser)
      .then((response) => {
        alert("Created\t" + response.data.name);
        console.log(response.data);
      });

    resetInputs();
  };
  


  return (
    <Grid container align={"center"} spacing={2}>
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
          label="Openingtime"
          variant="outlined"
          value={Openingtime}
          onChange={onChangeOt}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Closingtime"
          variant="outlined"
          value={Closingtime}
          onChange={onChangeCt}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Vendorname"
          variant="outlined"
          value={Vendorname}
          onChange={onChangeVend}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Contact"
          variant="outlined"
          value={Contact}
          onChange={onChangeCont}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Register
        </Button>
      </Grid>
      
     
    </Grid>
    
  );
};

export default Register1
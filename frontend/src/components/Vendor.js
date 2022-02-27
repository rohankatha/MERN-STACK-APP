import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Foodadd from './foodadd';
import Myorders from './Myorders';
import Register1 from './Register1';
import SearchAppBar from './Vendortable';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles({
  root: {
    "& .styledrows": {
      backgroundColor: "white"
    },
    backgroundColor: "white"
  }
});

export default function Vendor() {

  const classes = useStyles();
  const [udata, setUdata] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(null);
  const fetchUData = () => {
    fetch("http://localhost:8080/vendor/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUdata(data)
  
        
      })
  }
  const onChangeUsername = (event) => {
    setName(event.target.value);

  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const resetInputs = () => {
    setName("");
    setEmail("");
    setDate(null);
  };
  function funcappend(){
    const newUser = {
      name: name,
      status: email,
     
    };
    console.log("lofer1");
    axios
      .post("http://localhost:8080/order/update1", newUser)
      .then((response) => {
        alert("updated\t" + response.data.name);

      });
    console.log("lofer2");

    resetInputs();
  }
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("lofer");
    const newUser = {
      name: name,
      price: email,
     
    };
    console.log("lofer1");
    axios
      .post("http://localhost:8080/food/update", newUser)
      .then((response) => {
        alert("updated\t" + response.data.name);

      });
    console.log("lofer2");

    resetInputs();
  }
  const onSubmit1 = (event) => {
    event.preventDefault();
    console.log("lofer");
    const newUser = {
      name: name,
      price: email,
      
      
    };
    console.log("lofer1");
    axios
      .post("http://localhost:8080/food/delete", newUser)
      .then((response) => {
        alert("deleted\t" + response.data.name);

      });
    console.log("lofer2");

    resetInputs();
  }
  const fetchData = () => {
    fetch("http://localhost:8080/vendors/")
      .then(response => {
        return response.json()
      })
      .then(data => {

        console.log(data)
      })
  }
  return (
    <div>
      
      Welcome to Vendor 
      <ul>
          {udata.filter(item => (item.name == localStorage.getItem('VName') )).map(user1 => (
            <li >

              {user1.name} {user1.email} {user1.Vendorname} {user1.Contact} {user1.Openingtime} {user1.Closingtime}

            </li>
          ))}

        </ul>
        <Button onClick={fetchUData}>PROFILE</Button>
        <Button onClick={fetchData}>UPDATEDELBOX</Button>
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
            label="Price"
            variant="outlined"
            value={email}
            onChange={onChangeEmail}
          />
        </Grid>
        <Button variant="contained" color="primary" onClick={funcappend} >
          MOVE TO NEXT STAGE
        </Button>
        <Button variant="contained" color="primary" onClick={onSubmit1} >
          DELETE AN FOOD ITEM
        </Button>
        <Button variant="contained" color="primary" onClick={onSubmit} >
          UPDATE AN FOOD ITEM
        </Button>
        

      </Grid>

      <SearchAppBar></SearchAppBar>
      
      <Foodadd></Foodadd>
    </div>
  );
}
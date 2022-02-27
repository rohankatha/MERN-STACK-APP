import { Button } from '@material-ui/core';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
export default function Myorders() {
  const [users, setUsers] = useState([]);
  const [users1, setUsers1
  ] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:8080/food/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)

        console.log(users)
      })
  }
  const fetchData1 = () => {
    fetch("http://localhost:8080/order/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers1(data)

        console.log(users)
      })
  }

  const [name1, setName] = useState("");
  const [vendor1, setVendor] = useState("");
  const [status1, setStatus] = useState("");
  const [time1, settime] = useState("");
  const [cost1, setCost] = useState(0);
  const [quant, setQuant] = useState(0);



  const resetInputs = () => {
    setName("");
    setVendor("");
    setStatus("");
    settime("");
    setCost(0);
    setQuant(0);

  };


  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name1,
      status: status1,
      cost: cost1,
      time: time1,
      vendor: vendor1,
      quantity: localStorage.getItem('quantity')

    };

    axios
      .post("http://localhost:8080/order/register", newUser)
      .then((response) => {
        alert("Created\t" + response.data.name);
        console.log(response.data);
      });

    resetInputs();
    legend();
  };

  var today = new Date();
  let location = useLocation();
  console.log(location.state)
  //const { state } = this.props.location
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  function legend() {
    users.filter(item => location.state.includes(item._id)).map(user1 => (

      setName(user1.name), setVendor(user1.vendor), setCost(user1.price), settime("1200AM"), setStatus("PLACED")


    ));
  }




  return (
    <div>
      {time}
      <br>
      </br>

      <p>
        Status of order is
      </p>


      <Button onClick={fetchData}>
        Get problems
      </Button>
      <Button onClick={fetchData1}>
        View Orders
      </Button>
      <br>
      </br>
      <Button onClick={onSubmit}>
        SUBMIT TO DB
      </Button>

      <div>
        ORDERS LIST
        <ul>
          {users1.map(user1 => (
            <li >

              {user1.name}      {user1.cost}      {user1.status}      {user1.quantity}

            </li>
          ))}

        </ul>
      </div>






    </div>

  )
}

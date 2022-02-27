import React from 'react'
import { useState } from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios';
export default function Wallet() {
    let test = 0;
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);



    const resetInputs = () => {
        setCount(0);

    };
    function funcappend() {
        const newUser = {
            email: localStorage.getItem('Email'),
            Wallet: count,

        };
        console.log("lofer1");
        axios
            .post("http://localhost:8080/user/wallet", newUser)
            .then((response) => {
                alert("updated\t" + response.data.name);

            });
        console.log("lofer2");

        //resetInputs();
    }
    function handlefunc() {
        var input1 = parseInt(document.getElementById('wallet').value);
        input1 = input1 + 30;
        setCount(input1)
       
       
    }
    function Handlewalletdec() {
        var input1 = parseInt(document.getElementById('wallet1').value);

        setCount(count - input1)
        funcappend();
        
    }
    function Handlewalletdec1() {
        fetch("http://localhost:8080/user/")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)

                console.log(users)
            })
    }

    return (
        <div>

            <div>
                <p align="right">Wallet {count}

                  
                </p>

                <form>
                    <label>Money
                        <input
                            id="wallet"
                            type="number"

                            onChange={handlefunc}
                        />
                        <br>
                        </br>
                        dedutions
                        <input
                            id="wallet1"
                            type="number"


                        />
                    </label>

                </form>
                <br>
                </br>
                <Button variant="contained" color="primary" onClick={Handlewalletdec} >
                    PAY OPTIONS
                </Button>
            </div>
        </div>
    )
}

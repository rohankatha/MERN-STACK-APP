
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Users from "./components/Users";
import Home from "./components/Home";
import Vendor from './components/Vendor';

import React, { Component } from "react";
import Myorders from './components/Myorders';
import Register from './components/Register';
function App() {

 

  return (
    <div >



      <div className="App"  >
        <header className="App-header">
          <div style={{color: "yellow"}}>
            
             HELLO WELCOME TO KRRS BBC APP
          </div>
          <Router>

            <div >


              <Routes>

                
                <Route exact path="/users" element={<Users />}></Route>
                <Route exact path="/home" element={<Home />}></Route>
                <Route exact path="/vendors" element={<Vendor />}></Route>
                <Route exact path="/myorders" element={<Myorders />}></Route>
                <Route exact path="/register" element={<Register />} ></Route>
                




              </Routes>



             
            </div>
          </Router>
          <form action="../../home" method="post"
            className="form">
            <button type="submit">USERSCOMEHERE</button>
          </form>
         
          <form action="../../frtobe" method="post"
            className="form">
            <button type="submit">VENDORSCOMEHERE</button>
          </form>
         
        
        </header>
         
      </div>
    </div>
  );
}

export default App;

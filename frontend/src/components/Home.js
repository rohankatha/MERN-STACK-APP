import { useState } from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Login1 from './/Login1';
import Register1 from "./Register1";
import React from 'react';

export default function Home() {
  return <div>
     <Register1></Register1>
     <Login1></Login1>
  </div>;
}

      
   
    

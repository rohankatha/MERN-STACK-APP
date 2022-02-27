import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { useState, useRef } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import { Link, useNavigate } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 30 },
  {
    field: 'name',
    headerName: 'name',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'price',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'rating',
    headerName: 'rating',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'VegorNonveg',
    type: ' boolean',

  },
  {
    field: 'vendor',
    type: 'string',
    headerName: 'vendor',
    width: 110,
    editable: true,
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(7),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'primary',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  root: {
    "& .styledrows": {
      backgroundColor: "yellow"
    },
    backgroundColor: "green"
  }
}));



export default function SearchAppBar(props) {
  const navigate = useNavigate();


  const classes = useStyles();

  const [users, setUsers] = useState([])
  const [users1, setUsers1] = useState([])
  const [selectedRows, setSelection] = useState([]);

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


  return (

    <div className={classes.root}>

      <AppBar position="static" alignContent="flex-end">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.search} justifycontent="flex-end">
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>


      <Button variant="contained" color="primary" onClick={fetchData}>
        SEE FOOD ITEMS
      </Button>
      <Button variant="contained" color="primary" onClick={fetchData1}>
        SEE ORDERED  ITEMS
      </Button>


      <div style={{ height: 400, width: '100%', color: 'primary' }} className={classes.root}>

        <DataGrid
          rows={users}
          columns={columns}

          filterModel={{
            items: [
              {
                columnField: 'vendor',
                operatorValue: 'contains',
                value: localStorage.getItem('VName')
              },
            ],
          }}

          checkboxSelection
          //disableSelectionOnClick
          onSelectionModelChange={(selections) => {
            setSelection(selections);
            console.log(selectedRows);
          }}




        />



      </div>

      
      <div>
       ORDERS LIST
      <ul>
          { users1.filter(item => item.vendor == localStorage.getItem('VName')).map(user1 => (
           <li >

              {user1.name}      {user1.cost}      {user1.status}      {user1.quantity}
            
          </li>
          ))}
          
      </ul>


      </div>

      
    </div>
  );


}






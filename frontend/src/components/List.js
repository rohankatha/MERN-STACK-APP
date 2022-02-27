import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { lightBlue, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    color : red,
    backgroundColor: theme.palette.background.color,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      
    
    <List
      let text="hello"
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
         Food list items
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemText primary="Samsosa" />
      </ListItem>
      <ListItem button>
        
        <ListItemText primary="Burger" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        
        <ListItemText primary="Cake" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            
            <ListItemText primary="Name :  Cake" text/>
            

          </ListItem>
          <ListItem button className={classes.nested}>
            
            <ListItemText primary="Price : 40 rs" text/>
        
          </ListItem>

        </List>
      </Collapse>
    </List>
  );
}
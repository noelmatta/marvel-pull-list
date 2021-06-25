import { AppBar, Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" >
          Marvel Pull List
        </Typography>
        <Button color="inherit">Login</Button>            
            {/* <NavLink to="/AddJob">Add New Job</NavLink>
            <NavLink to="/OpenApplications">Open Applications</NavLink>
            <NavLink to="/Info">Info</NavLink> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
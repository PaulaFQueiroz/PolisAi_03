import React from 'react';
import { Link } from 'react-router-dom';

// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

function Navbar() {
  return (
    <AppBar>
      <Toolbar className= "nav-container">
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/signup">Signup</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;



/*import React from 'react';

//MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';



function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <Button color="inherit" component ="/login">Login</Button>
        <Button color="inherit"component ="/">Home</Button>
        <Button color="inherit"component ="/signup">Signup</Button>
      </Toolbar>

    </AppBar>
  );
}

export default Navbar;

*/
/*
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">test</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    */
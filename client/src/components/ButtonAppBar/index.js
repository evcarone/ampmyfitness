import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer'
import IconButton from '@material-ui/core/IconButton';


import Workouts from "../../pages/Workouts";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <TemporaryDrawer/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Amp My Workout!
          </Typography>
              <Button><Link style={{color: "white", }} to={"/workouts"}>Workouts</Link></Button>
              <Button><Link style={{color: "white", }} to={"/"} color="inherit">Home</Link></Button>
              <Button><Link style={{color: "white", }} to="/dashboard">Dashboard</Link></Button>
              <Button><Link style={{color: "white", }} to="/logout">Log out</Link></Button>
              <Button><Link style={{color: "white", }} exact to="/login">Log in</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


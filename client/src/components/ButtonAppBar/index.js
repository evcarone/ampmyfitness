import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

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
      <AppBar position="static" style={{ background: "#2b4e7e"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Amp My Workout&nbsp;&nbsp;<FitnessCenterIcon />
          </Typography>
              <Button><Link style={{color: "white", }} to={"/workouts"}>Workouts</Link></Button>
              <Button><Link style={{color: "white", }} to={"/videos"} color="inherit">Videos</Link></Button>
              <Button><Link style={{color: "white", }} to={"/"} color="inherit">Home</Link></Button>
              <Button><Link style={{color: "white", }} to="/dashboard">Dashboard</Link></Button>
              <Button><Link style={{color: "white", }} to="/logout">Log out</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


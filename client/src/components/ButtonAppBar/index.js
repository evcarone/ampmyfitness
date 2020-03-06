import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
          <Typography variant="h6" className={classes.title}>
            Amp My Workout!
          </Typography>
          


             
              <Link to={"/workouts"} color="inherit">Workouts</Link>
              

             
              <Link to={"/"} color="inherit">Home</Link>
              

          

        </Toolbar>
      </AppBar>
    </div>
  );
}


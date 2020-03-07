import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';



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

export default function LoggedInButtonAppBar() {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Amp My Workout!
          </Typography>
              <Button><Link style={{color: "white", }} to={"/workouts"}>Workouts</Link></Button>
              <Button><Link style={{color: "white", }} to={"/videos"} color="inherit">Videos</Link></Button>
              <Button><Link style={{color: "white", }} to="/logout">Log out</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


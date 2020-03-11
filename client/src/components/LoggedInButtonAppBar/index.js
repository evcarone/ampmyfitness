import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import API from '../../utils/API';
import Auth from '../../utils/Auth';

class LoggedInButtonAppBar extends React.Component {
  state = {
    secretData: '',
    user: {}
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    API.dashboard(Auth.getToken())
      .then(res => {
        this.setState({
          secretData: res.data.message,
          user: res.data.user
        });
      })
  }


  render() {
    return (
      <div style={{flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#2b4e7e" }}>
          <Toolbar>
            <Button style={{ color: "white" }}><AccountCircleIcon fontSize="large" />&nbsp;&nbsp;{this.state.user.name}</Button>
            <Typography variant="h6" style={{ textAlign: 'center', flexGrow: 1 }}>
              Amp My Workout&nbsp;&nbsp;<FitnessCenterIcon />
            </Typography>
            <Button><Link style={{color: "white", }} to={"/home"}>Home</Link></Button>
            <Button><Link style={{ color: "white", }} to={"/workouts"}>Workouts</Link></Button>
            <Button><Link style={{ color: "white", }} to={"/videos"} color="inherit">Videos</Link></Button>
            <Button><Link style={{ color: "white", }} to="/logout">Log out</Link></Button>
          </Toolbar>
        </AppBar>
      </div>)
  }
}

export default LoggedInButtonAppBar;


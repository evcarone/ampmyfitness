import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import API from '../../utils/API';
import Auth from '../../utils/Auth';
import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer';
import IconButton from '@material-ui/core/IconButton'

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
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary" style={{ backgroundColor: "#c51f30" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <TemporaryDrawer />
            </IconButton>
            <Typography variant="h5" align="center" style={{ flexGrow: 1, marginLeft: "25px" }}>
              AMP MY FITNESS
            </Typography>
            <Button style={{ color: "white" }}><AccountCircleIcon fontSize="large" />&nbsp;&nbsp;{this.state.user.name}</Button>
          </Toolbar>
        </AppBar>
      </div>)
  }
}

export default LoggedInButtonAppBar;



import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
        <AppBar position="static" color="secondary" style={{ backgroundColor: "#a52828", height: "90px" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <TemporaryDrawer />
            </IconButton>
            <Typography variant="h5" align="center" style={{ flexGrow: 1, marginLeft: "25px" }}>
            <img src="images/logo.png" style={{ width: "80px", height: "auto", margin: "0", position: "absolute", top: "53%", left: "50%", transform: "translate(-50%, -50%)" }}/>
            <div style={{ margin: "0", position: "absolute", top: "65%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#202527", fontSize: "16px", padding: "3px", paddingTop: "5px", paddingLeft: "15px", paddingRight: "15px", opacity: ".9", borderRadius: "10px", fontWeight: "lighter" }} >AMP MY FITNESS
            </div>
            </Typography>
            <Button style={{ color: "white" }}><AccountCircleIcon fontSize="large" />&nbsp;&nbsp;{this.state.user.name}</Button>
          </Toolbar>
        </AppBar>
      </div>)
  }
}

export default LoggedInButtonAppBar;



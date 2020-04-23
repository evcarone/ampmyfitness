import React, { Component } from "react";
// import injectTapEventPlugin from 'react-tap-event-plugin';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute, PropsRoute, LoggedOutRoute } from './components/Routes';

import LoginPage from './pages/LoginPage.jsx';
import LogoutFunction from './pages/LogoutFunction.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import AuthVideos from './pages/AuthVideos';
import AuthWorkouts from './pages/AuthWorkouts';
import Auth from './utils/Auth';
import AuthHome from "./pages/AuthHome";
import Landing from "./pages/LandingPage.jsx";
// remove tap delay, essential for MaterialUI to work properly
// injectTapEventPlugin();


class App extends Component {

  state = {
    authenticated: false
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }



  render() {
    return (

      <Router>

        <div>

          <Route exact path="/" component={Landing} />
          <PropsRoute path="/login" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
          <PrivateRoute path="/home" component={AuthHome} />
          <PrivateRoute path="/videos" component={AuthVideos} />
          <PrivateRoute path="/workouts" component={AuthWorkouts} />
          <PropsRoute path="/signup" component={SignUpPage} />
          <Route path="/logout" component={LogoutFunction} />

        </div>



      </Router>

    )
  }

}

export default App;
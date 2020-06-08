import React, { Component } from "react";
// import injectTapEventPlugin from 'react-tap-event-plugin';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute, PropsRoute, LoggedOutRoute } from './components/Routes';
import LoginPage from './pages/LoginPage.jsx';
import LogoutFunction from './pages/LogoutFunction.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import AuthVideos from './pages/AuthVideos';
import AuthExercises from './pages/AuthExercises';
import Auth from './utils/Auth';
import AuthHome from "./pages/AuthHome";
import Landing from "./pages/LandingPage.jsx";
import AuthWorkoutVideos from "./pages/AuthWorkoutVideos.jsx";
import AuthBackWorkout from './pages/exerciseGroups/backExercises';
import AuthAbWorkout from './pages/exerciseGroups/abExercises';
import AuthArmWorkout from './pages/exerciseGroups/armExercises';
import AuthLegWorkout from './pages/exerciseGroups/legExercises';
import AuthChestWorkout from './pages/exerciseGroups/chestExercises';
import AuthShoulderWorkout from './pages/exerciseGroups/shoulderExercises';
import AuthCyclingVids from './pages/videoGroups/cyclingVideos';
import AuthHiitVids from './pages/videoGroups/hiitVideos';
import AuthYogaVids from './pages/videoGroups/yogaVideos';
import AuthPilatesVids from './pages/videoGroups/pilatesVideos';
import AuthCrossfitVids from './pages/videoGroups/crossfitVideos';
import AuthRunningVids from './pages/videoGroups/runningVideos';
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
          <PrivateRoute path="/videos" component={AuthWorkoutVideos} />
          <PrivateRoute path="/exercises" component={AuthExercises} />
          <PrivateRoute path="/vids" component={AuthVideos} />
          {/* Body Part Exercise Pages */}
          <PrivateRoute path="/backExercises" component={AuthBackWorkout} />
          <PrivateRoute path="/abExercises" component={AuthAbWorkout} />
          <PrivateRoute path="/armExercises" component={AuthArmWorkout} />
          <PrivateRoute path="/shoulderExercises" component={AuthShoulderWorkout} />
          <PrivateRoute path="/chestExercises" component={AuthChestWorkout} />
          <PrivateRoute path="/legExercises" component={AuthLegWorkout} />
          {/* Workout Video Pages */}
          <PrivateRoute path="/cyclingVids" component={AuthCyclingVids} />
          <PrivateRoute path="/hiitVids" component={AuthHiitVids} />
          <PrivateRoute path="/yogaVids" component={AuthYogaVids} />
          <PrivateRoute path="/pilatesVids" component={AuthPilatesVids} />
          <PrivateRoute path="/crossfitVids" component={AuthCrossfitVids} />
          <PrivateRoute path="/runningVids" component={AuthRunningVids} />
          <PropsRoute path="/signup" component={SignUpPage} />
          <Route path="/logout" component={LogoutFunction} />

        </div>



      </Router>

    )
  }

}

export default App;
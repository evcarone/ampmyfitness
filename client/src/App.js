import React, { Component } from "react";
// import injectTapEventPlugin from 'react-tap-event-plugin';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './components/HomePage.jsx';
import { PrivateRoute, PropsRoute, LoggedOutRoute } from './components/Routes';

import LoginPage from './pages/LoginPage.jsx';
import LogoutFunction from './pages/LogoutFunction.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import AuthVideos from './pages/AuthVideos';
import AuthWorkouts from './pages/AuthWorkouts';
import Auth from './utils/Auth';
import LoggedInButtonAppBar from "./components/LoggedInButtonAppBar/index";
import ButtonAppBar from "./components/ButtonBar/";
import Workouts from "./pages/Workouts";

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

          <PropsRoute exact path="/" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
          <PrivateRoute path="/videos" component={AuthVideos} />
          <PrivateRoute path="/workouts" component={AuthWorkouts} />
          <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
          <LoggedOutRoute path="/signup" component={SignUpPage} />
          <Route path="/logout" component={LogoutFunction} />

        </div>



      </Router>

    )
  }

}

{/* <Router>
        
<div>
<ButtonAppBar></ButtonAppBar>
<div style={{ height: 'calc(100vh - 64px)', backgroundImage: `url(/images/Background_Image.jpg)`, backgroundSize: 'cover', }}>
<br></br>

  <Switch>
    <Route exact path="/videos" component={MaterialVideo} />
    <Route path="/workouts" component={Workouts} />
    </Switch>




<PropsRoute exact path="/" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
<PrivateRoute path="/videos" component={AuthVideos}/>
<PrivateRoute path="/workouts" component={AuthWorkouts}/>
<LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
<LoggedOutRoute path="/signup" component={SignUpPage}/>
<Route path="/logout" component={LogoutFunction}/>



</div>
</div>

</Router> */}


// function App() {



//   return (
//     <Router>
//       <div>
//         <ButtonAppBar />
//         <br></br>
//         <div style={{ height: 'calc(100vh - 64px)', backgroundImage: `url(/images/Background_Image.jpg)`, backgroundSize: 'cover', }}>
//           <Switch>
//             <Route exact path="/" component={MaterialVideo} />
//             <Route path="/Workouts" component={Workouts} />
//           </Switch>
//         </div>
//       </div>

//     </Router>

//   );
// }

export default App;
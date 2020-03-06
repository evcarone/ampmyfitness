import React, { Component } from "react";
// import injectTapEventPlugin from 'react-tap-event-plugin';

import { BrowserRouter as Router,
Switch,
Route,
Link} from "react-router-dom";

import HomePage from './components/HomePage.jsx';
import { 
  PrivateRoute, 
  PropsRoute, 
  LoggedOutRoute 
} from './components/Routes';

import LoginPage from './pages/LoginPage.jsx';
import LogoutFunction from './pages/LogoutFunction.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

import Auth from './utils/Auth';


import ButtonAppBar from "./components/ButtonAppBar";
import MaterialVideo from "./pages/MaterialVideos";
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
        <ButtonAppBar />
        
        <br></br>
        <div style={{ height: 'calc(100vh - 64px)', backgroundImage: `url(/images/Background_Image.jpg)`, backgroundSize: 'cover', }}>
          <Switch>
            <Route exact path="/materialvideo" component={MaterialVideo} />
            <Route path="/workouts" component={Workouts} />
          </Switch>
        
      
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <Link to="/">React App</Link>
          </div>
          {this.state.authenticated ? (
            <div className="top-bar-right">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/logout">Log out</Link>
            </div>
          ) : (
            <div className="top-bar-right">
              <Link exact to="/login">Log in</Link>
              <br></br>
              <Link to="/signup">Sign up</Link>
            </div>
          )}

        </div>

        <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
        <PrivateRoute path="/dashboard" component={DashboardPage}/>
        <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
        <LoggedOutRoute path="/signup" component={SignUpPage}/>
        <Route path="/logout" component={LogoutFunction}/>
      </div>
      
      
      </div>
      </div>
      
    </Router>
      
    )
  }

}




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
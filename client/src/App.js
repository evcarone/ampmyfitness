import React from 'react';
import ButtonAppBar from "./components/ButtonAppBar";
import MaterialVideo from "./pages/MaterialVideos";
import Workouts from "./pages/Workouts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {



  return (
    <Router>
      <div>
        <ButtonAppBar />
        <br></br>
        <div style={{ height: 'calc(100vh - 64px)', backgroundImage: `url(/images/Background_Image.jpg)`, backgroundSize: 'cover', }}>
          <Switch>
            <Route exact path="/" component={MaterialVideo} />
            <Route path="/Workouts" component={Workouts} />
          </Switch>
        </div>
      </div>

    </Router>

  );
}

export default App;

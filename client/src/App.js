import React, { Fragment } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Videos from "./pages/Videos";
import ButtonAppBar from "./components/ButtonAppBar";
import MaterialVideo from "./pages/MaterialVideos";

function App() {
  return (
    <Fragment>
    <ButtonAppBar />
    <Container fixed>
    <Router>
      <div>
        <br></br>
       <MaterialVideo></MaterialVideo>
      </div>
    </Router>
    </Container>
    </Fragment>
  );
}

export default App;

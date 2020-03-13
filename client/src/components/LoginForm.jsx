import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import ButtonAppBar from "../components/ButtonBar/index"

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  successMessage,
  toggleAuthenticateStatus
}) => (
  <Fragment>

    <ButtonAppBar></ButtonAppBar>
    
  <div style={{ height: 'calc(100vh - 60px)', backgroundImage: `url(/images/dU7Lxw.jpg)`, backgroundSize: 'cover', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
    
  <Container>
    
    <div style={{ backgroundColor: "#fafafa", width: "400px", margin: "auto",  borderRadius: "25px", position: "relative" }}>

  
  <form action="/" onSubmit={onSubmit} >
  <div className="jumbotron" >
        <h2 class="display-4" style={{fontSize: "300%"}}>Log Into Your Account!</h2>

        {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}
          
            <TextField style={{width: "100%"}} label="Email"
          name="email"
          error={errors.email}
          helperText={ errors.email || null }
          onChange={onChange}
          value={user.email}> </TextField>
          
<br></br>
<br></br>
          
            <TextField style={{width: "100%"}} label="Password"
          type="password"
          name="password"
          onChange={onChange}
          error={errors.password}
          value={user.password}> </TextField>
          

        <hr class="my-4"></hr>
        <div className="button-line">
        <Button style={{ background: "#003C57", color: "white" }} type="submit" variant="contained" children="Log in" primary/>
      </div>
<br></br>
<br></br>
      <Typography >Don't have an account? <Link to={'/signup'}>Create one</Link>.</Typography>
      </div>
      </form>

      </div>
      </Container>
      
      </div>

      </Fragment>
      
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;


import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardText from '@material-ui/core/Card';
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
    
  <div style={{ height: 'calc(100vh - 60px)', backgroundImage: `url(/images/Background_Image.jpg)`, backgroundSize: 'cover', marginBottom: "0"}}>
    
  <Container>
    
    <div style={{ backgroundColor: "#fafafa", width: "40%", height: "40vh", margin: "auto",  borderRadius: "15", marginBottom: "15%"}}>

  
  <form action="/videos" onSubmit={onSubmit} >
  <div class="jumbotron" >
        <h1 class="display-4">Log Into Your Account!</h1>

        {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}
          
            <TextField label="Email"
          name="email"
          error={errors.email}
          helperText={ errors.email || null }
          onChange={onChange}
          value={user.email}> </TextField>
          
<br></br>
          
            <TextField label="Password"
          type="password"
          name="password"
          onChange={onChange}
          error={errors.password}
          value={user.password}> </TextField>
          

        <hr class="my-4"></hr>
        <div className="button-line">
        <Button type="submit" variant="contained" color="primary" children="Log in" primary />
      </div>
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

{/* <Container>
    <div style={{ backgroundColor: "#fafafa", width: "40%", height: "40vh", margin: "auto", marginTop: "25%", borderRadius: "15"}}>
    <form action="/" onSubmit={onSubmit}>

      <h2 className="card-heading">Log into your account</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}


      <div className="field-line">
        <TextField
          label="Email"
          name="email"
          error={errors.email}
          helperText={ errors.email || null }
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          label="Password"
          type="password"
          name="password"
          onChange={onChange}
          error={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <Button type="submit" children="Log in" primary />
      </div>

      {/* <CardText style={{ backgroundColor: "#fafafa"}}>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText> */}
      
  //   </form>
  // </div>
  // </Container> */}
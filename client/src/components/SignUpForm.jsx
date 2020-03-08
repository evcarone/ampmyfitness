import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import ButtonAppBar from "../components/ButtonBar/index"


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <Fragment>

<ButtonAppBar></ButtonAppBar>

  <div style={{ height: 'calc(100vh - 60px)', backgroundImage: `url(/images/Background_Image.jpg)`, backgroundSize: 'cover', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
    
  <Container>
  
    <div style={{ backgroundColor: "#fafafa", width: "40%",  margin: "auto", borderRadius: "15", postion: "relative",}}>
  <form action="/" onSubmit={onSubmit} >
  <div className="jumbotron">
        <h2 class="display-4">Sign Up!</h2>

        <br></br>

        {errors.summary && <p className="error-message">{errors.summary}</p>}
          
        <TextField style={{width: "100%"}} placeholder="Name"
          floatinglabeltext="Email"
          name="name"
          errortext={errors.name}
          onChange={onChange}
          value={user.name}> </TextField>


<br></br>
<br></br>
          
          <TextField style={{width: "100%"}} placeholder="Email"
          floatinglabeltext="Email"
          name="email"
          errortext={errors.email}
          onChange={onChange}
          value={user.email}> </TextField>
          
<br></br>
<br></br>
          
            <TextField style={{width: "100%"}} placeholder="Password"
          floatinglabeltext="Password"
          type="password"
          name="password"
          onChange={onChange}
          errortext={errors.password}
          value={user.password}> </TextField>
          

        <hr class="my-4"></hr>
        <div className="button-line">
        <Button type="submit" variant="contained" color="primary" children="Log in" primary> Create Account</Button>
      </div>
<br></br>
<br></br>
      <Typography >Already Have an Account? <Link to={'/login'}>Sign In</Link>.</Typography>
      </div>
      </form>
      </div>
      </Container>
      </div>

      </Fragment>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;

{/* <Container>
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        Name: <TextField
        placeholder="Name"
          floatinglabeltext="Name"
          name="name"
          errortext={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        Email: <TextField
        placeholder="Email"
          floatinglabeltext="Email"
          name="email"
          errortext={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        Password: <TextField
        placeholder="Password"
          floatinglabeltext="Password"
          type="password"
          name="password"
          onChange={onChange}
          errortext={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <Button type="submit" label="Create New Account" primary />
      </div>

      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>
  </Container> */}
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
    <Fragment>
      <div style={{ height: 'calc(100vh)', backgroundImage: `url(/images/login.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Grid container justify = "center" style={{ textAlign: "center" }}>
            <Grid xs={10} sm={7} md={4}>
              <Card style={{ padding: "20px", paddingTop: "30px", opacity: ".9" }}>
                <form action="/" onSubmit={onSubmit} >
                  <h6 class="display-4" style={{ fontSize: "250%" }}>Sign Up</h6>

                  <br></br>

                  {errors.summary && <p className="error-message">{errors.summary}</p>}

                  <TextField style={{ width: "80%" }} placeholder="Name"
                    floatinglabeltext="Email"
                    name="name"
                    errortext={errors.name}
                    onChange={onChange}
                    value={user.name}> </TextField>


                  <br></br>
                  <br></br>

                  <TextField style={{ width: "80%" }} placeholder="Email"
                    floatinglabeltext="Email"
                    name="email"
                    errortext={errors.email}
                    onChange={onChange}
                    value={user.email}> </TextField>

                  <br></br>
                  <br></br>

                  <TextField style={{ width: "80%" }} placeholder="Password"
                    floatinglabeltext="Password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    errortext={errors.password}
                    value={user.password}> </TextField>

                  <div className="button-line">
                    <br></br>
                    <Button style={{ margin: "10px", marginLeft: "0", backgroundColor: "#c62828", color: "white" }} type="submit" variant="contained" children="Log in" primary> Create Account</Button>
                  </div>
                  <br></br>
                  <Typography>Already have an Account? <Link to={'/login'}>Sign in</Link>.</Typography>
                </form>
              </Card>
            </Grid>
            </Grid>
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

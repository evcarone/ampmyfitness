import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
    <Fragment>
      <Card style={{ display: "flex", width: "100%", height: 'calc(100vh)' }}>
          <CardMedia
            style={{ width: "70%" }}
            image="/images/amp.jpg"
          />
        <div style={{ width: "auto" }}>
          <CardContent>
            <Container>
              <div style={{ marginTop: "30%" }}>
                <form action="/" onSubmit={onSubmit} >
                  <h6 class="display-4" style={{ fontSize: "250%" }}>Sign Up</h6>

                  <br></br>

                  {errors.summary && <p className="error-message">{errors.summary}</p>}

                  <TextField style={{ width: "100%" }} placeholder="Name"
                    floatinglabeltext="Email"
                    name="name"
                    errortext={errors.name}
                    onChange={onChange}
                    value={user.name}> </TextField>


                  <br></br>
                  <br></br>

                  <TextField style={{ width: "100%" }} placeholder="Email"
                    floatinglabeltext="Email"
                    name="email"
                    errortext={errors.email}
                    onChange={onChange}
                    value={user.email}> </TextField>

                  <br></br>
                  <br></br>

                  <TextField style={{ width: "100%" }} placeholder="Password"
                    floatinglabeltext="Password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    errortext={errors.password}
                    value={user.password}> </TextField>

                  <div className="button-line">
                    <br></br>
                    <Button style={{ margin: "10px", marginLeft: "0" }} color="secondary" type="submit" variant="contained" children="Log in" primary> Create Account</Button>
                  </div>
                  <br></br>
                  <Typography>Already have an Account? <Link to={'/login'}>Sign in</Link>.</Typography>
                </form>
              </div>
            </Container>
          </CardContent>
        </div>
      </Card>
    </Fragment>
  );

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;

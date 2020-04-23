import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  successMessage,
  toggleAuthenticateStatus
}) => (
    <Fragment>

      <div style={{ height: 'calc(100vh)', backgroundImage: `url(/images/dU7Lxw.jpg)`, backgroundSize: 'cover', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundRepeat: "none" }}>

        <Container style={{ opacity: ".85", textAlign: "center" }}>

          <div style={{ backgroundColor: "#fafafa", width: "325px", margin: "auto", borderRadius: "5px", position: "relative", padding: "30px" }}>


            <form action="/" onSubmit={onSubmit} >
              <h6 class="display-4" style={{ fontSize: "250%" }}>Welcome</h6>
              <AccountCircleIcon style={{ fontSize: "60px", margin: "10px" }}/>

              <br></br>

              {successMessage && <p className="success-message">{successMessage}</p>}
              {errors.summary && <p className="error-message">{errors.summary}</p>}

              <TextField style={{ width: "100%" }} placeholder="Email"
                name="email"
                error={errors.email}
                helperText={errors.email || null}
                onChange={onChange}
                value={user.email}> </TextField>

              <br></br>
              <br></br>

              <TextField style={{ width: "100%" }} placeholder="Password"
                type="password"
                name="password"
                onChange={onChange}
                error={errors.password}
                value={user.password}> </TextField>
              <div className="button-line">
              <br></br>
                <Button style={{ margin: "10px" }} color="secondary" type="submit" variant="contained" children="Log in" primary />
              </div>
              <br></br>
              <Typography >Don't have an account? <Link to={'/signup'}>Create one</Link>.</Typography>
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


import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  successMessage,
  toggleAuthenticateStatus
}) => (

    <Fragment>
      <div style={{ height: 'calc(100vh)', backgroundImage: `url(/images/login.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Grid container justify = "center" style={{ textAlign: "center" }}>
            <Grid xs={10} sm={7} md={4}>
              <Card style={{ padding: "20px", paddingTop: "30px", opacity: ".9" }}>
                <form action="/" onSubmit={onSubmit} >
                  <h6 class="display-4" style={{ fontSize: "250%" }}>Welcome</h6>
                  <AccountCircleIcon style={{ fontSize: "60px", marginBottom: "30px", marginTop: "20px" }} />
                  <br></br>
                  {successMessage && <p className="success-message">{successMessage}</p>}
                  {errors.summary && <p className="error-message">{errors.summary}</p>}
                  <TextField style={{ width: "80%" }} placeholder="Email"
                    name="email"
                    error={errors.email}
                    helperText={errors.email || null}
                    onChange={onChange}
                    value={user.email}> </TextField>
                  <br></br>
                  <br></br>
                  <TextField style={{ width: "80%" }} placeholder="Password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    error={errors.password}
                    value={user.password}> </TextField>
                  <div className="button-line">
                    <br></br>
                    <Button style={{ margin: "10px", marginLeft: "0", backgroundColor: "#c62828", color: "white" }} type="submit" variant="contained" children="Log in" primary />
                  </div>
                  <br></br>
                  <Typography >Don't have an account? <Link to={'/signup'}>Create one</Link>.</Typography>
                </form>
                </Card>
            </Grid>
            </Grid>
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


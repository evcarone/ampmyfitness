import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  successMessage,
  toggleAuthenticateStatus
}) => (

    <Fragment>
      <div style={{ height: 'calc(100vh)', backgroundImage: `url(/images/login.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Card style={{ display: "flex", opacity: ".9" }}>
        <div>
          <CardContent style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white" }}>
            <Container>
              <div style={{ marginTop: "10%" }}>
                <form action="/" onSubmit={onSubmit} >
                  <h6 class="display-4" style={{ fontSize: "250%" }}>Welcome</h6>
                  <AccountCircleIcon style={{ fontSize: "60px", marginBottom: "30px", marginTop: "20px" }} />
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
                    <Button style={{ margin: "10px", marginLeft: "0" }} color="secondary" type="submit" variant="contained" children="Log in" primary />
                  </div>
                  <br></br>
                  <Typography >Don't have an account? <Link to={'/signup'}>Create one</Link>.</Typography>
                </form>
              </div>
            </Container>
          </CardContent>
          </div>
      </Card>
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


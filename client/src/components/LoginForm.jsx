import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardText from '@material-ui/core/Card';
import RaisedButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
  toggleAuthenticateStatus
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatinglabeltext="Email"
          name="email"
          errortext={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatinglabeltext="Password"
          type="password"
          name="password"
          onChange={onChange}
          errortext={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Log in" primary />
      </div>

      <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
    </form>
  </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
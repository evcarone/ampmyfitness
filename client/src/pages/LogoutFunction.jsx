import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../utils/Auth';


class LogoutFunction extends React.Component {

  componentDidMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    // change the current URL to / after logout
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <p>Logging out...</p>
      </div>
    )
  }
}


export default LogoutFunction;
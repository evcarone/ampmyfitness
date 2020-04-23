import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../utils/Auth';
import LoginForm from '../components/LoginForm.jsx';
import API from '../utils/API';

class LoginPage extends React.Component {
  // set the initial component state
  state = {
    errors: {},
    successMessage: '',
    user: {
      email: '',
      password: ''
    }
  }
  
  componentDidMount(){
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }
    this.setState({ successMessage });
  }

  componentWillUnmount(){
    this.setState({
          errors: {}
        });
  }
  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm = event => {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const { email, password } = this.state.user;

    API.login({email, password}).then(res => {
        // save the token
        Auth.authenticateUser(res.data.token);

        // update authenticated state
        this.props.toggleAuthenticateStatus()
        
        // redirect signed in user to dashboard
        this.props.history.push('/home');
        
    }).catch(( {response} ) => {

        const errors = response.data.errors ? response.data.errors : {};
        errors.summary = response.data.message;

        this.setState({
          errors
        });
      });
    
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser = event => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        user={this.state.user}
      />
    );
  }
}
// commented out line 100 - 102 because of error with proptype required but undefined - not sure if this is deprecated or if there is a different problem
// LoginPage.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default LoginPage;
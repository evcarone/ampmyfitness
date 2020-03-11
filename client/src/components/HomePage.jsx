import React from 'react';
import Card from '@material-ui/core/Card';
import CardTitle from '@material-ui/core/Card';
import CardText from '@material-ui/core/Card';
import Auth from '../utils/Auth';
import Container from '@material-ui/core/Container';
import LoginPage from '../pages/LoginPage';


class HomePage extends React.Component {

  

  render() {
    return (
      <Container>
      <Card>
        <CardTitle title="React Application" subtitle="This is the home page." />
          {Auth.isUserAuthenticated() ? (
            <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardText>
          ) : (
            <LoginPage></LoginPage>
          )}
      </Card>
      </Container>
    )
  }
};

export default HomePage;
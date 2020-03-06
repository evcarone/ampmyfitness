import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardTitle from '@material-ui/core/Card';
import CardText from '@material-ui/core/Card';

const Dashboard = ({ secretData, user }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardText>}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
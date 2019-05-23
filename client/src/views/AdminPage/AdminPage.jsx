import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AdminLogin from 'views/AdminPage/Sections/AdminLogin';
import AdminDashboard from 'views/AdminPage/Sections/AdminDashboard';

class AdminPage extends React.Component {
  renderContent = () => {
    const { admin } = this.props;
    if (admin.adminAuthorized) {
      return <AdminDashboard />;
    }
    return <AdminLogin />;
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

AdminPage.propTypes = {
  admin: PropTypes.object.isRequired,
};

function mapStateToProps({ admin }) {
  return { admin };
}

export default connect(
  mapStateToProps,
  null
)(AdminPage);

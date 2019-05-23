/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';

class EmailAdminButton extends React.Component {
  render() {
    const { landlordEmail } = this.props;

    const emailAddress = `mailto:${landlordEmail}?subject=Hello From GatorRoom!`;

    return (
      <a target="_top" rel="noopener noreferrer" href={emailAddress}>
        <Button size="large" variant="contained" color="secondary">
          Email
        </Button>
      </a>
    );
  }
}
export default EmailAdminButton;

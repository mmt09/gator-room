/* eslint-disable camelcase */
import React from 'react';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';

class EmailAdminButton extends React.Component {
  render() {
    const emailAddress = `mailto:theredhead242@gmail.com?subject=Hello From GatorRoom!`;

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

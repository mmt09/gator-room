/* eslint-disable camelcase */
import React from 'react';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';

class EmailAdminButton extends React.Component {

    static defaultProps = {
        address: "",
        city: "",
        postal_code: "",
    };

    render() {
        
        // const { address, city, postal_code } = this.props
        // const fancyAddress = `mailto:theredhead242@gmail.com?subject=Hello From GatorRoom! RE: ${address}, ${city}, ${postal_code}`

        const emailAddress = 
        `mailto:theredhead242@gmail.com?subject=Hello From GatorRoom!`

        return  <a target="_top"
        rel="noopener noreferrer"
        href={emailAddress}>
        <Button
        size="large"
        variant="contained" 
        color="secondary" 
        >
        Email
        </Button>
        </a>
    };
}

// EmailAdminButton.propTypes = {
//     address: PropTypes.string,
//     city: PropTypes.string,
//     postal_code: PropTypes.string
// };

export default EmailAdminButton;


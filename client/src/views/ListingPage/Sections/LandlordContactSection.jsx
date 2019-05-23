/* eslint-disable react/prop-types */
import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import EmailAdminButton from 'views/common/EmailAdminButton';
import Avatar from '@material-ui/core/Avatar';

import listingDetailsStyle from 'assets/jss/material-kit-react/views/listingPageSections/listingDetailsStyle.jsx';

class LandlordContactSection extends React.Component {
  renderInformation = () => {
    const { classes, landlordData } = this.props;
    if (landlordData !== undefined) {
      return (
        <div className={classes.typo}>
          <div className={classes.avatarContainer}>
            <Avatar
              alt={`${landlordData.first_name} ${landlordData.last_name}`}
              src={landlordData.picture}
              className={classes.avatar}
            />
          </div>

          <div>Meet your landlord:</div>
          <div>
            {landlordData.first_name} {landlordData.last_name}
          </div>
          <div>{landlordData.phone}</div>
          <div>{landlordData.about}</div>
          <EmailAdminButton landlordEmail={landlordData.email} />
        </div>
      );
    }
    return null;
  };

  render() {
    const { classes } = this.props;
    // console.log(landlordData);
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.title}>
              <h3>Landlord Information</h3>
            </div>
            <GridContainer>{this.renderInformation()}</GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(listingDetailsStyle)(LandlordContactSection);

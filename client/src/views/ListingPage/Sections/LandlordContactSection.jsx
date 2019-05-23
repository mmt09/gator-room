/* eslint-disable react/prop-types */
import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import EmailAdminButton from 'views/common/EmailAdminButton';

import listingDetailsStyle from 'assets/jss/material-kit-react/views/listingPageSections/listingDetailsStyle.jsx';

class LandlordContactSection extends React.Component {
  render() {
    const { classes, landlordData } = this.props;
    console.log(landlordData);
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.title}>
              <h3>Landlord Information</h3>
            </div>
            <GridContainer>
              <div className={classes.typo}>
                <EmailAdminButton landlordEmail={landlordData.email} />
              </div>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(listingDetailsStyle)(LandlordContactSection);

import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';

import listingDetailsStyle from 'assets/jss/material-kit-react/views/listingPageSections/listingDetailsStyle.jsx';

class ListingDetailsSections extends React.Component {
  render() {
    const { classes, description } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.title}>
              <h3>About</h3>
            </div>
            <GridContainer>
              <div className={classes.typo}>
                <p>{description}</p>
              </div>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(listingDetailsStyle)(ListingDetailsSections);

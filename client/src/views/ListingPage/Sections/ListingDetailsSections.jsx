import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';

import listingDetailsStyle from 'assets/jss/material-kit-react/views/listingPageSections/listingDetailsStyle.jsx';

class ListingDetailsSections extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.title}>
              <h3>About</h3>
            </div>
            <GridContainer>
              <div className={classes.typo}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                  quam id leo in. Viverra orci sagittis eu volutpat. Et netus et malesuada fames ac
                  turpis egestas sed tempus. Venenatis tellus in metus vulputate. Leo a diam
                  sollicitudin tempor. Sed vulputate mi sit amet mauris commodo quis. Aliquet nec
                  ullamcorper sit amet risus nullam eget. Ullamcorper velit sed ullamcorper morbi
                  tincidunt. Lacus suspendisse faucibus interdum posuere lorem.
                </p>
              </div>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(listingDetailsStyle)(ListingDetailsSections);

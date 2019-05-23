import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import iconRadar from 'assets/img/icon-radar.png';
import Footer from '../components/Footer/Footer';
import NavigationBar from './common/NavigationBar';
import productStyle from '../assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx';

const NotFound = props => {
  const { classes } = props;

  return (
    <div>
      <NavigationBar />
      <div className={classes.section}>
        <div className={classes.errorContainer}>
          <img
            src={iconRadar}
            alt="Radar Icon to represent 404 error"
            height="100"
            width="100"
            className={classes.iconStyle}
          />
        </div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Houston, We Have a Problem.</h2>
            <h5 className={classes.description}>We're not sure what happened. 404</h5>
            <h5 className={classes.description}>
              You can navigate to main page, and start over from there.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
};
export default withStyles(productStyle)(NotFound);

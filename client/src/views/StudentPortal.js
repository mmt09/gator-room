import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Footer from 'components/Footer/Footer.jsx';
import NavigationBar from './common/NavigationBar';
import UserProfileCard from './portals/UserProfileCard';
import ListingCard from './portals/ListingCard';
import FiltersList from './portals/FiltersList'


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  gridItem : {
    
  },
  grid : {
    alignContent : "center"
  }
});

class StudentPortal extends React.Component {
  componentDidMount() {
    // takes you to the top of the page automaically
    window.scrollTo(0, 0);
  }

  render() {
    const { classes } = this.props;

    return (
   
      <div className={classes.root}>
        <NavigationBar />
        <main className={classes.content}>
        <Grid container spacing className = {classes.grid}>
            <Grid item xs className = {classes.gridItem}>
                <UserProfileCard/>
            </Grid>
            <Grid item xs = {4}   className = {classes.gridItem}>
                <FiltersList/>
            </Grid>
            <Grid item xs = {6} className = {classes.gridItem}>
                <ListingCard/>
            </Grid>
        </Grid>
     
          
      <Footer/>   
        </main>

        
      </div>
    

      
    );
  }
}

StudentPortal.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(StudentPortal);
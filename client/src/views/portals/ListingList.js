import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListingCard from './ListingCard';



const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight : 700,
        display : "flex",
        minHeight: '73vh',
    },
    booty : {
        margin : 'auto',
        width : '100%'
    },

  });


class ListingList extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Card className={classes.root}>
        <List>
  
          <ListItem >
            <ListingCard/>
          </ListItem>

       

        <ListItem className = {classes.booty}>
            <Button variant="contained" className={classes.booty}>
                Upload New Listing
            </Button>
        </ListItem>
        </List>
       
      </Card>
    );
  }
}

ListingList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListingList);
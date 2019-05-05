import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import purple from '@material-ui/core/colors/purple';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    maxWidth: 950,
    height : 700,
  },
  media: {
    display: 'flex',
    height: 0,
    paddingTop: '56.25%', // 16:9

  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: purple[500],
  },
  content : {
    marginLeft : 10,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  img :{
    display: 'flex',
    height : 400,
    alignText : 'center'

  },

  header : {
    display: 'flex',
    maxHeight : 100
  }
});

class ListingCard extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className = {classes.content}>
      <Card className = {classes.card}>
       
        <CardHeader className = {classes.header}
          avatar={
            <Avatar aria-label="Tenant" className={classes.avatar}>
              Ten
            </Avatar>
          }
          title="450 San Pablo Court"
          subheader="San Francisco, 94312 |
                    2 bedrooms, 1 bath"

        />
      
        <Divider />
  
        <CardContent>
          <img className={classes.img} alt="house"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxwPRayof7yn5SROp6vuE24ByaLJ1qkRe8Fnz18nAWpV_bTLf" />
        </CardContent>
        <Divider />
        <CardContent>
          <Chip label="Pets Allowed" className={classes.chip} />
          <Chip label="Smoke Free" className={classes.chip} />
          <Chip label="On-Site Parking" className={classes.chip} />
        </CardContent>
        <Divider />
        <CardContent>
          <Button variant="contained" className={classes.button}>
            Edit
          </Button>
          <Button variant="contained" className={classes.button}>
            Upload
          </Button>
        </CardContent>
      </Card>
      </div>
 
    );
  }
}

ListingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListingCard);
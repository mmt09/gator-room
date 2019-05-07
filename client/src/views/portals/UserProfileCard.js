import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({

  butt: {
    flex: 1,
    justifyContent: 'center',
    margin: 'auto',
    width : '100%',
    marginTop : 250
  
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    display: 'flex',
    minHeight: '73vh',
  
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  avatar :{
    margin: 10,
    width: 100,
    height: 100,
    display: 'flex',
  }
});

const userInfo = 
{
  name : "Nico Graves",
  bio : "Hello! My name is Nico and I am a senior student at San Francisco State. We have a lovely spot open in our house that is just waiting to be filled by you. The house is very relaxed and we're looking for a chill roomate to come live with us. Feel free to email me, thanks!",
  avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTIwNjA4NjM0MDQxNjMyMjY4/danny-devito-9542289-1-402.jpg",
  userType : "Student",
  email : "thredhead242@Gmail.com"
}


// This an entry point to our components
class UserProfileCard extends React.Component {
  render() {
    // console.log(this.props.search);
    const { classes } = this.props;

    return (
      <div className={classes.root}>
  
      <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <Avatar alt="Nico Graves" src= {userInfo.avatar} className={classes.avatar} />
        
        </Typography>

        <Typography variant="h7" component="h2">
         {userInfo.name}
        </Typography>

  
        <Typography className={classes.pos} color="textSecondary">
          {userInfo.userType}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          {userInfo.email}
        </Typography>

        <Paper  elevation={0.5}>
       
          <Typography component="p">
          {userInfo.bio}
          </Typography>
      </Paper>
   
      </CardContent>
      <CardActions>
        <Button variant="contained" className={classes.butt}>
              Edit
        </Button>
      </CardActions>
   
    </Card>
       
      </div>
    );
  }
}

UserProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps({ search }) {
  return { search };
}

export default connect(
  mapStateToProps,
)(withStyles(styles, { withTheme: true })(UserProfileCard));

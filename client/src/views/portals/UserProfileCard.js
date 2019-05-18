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
    width: '100%',
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
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  avatar: {
    margin: 10,
    width: 100,
    height: 100,
    display: 'flex',
  },
});

// This an entry point to our components
const UserProfileCard = props => {
  // console.log(this.props.search);
  const { classes, firstName, lastName, phone, picture, email, landlordID } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Avatar alt="Nico Graves" src={picture} className={classes.avatar} />
          <Typography variant="h6" component="h2">
            {firstName} {lastName}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {landlordID ? 'Landlord' : 'Student'}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {email}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {phone}
          </Typography>
          <Paper elevation={0.5}>
            <Typography component="p">{`Hello! My name is ${firstName} and I am a senior student at San Francisco State. We have a lovely spot open in our house that is just waiting to be filled by you. The house is very relaxed and we're looking for a chill roomate to come live with us. Feel free to email me, thanks!`}</Typography>
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
};

UserProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  landlordID: PropTypes.number.isRequired,
};

UserProfileCard.defaultProps = {
  phone: '',
};

function mapStateToProps({ search }) {
  return { search };
}

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(UserProfileCard));

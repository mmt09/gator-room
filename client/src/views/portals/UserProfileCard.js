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

const styles = theme => ({

  card: {
    minWidth: 100,
    height : 700,
    width : 300
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
    justifyContent: 'left',
    overflow: 'hidden',
    flexDirection: 'column',
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

// This an entry point to our components
class UserProfileCard extends React.Component {
  render() {
    // console.log(this.props.search);
    const { classes } = this.props;
    

    return (
      <div className={classes.root}>
     
        <main className={classes.content}>
        

          <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <Avatar alt="Nico Graves" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTIwNjA4NjM0MDQxNjMyMjY4/danny-devito-9542289-1-402.jpg" className={classes.avatar} />
        
        </Typography>

        <Typography variant="h7" component="h2">
         Nico Graves
        </Typography>

  
        <Typography className={classes.pos} color="textSecondary">
          Student
        </Typography>
   
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
        </main>
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

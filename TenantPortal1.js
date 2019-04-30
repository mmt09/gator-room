import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Switch from '@material-ui/core/Switch';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    maxWidth: 900,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: purple[500],
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class ListingCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  state = {
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };


  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
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
        <CardMedia
          className={classes.media}
          image="house.jpg"
          title="Tenant House"
        />
        <CardContent>
          <img className={classes.img} alt="house" src="/static/images/grid/house.jpg" />
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
    );
  }
}

ListingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListingCard);
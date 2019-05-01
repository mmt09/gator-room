import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

const ListingCard = props => {
  const { classes, picture, city, address, price, numberOfBedroom, numberOfBathroom } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={address}
          className={classes.media}
          height="140"
          image={picture}
          title={address}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {city}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography color="primary">{price}</Typography>
        <Typography color="primary">{numberOfBedroom}</Typography>
        <Typography color="primary">{numberOfBathroom}</Typography>
      </CardActions>
    </Card>
  );
};

ListingCard.propTypes = {
  classes: PropTypes.object.isRequired,
  picture: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  numberOfBedroom: PropTypes.string.isRequired,
  numberOfBathroom: PropTypes.string.isRequired,
};

export default withStyles(styles)(ListingCard);

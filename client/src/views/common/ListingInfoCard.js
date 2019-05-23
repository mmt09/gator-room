import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function importAll(r) {
  const images = {};
  // eslint-disable-next-line
  r.keys().map(item => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
const images = importAll(require.context('../../../../fileUpload', false, /\.(gif|jpe?g|svg)$/));

const styles = theme => ({
  card: {
    marginBottom: theme.spacing.unit * 2,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
});

const ListingInfoCard = props => {
  const {
    classes,
    imageOne,
    city,
    address,
    price,
    numberOfBedroom,
    numberOfBathroom,
    approved,
    onClick,
  } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          alt={`${address}, ${city}`}
          className={classes.media}
          height="200"
          width="130"
          image={images[imageOne]}
          title={`${address}, ${city}`}
        />
        <CardContent>
          <Typography gutterBottom variant="subheading" component="h2">
            {`${address}, ${city}`}
          </Typography>
          <Typography color="textSecondary">
            ${price}
            {` · ${numberOfBedroom}`} {numberOfBedroom === 1 ? `Bedroom` : `Bedrooms`}
            {` · ${numberOfBathroom}`} {numberOfBathroom === 1 ? `Bathroom` : `Bathrooms`}
          </Typography>
          <Typography color="textSecondary">Approved: {approved === 0 ? 'No' : 'Yes'}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ListingInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  imageOne: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  numberOfBedroom: PropTypes.number.isRequired,
  numberOfBathroom: PropTypes.number.isRequired,
  approved: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

ListingInfoCard.defaultProps = {
  approved: 0,
};

export default withStyles(styles)(ListingInfoCard);

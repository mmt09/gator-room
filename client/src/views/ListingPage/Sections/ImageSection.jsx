import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CarouselSections from './CarouselSections';

const styles = theme => ({
  root: {},
  gridList: {
    width: '100%',
    height: '50vh',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileImageContainer: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const ImageSection = props => {
  const { classes, mainImage } = props;

  const tileData = [
    {
      img: '',
      featured: true,
    },
    {
      img:
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      featured: false,
    },
    {
      img:
        'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      featured: false,
    },
  ];

  tileData[0].img = mainImage;

  return (
    <div className={classes.root}>
      <div className={classes.mobileImageContainer}>
        <CarouselSections imageData={tileData} />
      </div>

      <GridList cellHeight={250} spacing={2} className={classes.gridList} cols={4}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 2}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

ImageSection.propTypes = {
  classes: PropTypes.object.isRequired,
  mainImage: PropTypes.string.isRequired,
};

export default withStyles(styles)(ImageSection);

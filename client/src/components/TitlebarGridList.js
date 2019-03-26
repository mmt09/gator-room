import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import NavigationBar from './common/NavigationBar';
//import tileData from './tileData';

import image1 from '../images/bedroom1.jpg';
import image2 from '../images/bedroom2.jpg';
import image3 from '../images/bedroom3.jpg';
import image4 from '../images/bedroom4.jpg';
import image5 from '../images/bedroom5.jpg';
import image6 from '../images/bedroom6.jpg';
import image7 from '../images/bedroom7.jpg';
import image8 from '../images/bedroom8.jpg';
import image9 from '../images/bedroom9.jpg';
import image10 from '../images/bedroom10.jpg';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1875,
    height: 1080,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const tileData = [
  {
    img: image1,
    address: '258 Spruce Lane',
    price: '$3,500',
  },
  {
    img: image2,
    address: '160 Jim Rosas Lane',
    price: '$3,750',
  },
  {
    img: image3,
    address: '173 Sierra Street',
    price: '$3,500',
  },
  {
    img: image4,
    address: '450 San Pablo Court',
    price: '$3,500',
  },
  {
    img: image5,
    address: '83 Center Avenue',
    price: '$3,500',
  },
  {
    img: image6,
    address: '323 E. Magnolia Street',
    price: '$3,000',
  },
  {
    img: image7,
    address: '7812 East Willow Avenue',
    price: '$4,500',
  },
  {
    img: image8,
    address: '581 Edgewater Street',
    price: '$3,850',
  },
  {
    img: image9,
    address: '42 Courland Street',
    price: '$2,850',
  },
  {
    img: image10,
    address: '658 Evergreen Drive',
    price: '$3,600',
  },
];

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <GridList cellHeight={360} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div" />
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.address} />
              <GridListTileBar
                title={tile.address}
                subtitle={<span>{tile.price}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </main>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);

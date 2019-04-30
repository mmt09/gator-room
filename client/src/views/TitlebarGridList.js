import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    // flexWrap: 'wrap',
    // justifyContent: 'flex-start',
    // padding: 1, 
    // flexDirection: 'column',
    // overflow: 'hidden',
    width: 750,
    height: 725,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class TitlebarGridList extends React.Component {
  render() {
    const { classes, search } = this.props;

    return (
        <main className={classes.content}>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div" />
            </GridListTile>
            {search.map(tile => (
              <GridListTile key={tile.picture}>
                <img src={tile.picture} alt={tile.address} />
                <GridListTileBar
                  title={tile.address}
                  subtitle={
                    <span>
                      {tile.city}, {tile.postal_code} | {tile.num_bedroom} bds | {tile.num_bathroom}{' '}
                      ba
                    </span>
                  }
                  actionIcon={
                    <IconButton className={classes.icon}>
                      ${tile.amount}
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </main>
    );
  }
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  search: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps({ search }) {
  return { search };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(TitlebarGridList));

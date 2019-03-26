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
import { connect } from 'react-redux';
import * as actions from '../actions';

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

class TitlebarGridList extends React.Component {
  render() {
    console.log(this.props.search);
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <main className={classes.content}>
          <GridList cellHeight={360} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div" />
            </GridListTile>
            {this.props.search.map(tile => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.address} />
                <GridListTileBar
                  title={tile.address}
                  subtitle={<span>{tile.amount}</span>}
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
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps({ search }) {
  return { search: search };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(TitlebarGridList));

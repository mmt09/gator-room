import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  housePhotoList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const tileData = [
  {
    img:
      'https://lonelyplanetimages.imgix.net/assets/image/221313592d7ae33ae818ea43b85c8cbf6c6c2d7751ab5bb49f12461e3bb48c88/7696207b827f52ec09362e191f29b5037b2f4b012191b266da0b20072c01583c.jpg',
  },
  {
    img:
      'https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Fthumbnails%2Fblog_2007%2Fpt_2007_4136_o.jpg%3Ft%3D1347040076',
  },
  {
    img: 'https://static.move.com/blogs/2012/5/0515garcia6.jpg',
  },
];

class ListingLocationForm extends React.Component {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-address"
              label="Street Address"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-zip"
              label="City"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-zip"
              label="Zip Code"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-zip"
              label="Bedrooms"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-zip"
              label="Bathrooms"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-zip"
              label="Kitchens"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-zip"
              label="Monthly Rent"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </form>
        </Grid>

        <Grid item xs={12} sm={6}>
          <input
            accept="image/*"
            className={classes.input}
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
          />

          <label htmlFor="raised-button-file">
            <div className={classes.housePhotoList}>
              <GridList className={classes.gridList} cols={2.5}>
                {tileData.map(tile => (
                  <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                      title={tile.title}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>

            <Button variant="raised" component="span" className={classes.button}>
              How about some photos?
            </Button>
          </label>
        </Grid>
      </Grid>
    );
  }
}

ListingLocationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListingLocationForm);

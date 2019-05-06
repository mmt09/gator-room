import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import purple from '@material-ui/core/colors/purple';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import GridListTile from '@material-ui/core/GridListTile';


const styles = theme => ({
  card: {
  

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
  media: {
    display: 'flex',
    height: 0,
    paddingTop: '56.25%', // 16:9

  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: purple[500],
  },
  content : {
    marginLeft : 10,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  img :{
    display: 'flex',
    height : 400,
    alignText : 'center'

  },
  listingPhoto : {
    
  },

  header : {
    display: 'flex',
    maxHeight : 100
  }
});



const tileData = [
     {
       img: 'https://lonelyplanetimages.imgix.net/assets/image/221313592d7ae33ae818ea43b85c8cbf6c6c2d7751ab5bb49f12461e3bb48c88/7696207b827f52ec09362e191f29b5037b2f4b012191b266da0b20072c01583c.jpg',
       title: 'Image',
       author: 'author',
     },
     {
      img: 'https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Fthumbnails%2Fblog_2007%2Fpt_2007_4136_o.jpg%3Ft%3D1347040076',
      title: 'Image',
      author: 'author',
    },
    {
      img: 'https://static.move.com/blogs/2012/5/0515garcia6.jpg',
      title: 'Image',
      author: 'author',
    },
];

class ListingCard extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className = {classes.content}>
      <Card className = {classes.card}>
       
        <CardHeader className = {classes.header}
         
          
          title="450 San Pablo Court"
          subheader="San Francisco, 94312 |
                    2 bedrooms, 1 bath"

        />
               <Button variant="contained" className={classes.button}>
            Contact The Lister
          </Button>
      
        <Divider />
  
        <CardContent className = {classes.listingPhoto}>
        <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
 
          </GridListTile>
        ))}

        
      </GridList>
      
      
        </CardContent>


        <Divider />
        <CardContent>
          <Chip label="Pets Allowed" className={classes.chip} />
          <Chip label="Smoke Free" className={classes.chip} />
          <Chip label="On-Site Parking" className={classes.chip} />
        </CardContent>
        <Divider />


        <CardContent>
        <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna duis. Augue lacus viverra vitae congue eu consequat ac felis donec. Orci porta non pulvinar neque laoreet. Faucibus interdum posuere lorem ipsum dolor sit. Leo urna molestie at elementum eu facilisis sed odio. Mollis nunc sed id semper risus in hendrerit. Commodo ullamcorper a lacus vestibulum sed arcu non. Mi bibendum neque egestas congue quisque. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Tristique risus nec feugiat in fermentum. Donec massa sapien faucibus et molestie. Mi quis hendrerit dolor magna eget est lorem ipsum. Turpis tincidunt id aliquet risus. Vitae suscipit tellus mauris a diam maecenas sed enim. Blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum et sollicitudin ac.
          </Typography>



        </CardContent>
        <CardContent>
          <Button variant="contained" className={classes.button}>
            Edit
          </Button>
    
        </CardContent>
      </Card>
      </div>
 
    );
  }
}

ListingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListingCard);
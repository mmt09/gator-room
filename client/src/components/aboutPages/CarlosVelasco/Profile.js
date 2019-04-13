import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import NavigationBar from '../../common/NavigationBar';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class Profile extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  var App = React.createClass ( {
  render() {
    const { classes, theme } = this.props;
    var background = {backgroundSize : 'cover'};
    var textStyle = {
      position: 'absolute', 
      top: '50%', 
      left: '50%'
    };
    return (
      <div className={classes.root}>
        <NavigationBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          
          <Typography paragraph>
            <h1 className="FeonaHeader">
            
              <center style={{ fontSize: 22, color: white }}> Carlos Ernesto Velasco</center>
              
            </h1>

            <div style={{width: 'auto'}}>
            <Image 
                  style={background} responsive 
                  src="https://cdn.vox-cdn.com/thumbor/tso3z03pqxXMNvkJI__4hRk2n0Y=/0x0:1920x1080/1200x800/filters:focal(876x639:1182x945)/cdn.vox-cdn.com/uploads/chorus_image/image/60196273/NintendoSwitch_Fortnite_E3Screenshot_1.0.jpg">
                </Image>
                <h1 style={textStyle}>Text over image</h1>
            </div>

            <p className="FeonaParagraph">
              <center style={{ fontSize: 22, color: white }}>
                My name is Carlos Velasco, and I am a seinor at San Fransisco State University. This
                is mythird year here at San Fransisco State University, and my major is Computer
                Science. TheSome languages I have worked with are C++. C, Java, and Java Script. I
                do not have any knowledge ofthe Python language. I have made apps in IOS and I have
                my own website design company that Ipartner with my Father’s Graphic design company.
                I have sold three professional websites to threeprofessional local businesses in San
                Louis Obispo, California. When it comes to a group project Ican do either back-end
                or front-end work, but I prefer the front-end work because I love todo designs and
                customize the project.
              </center>
            </p>
          </Typography>
        </main>
      </div>
    );
    }
  
  });
}

export default withStyles(styles, { withTheme: true })(Profile);

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
  name: {},
  cardTitle: {
    fontSize: 20,
    textAlign: 'left',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    justifyContent: 'space-around',
  },

  card: {
    margin: 30,
    padding: '20px 40px 40px',
    maxWidth: 500,
    background: '#fff',
    borderBottom: '4px solid #ccc',
    textAlign: 'left',
    '&:hover': {
      borderColor: '#FF69B4',
    },
  },
});

class Profile extends React.Component {
  state = { mobileOpen: false };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavigationBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            <div className="header">
              <center>
                <h1 className={classes.name}>Feona Mae Garcia</h1>
                <img
                  src="https://avatars3.githubusercontent.com/u/35904165?s=460&v=4"
                  alt="Feona Mae Garcia"
                  className={classes.profileImage}
                />
              </center>
            </div>

            <div className={classes.cardContainer}>
              <Card className={classes.card}>
                <CardContent>
                  <h2 className={classes.cardTitle}>
                    <center>Scrum Master/Front-End Friend</center>
                  </h2>
                  <center>
                    Hi there, my full name is a mouth full but you can just call me Feona. I am a
                    San Diego native, but moved to Norcal in 2017 to finish my college degree here
                    at SF State. I am majoring in Computer Science, and minoring in Mathematics. It
                    is my last semester here but in the past two years i have attained an
                    immeasurable amount of knowledge. I know a plethora of languages such as Java,
                    C, C++, HTML/CSS, SQL, and some Javascript. My favorite project thus far has got
                    to be the multiplayer tank wars game that i made in Java, this was the first
                    project i did not have skeleton code or anyone to work with. I prefer back end
                    but i am hoping to learn more about front end in this class and with this
                    project. In my spare time i do graphical design work for small organizations. As
                    well aside from programming, i paint and read when i find the time too! I really
                    look forward to this class and feel it will tecah me many valuable things that i
                    can take with me to my career field after i graduate.
                  </center>
                </CardContent>
              </Card>
            </div>
          </Typography>
        </main>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Profile);

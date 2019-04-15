import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import NavigationBar from '../../common/NavigationBar';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  // cardContainer: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   [theme.breakpoints.down('sm')]: {
  //     flexDirection: 'column',
  //   },
  // },
  // card: {
  //   flex: 1,
  // },
  // header: {
  //   display: 'flex',
  //   backgroundColor: 'red',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection: 'column',
  // },
});

class Profile extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavigationBar />
        <main className={classes.content}>
          <Typography paragraph>
            <div class="header">
              <img
                src="https://avatars0.githubusercontent.com/u/25942541?s=460&v=4"
                width="300"
                height="300"
                alt="Jakhongir Khusanov"
                className="profile-image"
              />

              <h1 className="tag name">Jakhongir Khusanov</h1>
              <p className="tag location">Full Stack Fellow</p>
            </div>
            <div className={classes.cardContainer}>
              <div className={classes.card}>
                <h2 className="card-title">Background</h2>
                <p>
                  Software Developer with an entrepreneurial spirit. As a tech enthusiast who
                  travels around the world, I am interested in all types of technology starting from
                  simple mobile solutions to space rockets.
                </p>
                <p>
                  My focus and expertise are mobile apps development, and I actively use
                  cutting-edge tech stack such as React Native to develop iOS and Android apps.
                  Exploring Swift for native iOS and full-stack to build awesome digital products.
                </p>
                <p>
                  I love traveling, and during my journeys, I have met many wonderful people from
                  all over the world. I am excited about bringing my life experience to the process
                  of improving people{"'"}s lives.
                </p>
                <ul>
                  <li>
                    To learn more, <a href="https://github.com/jkhusanov">visit my GitHub.</a>
                  </li>
                </ul>
              </div>

              <div className={classes.card}>
                <h2 className="card-title">Goals</h2>
                <p>
                  I want to master the process of creating useful digital products and increase my
                  knowledge and skills in:
                </p>
                <ul className="skills">
                  <li>React Native</li>
                  <li>Swift</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Full Stack</li>
                </ul>
                <p>I'd like to establish my own company once I get enough industry experience.</p>
              </div>
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

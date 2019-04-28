import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
      borderColor: '#21CBF3',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  position: {
    display: 'flex',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 50,
    padding: '0 30px',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },
  name: {},
  cardTitle: {
    textAlign: 'center',
  },
  skills: {
    padding: 0,
    textAlign: 'center',
    '& li': {
      borderRadius: '6px',
      display: 'inline-block',
      background: '#ff9904',
      color: 'white',
      padding: '5px 10px',
      margin: '2px',
    },
    '& li:nth-child(odd)': {
      background: '#0399ff',
    },
  },
});

class Profile extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavigationBar />
        <main className={classes.content}>
          <Typography paragraph>
            <div className={classes.header}>
              <img
                src="https://avatars0.githubusercontent.com/u/25942541?s=460&v=4"
                alt="Jakhongir Khusanov"
                className={classes.profileImage}
              />

              <h1 className={classes.name}>Jakhongir Khusanov</h1>
              <div className={classes.position}>Full Stack Fellow</div>
            </div>
            <div className={classes.cardContainer}>
              <Card className={classes.card}>
                <CardContent>
                  <h2 className={classes.cardTitle}>Background</h2>
                  <p>
                    Software Developer with an entrepreneurial spirit. As a tech enthusiast who
                    travels around the world, I am interested in all types of technology starting
                    from simple mobile solutions to space rockets.
                  </p>
                  <p>
                    My focus and expertise are mobile apps development, and I actively use
                    cutting-edge tech stack such as React Native to develop iOS and Android apps.
                    Exploring Swift for native iOS and full-stack to build awesome digital products.
                  </p>
                  <p>
                    I love traveling, and during my journeys, I have met many wonderful people from
                    all over the world. I am excited about bringing my life experience to the
                    process of improving people{"'"}s lives.
                  </p>
                  <ul>
                    <li>
                      To learn more, <a href="https://github.com/jkhusanov">visit my GitHub.</a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={classes.card}>
                <CardContent>
                  <h2 className={classes.cardTitle}>Goals</h2>
                  <p>
                    I am constantly increasing my knowledge and skills in these technologies and
                    fields:
                  </p>
                  <ul className={classes.skills}>
                    <li>React Native</li>
                    <li>Swift</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Full Stack</li>
                  </ul>
                  <p>
                    I{"'"}d like to establish my own company once I get enough industry experience.
                  </p>
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

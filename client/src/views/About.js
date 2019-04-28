import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import NavigationBar from './common/NavigationBar';
import TeamSection from './LandingPage/Sections/TeamSection';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavigationBar />
        <main className={classes.content}>
          <TeamSection />
        </main>
      </div>
    );
  }
}
About.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(About);

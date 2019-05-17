import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import progressStyle from './progressStyle.jsx';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { classes, progress } = this.props;

    return (
      <div className={classes.progressBar}>
        <div className={classes.progress} style={{ width: `${progress}%` }} />
      </div>
    );
  }
}

export default withStyles(progressStyle)(Progress);

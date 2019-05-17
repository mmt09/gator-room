/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import dropzoneStyle from './dropzone.jsx';

class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.state = { hightlight: false };
    this.fileInputRef = React.createRef();

    this.openFileDialog = this.openFileDialog.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onFilesAdded(evt) {
    if (this.props.disabled) return;
    const { files } = evt.target;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
  }

  onDragOver(event) {
    event.preventDefault();
    if (this.props.disabled) return;
    this.setState({ hightlight: true });
  }

  onDragLeave(event) {
    this.setState({ hightlight: false });
  }

  onDrop(event) {
    event.preventDefault();
    if (this.props.disabled) return;
    const { files } = event.dataTransfer;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
    this.setState({ hightlight: false });
  }

  fileListToArray = list => {
    const array = [];
    for (let i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  };

  openFileDialog() {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }

  render() {
    const { classes, disabled } = this.props;
    const { hightlight } = this.state;
    const isHighLight = hightlight ? classes.highlight : classes.noHighlight;

    return (
      <div
        className={classNames(classes.dropzone, isHighLight)}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
        onKeyPress={this.openFileDialog}
        style={{ cursor: disabled ? 'default' : 'pointer' }}
        role="button"
        tabIndex={0}
      >
        <input
          ref={this.fileInputRef}
          className={classes.fileInput}
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />
        <img alt="upload" className={classes.icon} src="baseline-cloud_upload-24px.svg" />
        <span>Upload Files</span>
      </div>
    );
  }
}

Dropzone.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onFilesAdded: PropTypes.func.isRequired,
};

export default withStyles(dropzoneStyle)(Dropzone);

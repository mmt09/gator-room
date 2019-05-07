import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, RaisedButton, Dialog, Checkbox } from 'material-ui';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import { blueGrey900 } from 'material-ui/styles/colors';
import { withStyles } from '@material-ui/core/styles';
import { Redirect, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as action from '../../actions'; 

const styles = {
  underlineStyle: {
    borderColor: blueGrey900,
  },
  floatingLabelStyle: {
    color: blueGrey900,
  },
  floatingLabelFocusStyle: {
    color: blueGrey900,
  },
  buttonStyle: {
    margin: 14,
  },
  checkbox: {
    marginTop: 10,
    marginBottom: 10,
  },
  customContentStyle: {
    width: '40%',
    maxWidth: 'none',
  },
  loginStyle: {
    marginTop: 15,
  },
  loginLink: {
    marginLeft: 5,
  },
};

class SignUp extends Component {
  state = {
    open: false,
    checked: false,
    finished: false,
    stepIndex: 0,
  };

  getStepContent(stepIndex) {
    switch ((this.stepIndex = stepIndex)) {
      case 0:
        return (
          <div>
            <TextField
              floatingLabelText="First Name"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle}
              fullWidth
            />
            <br />
            <TextField
              floatingLabelText="Last Name"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle}
              fullWidth
            />
            <br />
            <TextField
              floatingLabelText="Phone Number"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle}
              fullWidth
            />
          </div>
        );
      case 1:
        return (
          <div>
            <TextField
              floatingLabelText="Username"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle}
              fullWidth
            />
            <br />
            <TextField
              floatingLabelText="Email"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle}
              fullWidth
            />
            <br />
            <TextField
              type="password"
              floatingLabelText="Password"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle}
              fullWidth
            />
            <br />
          </div>
        );
      case 2:
        return (
          <TextField
            floatingLabelText="Address"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            underlineFocusStyle={styles.underlineStyle}
            multiLine
            rows={2}
            fullWidth
          />
        );
      default:
        return 'Your default stepper';
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex === 2) {
      this.setState({ stepIndex: 0, finished: false });
      window.location = 'http://www.gatorroom.xyz';
    }
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  updateCheck() {
    this.setState(oldState => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    const { finished, stepIndex, checked, open } = this.state;
    const contentStyle = { margin: '0 16px' };
    const actions = [
      <RaisedButton
        key
        label="Back"
        disabled={stepIndex === 0}
        onClick={this.handlePrev}
        primary
        style={{ marginRight: 12 }}
      />,
      <RaisedButton
        key
        label={stepIndex === 2 ? 'Submit' : 'Next'}
        value={stepIndex === 2 ? 'Submit' : 'Next'}
        primary
        onClick={this.handleNext}
      />,
      <RaisedButton
        key
        label="Cancel"
        onClick={this.handleClose}
        primary
        style={styles.buttonStyle}
      />,
    ];

    return (
      <MuiThemeProvider>
        <RaisedButton
          label="Sign Up"
          onClick={this.handleOpen}
          primary
          style={styles.buttonStyle}
        />
        <Dialog
          title="Sign Up To Gator Room "
          actions={actions}
          modal
          open={open}
          contentStyle={styles.customContentStyle}
        >
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Basic Info</StepLabel>
            </Step>
            <Step>
              <StepLabel>Set Login Info</StepLabel>
            </Step>
            <Step>
              <StepLabel>Address Info</StepLabel>
            </Step>
          </Stepper>
          <div style={contentStyle}>
            {finished ? (
              <div>
                I do not have an account
                <a
                  href="http://www.gatorroom.xyz"
                  onClick={event => {
                    event.preventDefault();
                    this.setState({ stepIndex: 0, finished: false });
                  }}
                  style={styles.loginLink}
                >
                  SignUp
                </a>
              </div>
            ) : (
              <div>
                <p>{this.getStepContent(stepIndex)}</p>
              </div>
            )}
          </div>
          <Checkbox
            label="I agree with Term & Conditions"
            checked={checked}
            onCheck={this.updateCheck.bind(this)}
            style={styles.checkbox}
          />
          <login style={styles.loginStyle}>
            I have an account
            <a href="http://www.gatorroom.xyz" style={styles.loginLink}>
              Login
            </a>
          </login>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

SignUp.propTypes = {
  formInput: PropTypes.arrayOf(PropTypes.object),
};

SignUp.defaultProps = {
  formInput: [],
};

function mapStateToProps( {signup} ) {
  return { signup };
};


export default connect(
  mapStateToProps,
  null,
  action
  )(withRouter(withStyles(styles)(SignUp)));

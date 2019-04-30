import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, RaisedButton, Dialog, Checkbox } from 'material-ui';
import { blueGrey900 } from 'material-ui/styles/colors';
import { Redirect } from 'react-router';

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
    width: '30%',
    maxWidth: 'none',
  },
  signUpStyle: {
    marginTop: 15,
  },
  loginLink: {
    marginLeft: 5,
  },
};

class Login extends Component {
  state = {
    open: false,
    checked: false,
    routing: false,
    
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  route = () => {
    this.setState({ routing: true });
  };

  updateCheck() {
    this.setState(oldState => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    const { open, checked,routing } = this.state;
    const actions = [
      <a key href="http://www.gatorroom.xyz">
        Forget My Password
      </a>,

    
        <RaisedButton
          key
          label="Cancel"
          onClick={this.handleClose}
          primary
          style={styles.buttonStyle}
        />     
      ,
      
      <RaisedButton
        key
        label="Submit"
        onClick={this.route}
        primary
        style={styles.buttonStyle}
      />,
    ];


    if (routing) {
      return <Redirect push to="/StudentPortal" />;
    }

    return (
      <MuiThemeProvider>
        <RaisedButton label="Login" onClick={this.handleOpen} primary style={styles.buttonStyle} />
        <Dialog
          title="Sign In To Gator Room "
          actions={actions}
          modal
          open={open}
          contentStyle={styles.customContentStyle}
        >
          <TextField
            floatingLabelText="Username or Email"
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
          <Checkbox
            label="Remember Me"
            checked={checked}
            onCheck={this.updateCheck.bind(this)}
            style={styles.checkbox}
          />
          <signUp style={styles.signUpStyle}>
            I do not have an account
            <a href="http://www.gatorroom.xyz" style={styles.loginLink}>
              Sign Up Now
            </a>
          </signUp>
        </Dialog>

        
      </MuiThemeProvider>
    );
  }
}
function mapStateToProps(state) {
  return {
    count: state.counterReducer,
  };
}
export default connect(mapStateToProps)(Login);

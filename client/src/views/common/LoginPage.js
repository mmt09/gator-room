import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
// core components
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import loginPageStyle from 'assets/jss/material-kit-react/views/loginPage.jsx';

import image from 'assets/img/landing-bg.jpg';
import * as actions from '../../actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: 'cardHidden',
      sfsuEmail: '',
      password: '',
    };
    this.updateSfsuemail = this.updateSfsuemail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: '' });
      }.bind(this),
      700
    );
  }

  updateSfsuemail(event) {
    const { target } = event;
    const text = target.value;
    this.setState({ sfsuEmail: text });
  }

  updatePassword(event) {
    const { target } = event;
    const text = target.value;
    this.setState({ password: text });
  }

  loginUser() {
    const { sfsuEmail, password } = this.state;
    const { fetchLogin } = this.props;
    fetchLogin(sfsuEmail, password, () => {});
  }

  render() {
    const { classes, ...rest } = this.props;
    const { sfsuEmail, password } = this.state;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: 'url(' + image + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                    </CardHeader>
                    <p className={classes.divider} />
                    <CardBody>
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'text',
                          value: sfsuEmail,
                          onchange: this.updateSfsuemail,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'text',
                          value: password,
                          onchange: this.updatePassword,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" onClick={this.loginUser}>
                        Submit
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  fetchLogin: PropTypes.func.isRequired,
};

function mapStateToProps({ login }) {
  return { login };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(withStyles(loginPageStyle)(LoginPage)));

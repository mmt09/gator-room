import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Footer from 'components/Footer/Footer.jsx';

import Card from 'components/Card/Card.jsx';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import loginPageStyle from 'assets/jss/material-kit-react/views/loginPage.jsx';

import image from 'assets/img/landing-bg.jpg';
import ListingStepper from 'components/Stepper/ListingStepper';
import Header from '../components/Header/Header.jsx';
import * as actions from '../actions';

class ListingUpload extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {};
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateUsername(event) {
    const { target } = event;
    const text = target.value;
    this.setState({ username: text });
  }

  updatePassword(event) {
    const { target } = event;
    const text = target.value;
    this.setState({ password: text });
  }

  loginUser() {
    const { username, password } = this.state;
    const { fetchLogin } = this.props;
    fetchLogin(username, password, () => {});
  }

  render() {
    const { classes, fetchLogin, ...rest } = this.props;
    // const {} = this.state;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="GatorRoom"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <div className={classes.container}>
            <Card>
              <ListingStepper />
            </Card>
          </div>
        </div>
        <Footer whiteFont />
      </div>
    );
  }
}

ListingUpload.propTypes = {
  fetchLogin: PropTypes.func.isRequired,
};

function mapStateToProps({ login }) {
  return { login };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(loginPageStyle)(ListingUpload));

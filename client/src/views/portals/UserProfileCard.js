import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import PhoneNumberMask from 'views/common/PhoneNumberMask';
import Success from 'components/Typography/Success.jsx';
import Danger from 'components/Typography/Danger.jsx';

import * as actions from '../../actions';

const styles = theme => ({
  butt: {
    flex: 1,
    justifyContent: 'center',
    margin: 'auto',
    width: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  avatar: {
    margin: 10,
    width: 100,
    height: 100,
    display: 'flex',
  },
  textArea: {},
});

// This an entry point to our components
class UserProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDisabled: true,
      aboutValue: '',
      phoneValue: '',
    };
    this.editButtonPress = this.editButtonPress.bind(this);
    this.updateAboutInput = this.updateAboutInput.bind(this);
    this.updatePhoneInput = this.updatePhoneInput.bind(this);
    this.saveButtonPress = this.saveButtonPress.bind(this);
  }

  componentDidMount() {
    const { phone, about } = this.props;
    if (phone !== null) {
      this.setState({ phoneValue: phone });
    }
    if (about !== null) {
      this.setState({ aboutValue: about });
    }
  }

  updateAboutInput(event) {
    const { target } = event;
    const text = target.value;
    this.setState({ aboutValue: text });
  }

  updatePhoneInput(event) {
    const { target } = event;
    const text = target.value;
    this.setState({ phoneValue: text });
  }

  editButtonPress() {
    const { inputDisabled } = this.state;
    this.setState({ inputDisabled: !inputDisabled });
  }

  saveButtonPress() {
    const { updateLandlordPhone, updateLandlordAbout, phone, about, landlordID } = this.props;
    const { aboutValue, phoneValue } = this.state;

    if (phone !== phoneValue) {
      updateLandlordPhone(landlordID, phoneValue);
    }
    if (about !== aboutValue) {
      updateLandlordAbout(landlordID, aboutValue);
    }
    this.editButtonPress();
  }

  renderButton() {
    const { classes } = this.props;
    const { inputDisabled } = this.state;
    if (inputDisabled) {
      return (
        <Button
          variant="contained"
          color="primary"
          className={classes.butt}
          onClick={this.editButtonPress}
        >
          Edit
        </Button>
      );
    }

    return (
      <Button
        variant="contained"
        color="secondary"
        className={classes.butt}
        onClick={this.saveButtonPress}
      >
        Save
      </Button>
    );
  }

  renderResponse() {
    const { classes, landlordUpdated } = this.props;
    if (landlordUpdated === 'Done') {
      return <Success className={classes.pos}>{landlordUpdated}</Success>;
    }
    if (landlordUpdated !== 'Done' && landlordUpdated !== null) {
      return <Danger className={classes.pos}>{landlordUpdated}</Danger>;
    }
    return null;
  }

  render() {
    // console.log(this.props.search);
    const { classes, firstName, lastName, picture, email, landlordID } = this.props;
    const { inputDisabled, aboutValue, phoneValue } = this.state;
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Avatar alt={`${firstName} ${lastName}`} src={picture} className={classes.avatar} />
            <Typography variant="h6" component="h2">
              {firstName} {lastName}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {landlordID ? 'Landlord' : 'Student'}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {email}
            </Typography>
            <Paper elevation={0.5}>
              <CustomInput
                labelText="Your Phone Number"
                id="phone"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  inputComponent: PhoneNumberMask,
                  disabled: inputDisabled,
                  value: phoneValue,
                  onChange: this.updatePhoneInput,
                }}
              />
              <CustomInput
                labelText="About you"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  placeholder: 'Enter a brief information about yourself',
                  disabled: inputDisabled,
                  value: aboutValue,
                  onChange: this.updateAboutInput,
                }}
              />
              {this.renderResponse()}
            </Paper>
          </CardContent>
          <CardActions>{this.renderButton()}</CardActions>
        </Card>
      </div>
    );
  }
}

UserProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  landlordID: PropTypes.number.isRequired,
  about: PropTypes.string,
  updateLandlordPhone: PropTypes.func.isRequired,
  updateLandlordAbout: PropTypes.func.isRequired,
  landlordUpdated: PropTypes.string,
};

UserProfileCard.defaultProps = {
  phone: '',
  about: '',
  landlordUpdated: '',
};

function mapStateToProps({ landlordUpdated }) {
  return { landlordUpdated };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles, { withTheme: true })(UserProfileCard));

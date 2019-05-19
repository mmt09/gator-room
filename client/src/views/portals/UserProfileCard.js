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
        onClick={this.editButtonPress}
      >
        Save
      </Button>
    );
  }

  render() {
    // console.log(this.props.search);
    const { classes, firstName, lastName, phone, picture, email, landlordID, about } = this.props;
    const { inputDisabled, aboutValue, phoneValue } = this.state;
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Avatar alt="Nico Graves" src={picture} className={classes.avatar} />
            <Typography variant="h6" component="h2">
              {firstName} {lastName}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {landlordID ? 'Landlord' : 'Student'}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {email}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {phone}
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
                  value: phone || phoneValue,
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
                  value: about || aboutValue,
                  onChange: this.updateAboutInput,
                }}
              />
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
};

UserProfileCard.defaultProps = {
  phone: '',
  about: '',
};

function mapStateToProps({ search }) {
  return { search };
}

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(UserProfileCard));

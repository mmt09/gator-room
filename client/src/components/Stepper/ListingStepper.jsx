import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

import ListingLocationForm from 'components/ListingUploadForms/ListingLocationForm';
import ListingFiltersForm from 'components/ListingUploadForms/ListingFiltersForm';
import ListingImagesForm from 'components/ListingUploadForms/ListingImagesForm';
import * as actions from '../../actions';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: '2%',
  },
  stepperContent: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  backNextButtons: {
    marginLeft: 10,
    marginBottom: 10,
  },
});

function getSteps() {
  return ['Location & Tell Us About It!', 'Your House Rules!', 'Upload Photos'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Where is the listing?';
    case 1:
      return 'What are the listings tenancy rules?';
    case 2:
      return 'What is the house like?';
    default:
      return 'Unknown step';
  }
}

class ListingStepper extends React.Component {
  state = {
    activeStep: 0,
    skipped: new Set(),
  };

  componentWillUnmount() {
    const { removeUploadedListingID } = this.props;
    removeUploadedListingID();
  }

  isStepOptional = step => step === 1;

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    const { removeUploadedListingID } = this.props;
    this.setState({
      activeStep: 0,
    });

    removeUploadedListingID();
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes, listingUpdate } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }

            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          <div className={classes.stepperContent}>
            {activeStep === 0 ? <ListingLocationForm /> : null}
            {activeStep === 1 ? <ListingFiltersForm /> : null}
            {activeStep === 2 ? <ListingImagesForm /> : null}
          </div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Add more
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>

              <div className={classes.backNextButtons}>
                <Button
                  disabled={activeStep === 0 || activeStep === 1}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                {this.isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                  disabled={listingUpdate === null ? true : false}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

ListingStepper.propTypes = {
  classes: PropTypes.object,
  listingUpdate: PropTypes.object.isRequired,
  removeUploadedListingID: PropTypes.func.isRequired,
};

function mapStateToProps({ listingUpload }) {
  return {
    listingUpdate: listingUpload.listingUpdate,
  };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(ListingStepper));

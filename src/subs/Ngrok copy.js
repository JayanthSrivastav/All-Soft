import { Button, Typography, Box, Stepper, Step, StepButton } from '@mui/material'
import React from 'react'
import '../App.css'

const steps = ['Download', 'Start using'];

const Ngrok = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  function switchCase(key) {

    switch (key) {
      case 0:
        return "Download";
        break;
      case 1:
        return "Start using.";
        break;
      default:
        return 0;
    }
  }

  return (
    <div className='BGCanvas'>
      <Box sx={{ width: '100vh', height: '100vh', marginTop: '5vh' }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton onClick={handleStep(index)}>

              </StepButton>
              <span className="Stepbu">
                {label}
              </span>
            </Step>
          ))}
        </Stepper>
        <div>
          <React.Fragment>
            <div style={{ color: 'white' }}>

              <Typography variant="h3" sx={{ mt: 2, mb: 1, py: 1 }} align="left" marginLeft='5%'>
                {switchCase(activeStep)}
              </Typography>
            </div>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, marginTop: '60%' }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button
                color="inherit"
                disabled={activeStep === steps.length - 1}
                onClick={handleNext}
                sx={{ mr: 1 }}
              >
                Next
              </Button>
            </Box>
          </React.Fragment>
        </div>
      </Box>
    </div>
  )
}

export default Ngrok
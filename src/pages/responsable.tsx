import React from 'react'
import {
  Box, Button, Stepper, Step, StepLabel
} from '@mui/material'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import FormDiv from '../components/FormDiv'
import responsableForm from '../forms/responsable.json'
import { useNavigate } from 'react-router-dom'
const Container = styled.div``

export default function Responsable () {
  // const [formData, setFormData] = useState('')
  const { register, handleSubmit, control, setValue } = useForm()
  const navigate = useNavigate()

  const [radioValue, setRadioValue] = React.useState(localStorage.getItem('responsible') || '{}')
  const [isChecked, setIsChecked] = React.useState(localStorage.getItem('responsible') || '{}')

  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Container>
      <Box>
        <h1>Rapport de stage | Responsable</h1>
      </Box>
      <div key="divForm">
        <button onClick={() => navigate('/')}>Homepage</button>
        <form
          onSubmit={handleSubmit((formData) => {
            navigate('/responsable/preview', {
              state: {
                formData: JSON.stringify(formData)
              }
            })
            console.log(formData)
            localStorage.setItem('responsible', JSON.stringify(formData))
          }
          )}
          key="mainForm"
        >
          <Stepper activeStep={activeStep}>
            {
              responsableForm.divs.map((div:any, index: number) => {
                const stepProps:any = {}
                const labelProps:any = {}

                return (
                  <Step key={div.label} {...stepProps}>
                    <StepLabel {...labelProps}>{div.label}</StepLabel>
                  </Step>
                )
              })}
          </Stepper>
          {activeStep === responsableForm.divs.length
            ? (
                <React.Fragment>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button type="submit">SUBMIT</Button>
                  </Box>
                </React.Fragment>
              )
            : (
                <React.Fragment>
                  <FormDiv
                    label={responsableForm.divs[activeStep].label} fields={
                      responsableForm.divs[activeStep].fields
                    }
                    register={register}
                    setValue={setValue}
                    control={control}
                    localStorage={localStorage.getItem('responsible')}
                    radioValue={radioValue}
                    setRadioValue={setRadioValue}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />

                    <Button onClick={handleNext}>
                      {activeStep === responsableForm.divs.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </Box>
                </React.Fragment>
              )
          }
        </form>
      </div>
    </Container>
  )
}

import React from 'react'
import {
  Box, Button, Stepper, Step, StepLabel
} from '@mui/material'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import FormDiv from '../components/FormDiv'
import stagiairesForm from '../forms/stagiaires.json'
import { useNavigate } from 'react-router-dom'
const Container = styled.div``

export default function Stagiaire () {
  // const [formData, setFormData] = useState('')
  const { register, handleSubmit, control, setValue } = useForm()
  const navigate = useNavigate()

  const [radioValue, setRadioValue] = React.useState(localStorage.getItem('intern') || '{}')
  const [isChecked, setIsChecked] = React.useState(localStorage.getItem('intern') || '{}')

  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100vw', gap: '3vh' }}>
      <Box>
        <h1>Rapport de stage | Stagiaire</h1>
      </Box>
      <Button onClick={() => navigate('/')}>Retour à l'accueil</Button>
      <div key="divForm">
        <form
          onSubmit={handleSubmit((formData) => {
            navigate('/stagiaire/preview', {
              state: {
                formData: JSON.stringify(formData)
              }
            })
            console.log(formData)
            localStorage.setItem('intern', JSON.stringify(formData))
          }
          )}
          key="mainForm"
        >
          <Stepper activeStep={activeStep}>
            {
              stagiairesForm.divs.map((div:any, index: number) => {
                const stepProps:any = {}
                const labelProps:any = {}

                return (
                  <Step key={div.label} {...stepProps}>
                    <StepLabel {...labelProps}>{div.label}</StepLabel>
                  </Step>
                )
              })}
          </Stepper>
          {activeStep === stagiairesForm.divs.length
            ? (
                <React.Fragment>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button type="submit">Voir le rapport</Button>
                  </Box>
                </React.Fragment>
              )
            : (
                <React.Fragment>
                  <FormDiv
                    label={stagiairesForm.divs[activeStep].label} fields={
                      stagiairesForm.divs[activeStep].fields
                    }
                    register={register}
                    setValue={setValue}
                    control={control}
                    localStorage={localStorage.getItem('intern')}
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
                      Retour
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleNext}>
                      {activeStep === stagiairesForm.divs.length - 1 ? 'Fin' : 'Suivant'}
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

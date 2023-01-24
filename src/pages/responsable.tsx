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
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100vw', gap: '3vh', marginBottom: '5vh' }}>
      <Box>
        <h1>Rapport de stage | Responsable</h1>
      </Box>
      <Button onClick={() => navigate('/')} variant="outlined">Retour à l'accueil</Button>
      <div key="divForm">
        <form
          onSubmit={handleSubmit((formData) => {
            const datas = { ...JSON.parse(localStorage.getItem('responsible') || '{}'), ...formData }
            navigate('/responsable/preview', {
              state: {
                formData: JSON.stringify(datas)
              }
            })
            console.log(datas)
            localStorage.setItem('intern', JSON.stringify(datas))
          }
          )}
          key="mainForm"
        >
          <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '3vh' }}>
            <Button type="submit" variant="contained">Voir le rapport</Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 45, pt: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              color="error"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Retour
            </Button>
            <Button onClick={handleNext} style={{ display: activeStep === responsableForm.divs.length - 1 ? 'none' : 'block' }}>Suivant</Button>
          </Box>
          {activeStep === responsableForm.divs.length
            ? (
                <React.Fragment>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1 1 auto' }} />
                    <Button type="submit" variant="contained">Voir le rapport</Button>
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
                </React.Fragment>
              )
          }
        </form>
      </div>
    </Container>
  )
}

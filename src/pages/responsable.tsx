import React, { useState } from 'react'
import {
  Box, Button, Stepper, Step, StepLabel
} from '@mui/material'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import FormDiv from '../components/FormDiv'
import responsableForm from '../forms/responsable.json'
import { useNavigate } from 'react-router-dom'
import DarkMode from '../components/DarkMode'
import '../style/darkMode.css'
const Container = styled.div``

export default function Responsable () {
  // const [formData, setFormData] = useState('')
  const { register, handleSubmit, control, setValue } = useForm()
  const navigate = useNavigate()

  const storage = JSON.parse(localStorage.getItem('rapport-de-stage') || '{}')
  const [radioValue, setRadioValue] = React.useState(JSON.stringify(storage.responsible) || '{}')
  const [isChecked, setIsChecked] = React.useState(JSON.stringify(storage.responsible) || '{}')

  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const [darkMode, setDarkMode] = useState<any>(localStorage.getItem('rapport-de-stage') === null || !storage.options ? true : storage.options?.darkMode === 'true')

  darkMode ? document.documentElement.style.setProperty('--darkModeColor', 'white') : document.documentElement.style.setProperty('--darkModeColor', 'black')
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100vw', gap: '3vh', paddingBottom: '5vh', minHeight: '100vh', backgroundColor: darkMode ? '#2a2b2b' : 'white' }}>
      <Box style={{ display: 'flex', justifyContent: 'end', marginRight: '4vw', paddingTop: '3vh', width: '100vw' }}>
          <DarkMode setDarkMode={setDarkMode} darkMode={darkMode}></DarkMode>
      </Box>
      <Box>
        <h1 style={{ color: darkMode ? 'white' : 'black' }}>Rapport de stage | Responsable</h1>
      </Box>
      <Button onClick={() => navigate('/')} variant="outlined" color="info">Retour à l'accueil</Button>
      <div key="divForm">
        <form
          onSubmit={handleSubmit((formData) => {
            const datas = { ...storage.responsible, ...formData }
            navigate('/responsable/preview', {
              state: {
                formData: JSON.stringify(datas)
              }
            })
            storage.responsible = datas
            localStorage.setItem('rapport-de-stage', JSON.stringify(storage))
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
          <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '3vh', paddingBottom: '3vh' }}>
            <Button type="submit" variant="contained">Voir le rapport</Button>
          </Box>
          <hr style={{ width: '50vw' }}/>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 45, pt: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              color="error"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              variant="contained"
            >
              Retour
            </Button>
            <Button variant="contained" sx={{ input: { color: 'white' } }} onClick={handleNext} disabled={activeStep === responsableForm.divs.length - 1}>Suivant</Button>
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
                    localStorage={JSON.stringify(storage.responsible)}
                    radioValue={radioValue}
                    setRadioValue={setRadioValue}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                    darkMode={darkMode}
                  />
                </React.Fragment>
              )
          }
        </form>
      </div>
    </Container>
  )
}

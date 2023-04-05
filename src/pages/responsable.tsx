/* eslint-disable dot-notation */
import React, { useState } from 'react'
import {
  Box, Button, Stepper, Step, StepLabel, FormControl, InputLabel, MenuItem, Select, Dialog, DialogActions, DialogContent, DialogTitle, TextField
} from '@mui/material'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import FormDiv from '../components/FormDiv'
import responsableForm from '../forms/responsable.json'
import { useNavigate, useSearchParams } from 'react-router-dom'
import DarkMode from '../components/DarkMode'
import '../style/darkMode.css'
import { useTour } from '@reactour/tour'
import CustomAlert from '../components/CustomAlert'
const Container = styled.div``

export default function Responsable () {
  // const [formData, setFormData] = useState('')
  const { register, handleSubmit, control, setValue } = useForm()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const storage = JSON.parse(localStorage.getItem('rapport-de-stage') || '{}')
  const [report, setReport] = React.useState(searchParams.get('report') || 'responsible')

  const [open, setOpen] = React.useState(false)
  const [savingName, setSavingName] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleReportChange = (event:any) => {
    setSearchParams({ report: event.target.value })
    location.reload()
  }

  const handleSavingName = (event:any) => {
    setSavingName(event.target.value)
  }

  const [radioValue, setRadioValue] = React.useState(JSON.stringify(storage[report]) || '{}')
  const [isChecked, setIsChecked] = React.useState(JSON.stringify(storage[report]) || '{}')

  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const [errorAlert, setErrorAlert] = useState(false)

  const [alertSeverity, setAlertSeverity] = useState('')
  const [alertColor, setAlertColor] = useState('')
  const [alertDescription, setAlertDescription] = useState('')
  const [alertTitle, setAlertTitle] = useState('')

  const [darkMode, setDarkMode] = useState<any>(localStorage.getItem('rapport-de-stage') === null || !storage.options ? true : storage.options?.darkMode === 'true')

  function download (filename:any, text:any) {
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    element.setAttribute('download', filename)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  function handleFileSelect (event:any) {
    const reader = new FileReader()
    reader.onload = handleFileLoad
    reader.readAsText(event.target.files[0])
  }

  function handleFileLoad (event:any) {
    const confirm = window.confirm('Voulez-vous vraiment importer les données de ce fichier ?')
    if (confirm) {
      const resultObject = JSON.parse(event.target.result)
      if (!resultObject['beginDate']) {
        alert("Merci d'importer un fichier JSON valide généré par le bouton 'Sauver le modèle & sauver en JSON'")
      } else {
        storage[report] = resultObject
        localStorage.setItem('rapport-de-stage', JSON.stringify(storage))
        location.reload()
      }
    }
  }

  const inputFile = React.useRef<HTMLInputElement | null>(null)

  const onButtonClick = () => {
    inputFile.current?.click()
  }

  const { setIsOpen } = useTour()

  darkMode ? document.documentElement.style.setProperty('--darkModeColor', 'white') : document.documentElement.style.setProperty('--darkModeColor', 'black')
  return (
    <Container style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '3vh', paddingBottom: '5vh', minHeight: '100vh', backgroundColor: darkMode ? '#2a2b2b' : 'white' }}>
      {errorAlert && (
        <CustomAlert
          alertSeverity={alertSeverity}
          alertColor={alertColor}
          setErrorAlert={setErrorAlert}
          alertDescription={alertDescription}
          alertTitle={alertTitle}
        />
      )}
      <Box style={{ display: 'flex', justifyContent: 'space-between', width: '80vw', paddingTop: '3vh' }}>
        <Button onClick={() => navigate('/')} variant='outlined'>Retour à l'accueil</Button>
        <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <DarkMode setDarkMode={setDarkMode} darkMode={darkMode}></DarkMode>
          <Button onClick={() => setIsOpen(true)} variant='contained'>Aide</Button>
        </Box>
      </Box>
      <Box>
        <h1 style={{ color: darkMode ? 'white' : 'black', fontSize: 'calc(1.25em + 1vmin)' }}>Rapport de stage | Responsable</h1>
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2vw' }}>
        <FormControl sx={{ width: '9rem' }} className='reports-list'>
          <InputLabel sx={{ color: darkMode ? 'white' : 'black' }} id="demo-simple-select-label">Rapport</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={report}
            label="Rapport"
            onChange={handleReportChange}
            sx={{ fieldset: { borderColor: darkMode ? '#B6B6B6' : '' }, color: darkMode ? 'white' : 'black' }}
          >
            <MenuItem value=''>
              <em>Par défaut</em>
            </MenuItem>
            {
              Object.keys(storage).map(element => {
                if (element === 'templates' || element === 'responsible' || element === 'options' || element === 'intern') {
                  return false
                }
                return <MenuItem key={element} value={element}>{element}</MenuItem>
              })
            }
          </Select>
        </FormControl>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}>
          <Button className='save-report-btn' variant='contained' onClick={searchParams.get('report')
            ? handleSubmit((formData) => {
              storage[report] = { ...storage[report], ...formData }
              localStorage.setItem('rapport-de-stage', JSON.stringify(storage))
              setAlertSeverity('success')
              setAlertDescription('Le rapport a bien été enregistré !')
              setAlertTitle('Succès')
              setErrorAlert(true)
            })
            : handleClickOpen}>Sauver ce rapport
          </Button>
          <Button className='delete-report-btn' id='delete-report-btn' color='error' variant='contained' disabled={searchParams.get('report') == null || searchParams.get('report') === ''} onClick={() => {
            if (confirm('Êtes-vous sûr de vouloir supprimer ce rapport ?')) {
              delete storage[report]
              localStorage.setItem('rapport-de-stage', JSON.stringify(storage))
              setSearchParams('')
            }
          }}>
            Supprimer ce rapport
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}>
          <Button className="export-json-btn" variant="contained" color="info" onClick={handleSubmit((formData) => {
            const templateDatas = { ...storage[report], ...formData }

            const name = templateDatas.internFirstName || 'noName'
            const date = new Date()

            download(`rappStage_${name}_${date.toISOString().split('T')[0]}.json`, JSON.stringify(templateDatas, null, 4))
          })}>Exporter (JSON)</Button>
          <input
            accept=".json"
            style={{ display: 'none' }}
            type="file"
            ref={inputFile}
            onChange={handleFileSelect}
          />
          <Button className="import-json-btn" variant="contained" onClick={onButtonClick}>Importer (JSON)</Button>
        </Box>
        <Dialog open={open} onClose={handleClose} PaperProps={{ style: { backgroundColor: darkMode ? '#424242' : 'white' } }}>
          <DialogTitle sx={{ color: darkMode ? 'white' : 'black' }}>Saisir un nom pour ce rapport</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              label="Nom"
              fullWidth
              onChange={handleSavingName}
              sx={{ fieldset: { borderColor: darkMode ? '#B6B6B6' : '' }, input: { color: darkMode ? 'white' : 'black' }, label: { color: darkMode ? 'white' : 'black' } }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Annuler</Button>
            <Button onClick={handleSubmit((formData) => {
              storage[savingName] = formData
              localStorage.setItem('rapport-de-stage', JSON.stringify(storage))
              setSearchParams({ report: savingName })
              setReport(savingName)
              handleClose()
            })}
            >
              Sauvegarder
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box style = {{ display: 'flex', justifyContent: 'center', gap: '2vw' }}>
        <Button className='save-model-btn' onClick={handleSubmit((formData) => {
          const templateDatas = { ...storage[report], ...formData }
          if (storage.templates) {
            if (confirm('Êtes-vous sûr ? Cela écrasera l\'ancien modèle.')) {
              storage.templates.responsible = templateDatas
              localStorage.setItem('rapport-de-stage', JSON.stringify(storage))
            }
          } else {
            storage.templates = {}
            storage.templates.responsible = templateDatas
            localStorage.setItem('rapport-de-stage', JSON.stringify(storage))
          }
        }
        )} variant="outlined">Sauver le modèle</Button>
        <Button className='import-model-btn' onClick={() => {
          if (!storage.templates) {
            setAlertSeverity('error')
            setAlertColor('info')
            setAlertDescription('Aucun modèle n\'a encore été crée, merci de d\'abord sauver un modèle avant d\'essayer de l\'importer.')
            setAlertTitle('Erreur')
            return setErrorAlert(true)
          }
          storage[report] = storage.templates.responsible
          localStorage.setItem('rapport-de-stage', JSON.stringify(storage))
          location.reload()
        }} variant="outlined">Importer le modèle</Button>
      </Box>
      <div key="divForm">
        <form
          onSubmit={handleSubmit((formData) => {
            const datas = { ...storage[report], ...formData }
            navigate('/responsable/preview', {
              state: {
                formData: JSON.stringify(datas)
              }
            })
            storage[report] = datas
            localStorage.setItem('rapport-de-stage', JSON.stringify(storage))
          }
          )}
          key="mainForm"
        >
          <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Stepper className='form-steps' activeStep={activeStep} sx={{ display: 'flex', flexDirection: 'column', gap: '0.5vh', alignItems: 'flex-start' }}>
              {
                responsableForm.divs.map((div:any, index: number) => {
                  const stepProps:any = {}
                  const labelProps:any = {}

                  return (
                    <Step key={div.label} {...stepProps}>
                      <StepLabel {...labelProps} sx={{ maxWidth: '12rem' }}>{div.label}</StepLabel>
                    </Step>
                  )
                })
              }
            </Stepper>
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '3vh', paddingBottom: '2vh' }}>
            <Button className='see-report-btn' type="submit" variant="contained">Voir le rapport</Button>
          </Box>
          <hr style={{ width: '50vw' }}/>
          <Box style={{ position: 'sticky', top: 0, width: '100%', zIndex: 100, alignSelf: 'flex-start', backgroundColor: '#2a2b2b', paddingBottom: '30px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '30vw', pt: 2, alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
              <Button
                className='back-step-btn'
                color="error"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                variant="contained"
              >
                Retour
              </Button>
              <Button className='next-step-btn' variant="contained" sx={{ input: { color: 'white' } }} onClick={handleNext} disabled={activeStep === responsableForm.divs.length - 1}>Suivant</Button>
            </Box>
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
                    localStorage={JSON.stringify(storage[report])}
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

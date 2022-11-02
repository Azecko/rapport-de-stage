import React, { ReactNode, useState } from 'react'
import {
  Box,
  TextField,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextareaAutosize
} from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import DateSelector from '../components/DateSelector'
import FormDiv from '../components/FormDiv'

const Container = styled.div``

export default function HomePage () {
  const { register, handleSubmit, control } = useForm()
  const [formData, setFormData] = useState('')
  return (
    <Container>
      <Box>
        <h1>Rapport de stage</h1>
      </Box>
      <div>
        <form
          onSubmit={handleSubmit((formData) =>
            setFormData(JSON.stringify(formData))
          )}
        >
          {/* Internship information */}
          <FormDiv label="Informations générales sur le stage" fields={[
            { type: 'text', placeholder: 'Nom de l\'entreprise', name: 'internshipName' },
            { type: 'text', placeholder: 'Nom du service', name: 'internshipService' },
            { type: 'date', placeholder: 'Date de début', name: 'beginDate' },
            { type: 'date', placeholder: 'Date de fin', name: 'endDate' }
          ]} register={register} control={control} />
          {/* Manager general information field */}
          <FormDiv label="Responsable de stage - informations générales" fields={[
            { type: 'text', placeholder: 'Prénom', name: 'internshipManagerFirstName' },
            { type: 'text', placeholder: 'Nom', name: 'internshipManagerLastName' },
            { type: 'text', placeholder: 'Téléphone', name: 'internshipManagerPhone' }
          ]} register={register} control={control} />
          {/* Manager address information field */}
          <FormDiv label="Responsable de stage - adresse" fields={[
            { type: 'text', placeholder: 'Adresse', name: 'internshipManagerAddress' },
            { type: 'text', placeholder: 'Numéro postal', name: 'internshipManagerPostalNumber' },
            { type: 'text', placeholder: 'Localité', name: 'internshipManagerLocality' }
          ]} register={register} control={control} />
          {/* Intern information field */}
          <FormDiv label="Stagiaire" fields={[
            { type: 'text', placeholder: 'Prénom', name: 'internFirstName' },
            { type: 'text', placeholder: 'Nom', name: 'internLastName' },
            { type: 'text', placeholder: 'Téléphone', name: 'internPhone' }
          ]} register={register} control={control} />
          <Box>
            <h3>Stagiaire - informations générale</h3>
          </Box>
          <TextField
            {...register('internClass')}
            label="Classe"
            variant="outlined"
          />
          <TextField
            {...register('internSchool')}
            label="Établissement"
            variant="outlined"
          />
          <TextField
            {...register('internAddress')}
            label="Adresse (du stagiaire)"
            variant="outlined"
          />
          <TextField
            {...register('internPostalNumber')}
            label="Numéro postal"
            variant="outlined"
          />
          <TextField
            {...register('internLocality')}
            label="Localité"
            variant="outlined"
          />
          <Box>
            <h3>Déroulement du stage</h3>
          </Box>
          {/* Process of the course */}
          <FormLabel id="demo-radio-buttons-group-label">Estimes-tu avoir assez d'informations sur cette profession ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel {...register('enoughInformations')} value="true" control={<Radio />} label="Oui" />
              <FormControlLabel {...register('enoughInformations')} value="false" control={<Radio />} label="Non" />
            </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">Le métier correspond-il à l'idée que tu t'en faisais ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel {...register('ideaCorrespond')} value="true" control={<Radio />} label="Oui" />
              <FormControlLabel {...register('ideaCorrespond')} value="false" control={<Radio />} label="Non" />
            </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">Ce stage t'a-t-il permis de prendre une décision ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel {...register('decision')} value="true" control={<Radio />} label="Oui" />
              <FormControlLabel {...register('decision')} value="false" control={<Radio />} label="Non" />
            </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">Si oui, laquelle ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel {...register('whatDecisionIfYes')} value="consideringApprenticeship" control={<Radio />} label="J'envisage un apprentissage dans ce métier" />
              <FormControlLabel {...register('whatDecisionIfYes')} value="hesitating" control={<Radio />} label="J'hésite encore." /> <TextField {...register('whyDecision')} label="Pourquoi ?" multiline style={{ width: 200 }}/>
              <FormControlLabel {...register('whatDecisionIfYes')} value="abandon" control={<Radio />} label="J'abandonne cette profession." /> <TextField {...register('whyDecision')} label="Pourquoi ?" multiline style={{ width: 200 }}/>
            </RadioGroup>
          <TextField
              label="Décrivez brièvement ce que vous avez appris :"
              multiline
          />
          <Box>
            <h3>Conclusion</h3>
          </Box>
          {/* Conclusion */}
          {/* <FormLabel id="demo-radio-buttons-group-label">Le métier correspond-il à l'idée que tu t'en faisais ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={this.state.prejudgeValue}
              name="radio-buttons-group"
              onChange={this.handleChangePrejudge}
            >
              <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
              <FormControlLabel value="Non" control={<Radio />} label="Non" />
            </RadioGroup>
            <br />
            <FormLabel>Si non, quelles sont les différences entre ton idée et ce que tu as réalisé ?</FormLabel>
            <br />
            <TextareaAutosize
              minRows={3}
              placeholder="Décris pourquoi tu as coché non.."
              style={{ width: 300 }}
            />
            <br />
            <FormLabel>Est-ce que ce stage t'a permis de mieux comprendre cet élément du métier ?</FormLabel>
            <br />
            <TextareaAutosize
              minRows={3}
              style={{ width: 300 }}
            />
            <br />
            <FormLabel>Si non, que faudrait il rajouter au stage pour avoir une meilleur vue d'ensemble ?</FormLabel>
            <br />
            <TextareaAutosize
              minRows={3}
              style={{ width: 300 }}
            />
            <br />
            <FormLabel>Qu’est-ce que ce stage t’apportes quelque chose dans ta branche de metier ?</FormLabel>
            <br />
            <textarea name="message"></textarea>
            <br />
            <label htmlFor="">
              Compétences opérationelles selon le
                <a href="https://ponsfrilus.github.io/dossier-formation/">
                  dossier de formation
                </a>
                <br />
              <textarea name="message"></textarea>
              <br />
            </label>
            <br />
            <label htmlFor="">Commentaire additionnel :</label>
            <br />
            <textarea name="message"></textarea>
            <br /> */}
          <input type="submit" />
        </form>
        <button onClick={() => console.log(formData)}>TEST BUTTON</button>
      </div>
    </Container>
  )
}

import React from 'react'
import {
  Box, Button
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

  return (
    <Container>
      <Box>
        <h1>Rapport de stage | Stagiaire</h1>
      </Box>
      <div key="divForm">
        <button onClick={() => navigate('/')}>Homepage</button>
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
          {
            stagiairesForm.divs.map((div:any, index: number) => {
              return (
                <FormDiv
                key={index}
                label={div.label} fields={
                  div.fields
                }
                register={register}
                setValue={setValue}
                control={control}
                localStorage={localStorage.getItem('intern')}
                />
              )
            })
          }
        <Button type="submit">SUBMIT</Button>
        </form>
      </div>
    </Container>
  )
}

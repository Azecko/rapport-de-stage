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

export default function HomePage () {
  // const [formData, setFormData] = useState('')
  const { register, handleSubmit, control, setValue } = useForm()
  const navigate = useNavigate()

  return (
    <Container>
      <Box>
        <h1>Rapport de stage | {stagiairesForm.title}</h1>
      </Box>
      <div key="divForm">
        <form
          onSubmit={handleSubmit((formData) => {
            navigate('/preview', {
              state: {
                formData: JSON.stringify(formData)
              }
            })
            console.log(formData)
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

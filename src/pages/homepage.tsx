import React, { useState } from 'react'
import {
  Box
} from '@mui/material'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import FormDiv from '../components/FormDiv'
import stagiairesForm from '../forms/stagiaires.json'

const Container = styled.div``

export default function HomePage () {
  const [formData, setFormData] = useState('')
  const { register, handleSubmit, control } = useForm()
  return (
    <Container>
      <Box>
        <h1>Rapport de stage | {stagiairesForm.title}</h1>
      </Box>
      <div>
        <form
          onSubmit={handleSubmit((formData) =>
            setFormData(JSON.stringify(formData))
          )}
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
                control={control}
                />
              )
            })
          }
        <input type="submit" />
        </form>
        <button onClick={() => console.log(formData)}>TEST BUTTON</button>
      </div>
    </Container>
  )
}

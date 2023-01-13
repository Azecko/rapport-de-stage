import React from 'react'
import {
  Box
} from '@mui/material'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
const Container = styled.div``

export default function HomePage () {
  // const [formData, setFormData] = useState('')
  const navigate = useNavigate()

  return (
    <Container>
      <Box>
        <h1>Rapport de stage</h1>
      </Box>
      <div key="divForm">
        <button onClick={() => navigate('/stagiaire')}>Stagiaire</button>
        <button onClick={() => navigate('/responsable')}>Responsable</button>
      </div>
    </Container>
  )
}

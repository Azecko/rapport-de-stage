import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const Container = styled.div``

export default function Preview () {
  const location = useLocation()
  const formData = JSON.parse(location.state.formData)

  return (
    <Container>
      <div>
        <h1>{formData.job}</h1>
      </div>
    </Container>
  )
}

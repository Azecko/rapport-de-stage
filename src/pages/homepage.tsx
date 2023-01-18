import React from 'react'
import {
  Box, Button, Tooltip
} from '@mui/material'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import '../style/homepage.css'
const Container = styled.div``

export default function HomePage () {
  // const [formData, setFormData] = useState('')
  const navigate = useNavigate()

  return (
    <Container>
      <div key="divForm" className="homepageDiv">
        <Box>
            <h1>Rapport de stage</h1>
            <p>
              <a
                href="https://github.com/ponsfrilus/rapport-de-stage"
                target="_blank"
                rel="noreferrer">
                  rapport-de-stage
              </a> est un outil permettant de générer des <a
              href="https://www.vd.ch/themes/formation/orientation/faire-des-stages#c2033329"
              target="_blank"
              rel="noreferrer">
                rapports de stages officiels
              </a>  du canton de Vaud pour les stagiaires et les responsables de stages.
              <h3>Fonctionnalités :</h3>
              <li>Rapports officiels et valides</li>
              <li>Imprimable</li>
              <li>Maintien des données après avoir sauvegardé via le stockage local</li>
            </p>
            <div className="homepageButtons">
              <Tooltip title="Créer un rapport de stage Stagiaire" arrow>
                <Button variant='contained' onClick={() => navigate('/stagiaire')}>Stagiaire</Button>
              </Tooltip>
              <Tooltip title="Créer un rapport de stage Responsable" arrow>
                <Button variant='contained' onClick={() => navigate('/responsable')}>Responsable</Button>
              </Tooltip>
            </div>
        </Box>
      </div>
      <footer className="homepageFooter"><p> Coded with 💙 by <a href="https://github.com/Azecko" target="_blank" rel="noreferrer">Azecko</a></p></footer>
    </Container>
  )
}

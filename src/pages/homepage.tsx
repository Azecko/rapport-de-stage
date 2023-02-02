import React, { useState } from 'react'
import {
  Box, Button, Tooltip
} from '@mui/material'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import '../style/homepage.css'
import faviconImage from '../images/banana_logo.png'
import DarkMode from '../components/DarkMode'
const Container = styled.div``

export default function HomePage () {
  const storage = JSON.parse(localStorage.getItem('rapport-de-stage') || '{}')
  const [darkMode, setDarkMode] = useState<any>(localStorage.getItem('rapport-de-stage') === null || !storage.options ? true : storage.options?.darkMode === 'true')
  // const [formData, setFormData] = useState('')
  const navigate = useNavigate()

  return (
    <Container style={{ backgroundColor: darkMode ? '#2a2b2b' : 'white', minHeight: '100vh' }}>
      <Box style={{ display: 'flex', justifyContent: 'end', marginRight: '4vw', paddingTop: '3vh' }}>
          <DarkMode setDarkMode={setDarkMode} darkMode={darkMode}></DarkMode>
      </Box>
      <div key="divForm" className="homepageDiv">
        <Box>
            <h1 style={{ color: darkMode ? 'white' : 'black' }}>Rapport de stage <img src={faviconImage} alt="Banana icon" /></h1>
            <p style={{ color: darkMode ? 'white' : 'black' }}>
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
              <li>Imprimables</li>
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

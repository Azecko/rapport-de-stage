import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import HomePage from './pages/homepage'
import PreviewIntern from './pages/previewIntern'
import PreviewResponsible from './pages/previewResponsible'
import Stagiaire from './pages/stagiaire'
import Responsable from './pages/responsable'
import { TourProvider } from '@reactour/tour'
import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom'

const steps = [
  {
    selector: '.reports-list',
    content: 'Grâce à ce menu déroulant, alternez entre les différents rapports que vous avez crée.'
  },
  {
    selector: '.save-report-btn',
    content: 'Ce bouton permet de sauver le rapport sur lequel vous êtes actuellement. Si vous êtes sur le rapport "Par défaut", une boîte de dialogue apparaîtra afin de saisir un nom pour le nouveau rapport.'
  },
  {
    selector: '.delete-report-btn',
    content: 'Permet de supprimer le rapport sur lequel vous êtes actuellement (le bouton est désactivé sur vous êtes sur le rapport "Par défaut").'
  },
  {
    selector: '.export-json-btn',
    content: 'Exporter le rapport actuel dans un fichier JSON.'
  },
  {
    selector: '.import-json-btn',
    content: 'Importer un rapport qui a été exporté précédement.'
  },
  {
    selector: '.save-model-btn',
    content: 'Ce bouton permet de prendre le rapport actuel, le garder dans son état, et le sauvegarder dans le navigateur.'
  },
  {
    selector: '.import-model-btn',
    content: 'Importer le modèle qui a été sauvegardé précédement.'
  },
  {
    selector: '.form-steps',
    content: 'Liste des étapes du rapport'
  },
  {
    selector: '.see-report-btn',
    content: 'Avoir un aperçu du rapport.'
  },
  {
    selector: '.back-step-btn',
    content: 'Retourner à l\'étape précédente (désactivé si vous êtes à la première étape).'
  },
  {
    selector: '.next-step-btn',
    content: 'Aller à l\'étape suivante (désactivé si vous êtes à la dernière étape).'
  }
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <HashRouter>
        <TourProvider steps={steps}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stagiaire/preview" element={<PreviewIntern />} />
            <Route path="/responsable/preview" element={<PreviewResponsible />} />
            <Route path="/stagiaire" element={<Stagiaire />}/>
            <Route path="/responsable" element={<Responsable />}/>
          </Routes>
        </TourProvider>
      </HashRouter>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

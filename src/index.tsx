import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import HomePage from './pages/homepage'
import PreviewIntern from './pages/previewIntern'
import PreviewResponsible from './pages/previewResponsible'
import Stagiaire from './pages/stagiaire'
import Responsable from './pages/responsable'
import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stagiaire/preview" element={<PreviewIntern />} />
          <Route path="/responsable/preview" element={<PreviewResponsible />} />
          <Route path="/stagiaire" element={<Stagiaire />}/>
          <Route path="/responsable" element={<Responsable />}/>
        </Routes>
      </HashRouter>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

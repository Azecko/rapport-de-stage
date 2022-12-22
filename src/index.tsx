import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import HomePage from './pages/homepage'
import Preview from './pages/preview'
import ResponsableA from './pages/responsableA'
import ResponsableB from './pages/responsableB'
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
          <Route path="/preview" element={<Preview />} />
          <Route path="/respA" element={<ResponsableA />} />
          <Route path="/respB" element={<ResponsableB />} />
        </Routes>
      </HashRouter>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

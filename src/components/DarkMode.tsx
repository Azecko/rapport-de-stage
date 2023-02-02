/* eslint-disable react/react-in-jsx-scope */
import { FormControlLabel, Switch, Tooltip } from '@mui/material'
type DarkModeProps = {
    darkMode: boolean,
    setDarkMode: any
}

export default function DarkMode ({ darkMode, setDarkMode }: DarkModeProps) {
  const storage = JSON.parse(localStorage.getItem('rapport-de-stage') || '{}')
  function manageChange () {
    setDarkMode(!darkMode)
    if (!storage.options) storage.options = {}
    storage.options.darkMode = JSON.stringify(!darkMode)
    localStorage.setItem('rapport-de-stage', JSON.stringify(storage))
  }
  return (
    <Tooltip title={darkMode ? 'Mettre le mode clair' : 'Mettre le mode sombre'} arrow>
        <FormControlLabel
        control={<Switch color="primary" checked={darkMode} />}
        label={darkMode ? '☀️' : '🌑'}
        onChange={() => manageChange()}
        id="homepageDarkMode"
        />
    </Tooltip>
  )
}

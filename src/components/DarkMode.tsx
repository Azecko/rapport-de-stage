/* eslint-disable react/react-in-jsx-scope */
import { FormControlLabel, Switch, Tooltip } from '@mui/material'
type DarkModeProps = {
    darkMode: boolean,
    setDarkMode: any
}

export default function DarkMode ({ darkMode, setDarkMode }: DarkModeProps) {
  function manageChange () {
    setDarkMode(!darkMode)
    localStorage.setItem('rapp_stage_darkMode', JSON.stringify(!darkMode))
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

/* eslint-disable react/react-in-jsx-scope */
import { Alert, AlertTitle } from '@mui/material'
type CustomAlertProps = {
    setErrorAlert: any,
    alertTitle: string,
    alertDescription: string,
    alertColor: any,
    alertSeverity: any,
}

export default function CustomAlert ({ setErrorAlert, alertTitle, alertDescription, alertColor, alertSeverity }: CustomAlertProps) {
  return (
    <Alert severity={alertSeverity} color={alertColor} onClose={() => setErrorAlert(false)}>
        <AlertTitle>{alertTitle}</AlertTitle>
        {alertDescription}
    </Alert>
  )
}

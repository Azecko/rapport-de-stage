/* eslint-disable react/react-in-jsx-scope */
import { TextField } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { Control, Controller } from 'react-hook-form'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

type DateSelectorProps = {
  name: string;
  label: string;
  control: Control;
};

export default function DateSelector ({
  name,
  label,
  control
}: DateSelectorProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DesktopDatePicker
                value={value}
                label={label}
                onChange={onChange}
                inputFormat="dd/MM/yyyy"
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
      )}
    />
  )
}

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
  dateValue: string;
  register: any;
  darkMode: boolean;
};

export default function DateSelector ({
  name,
  label,
  control,
  dateValue,
  register,
  darkMode
}: DateSelectorProps) {
  return (
    <Controller
    name={name}
    control={control}
    render={({ field: { value, onChange } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DesktopDatePicker
                {...register(name)}
                value={value === null || value === undefined ? dateValue : new Date(value)}
                label={label}
                onChange={onChange}
                renderInput={(params) => <TextField {...params} sx={{ width: '20rem', fieldset: { borderColor: darkMode ? '#B6B6B6' : '' }, input: { color: darkMode ? 'white' : 'black' }, label: { color: darkMode ? 'white' : 'black' }, svg: { color: darkMode ? 'white' : 'black' } }} />}
            />
        </LocalizationProvider>
    )}
    />
  )
}

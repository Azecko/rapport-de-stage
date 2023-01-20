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
};

export default function DateSelector ({
  name,
  label,
  control,
  dateValue,
  register
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
                renderInput={(params) => <TextField {...params} style={{ width: '45ch' }} />}
            />
        </LocalizationProvider>
    )}
    />
  )
}

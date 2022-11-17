/* eslint-disable react/react-in-jsx-scope */
import { Box, TextField } from '@mui/material'
import DateSelector from './DateSelector'
import { MuiTelInput } from 'mui-tel-input'
import { useState } from 'react'

type FieldsProp = {
  type: string;
  placeholder: string;
  name: string;
};

type FormDivProps = {
  label: string;
  fields: FieldsProp[];
  register: any;
  control: any;
};

export default function FormDiv ({
  label,
  fields,
  register,
  control
}: FormDivProps) {
  const [phone, setPhone] = useState('')

  const handleChange = (newPhone:any) => {
    setPhone(newPhone)
  }

  return (
    <Box>
      <h3>{label}</h3>
      <Box display='flex' flexDirection='row' flexWrap="wrap" gap={2}>
      {fields.map((field) => {
        switch (field.type) {
          case 'text':
            return (
                <TextField
                {...register(field.name)}
                label={field.placeholder}
                variant="outlined"
                required
              />
            )
          case 'date':
            return (
              <DateSelector
                {...register(field.name)}
                name={field.name}
                label={field.placeholder}
                control={control}
                required
              />
            )
          case 'phone':
            return (
              <MuiTelInput
                {...register(field.name)}
                name={field.name}
                label={field.placeholder}
                control={control}
                value={phone}
                onChange={handleChange}
                required
              />
            )
          default:
            return (<p>Ce champ est invalide</p>)
        }
      })}
      </Box>
    </Box>
  )
}

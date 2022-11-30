/* eslint-disable no-case-declarations */
/* eslint-disable react/react-in-jsx-scope */
import { Box, Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, TextField } from '@mui/material'
import DateSelector from './DateSelector'
import { MuiTelInput } from 'mui-tel-input'
import { useState } from 'react'
import EntryList from './EntryList'

type FieldsProp = {
  type: string;
  placeholder: string;
  name: string;
  options?: any
};

type FormDivProps = {
  label: string;
  fields: FieldsProp[];
  register: any;
  setValue: any;
  control: any;
};

export default function FormDiv ({
  label,
  fields,
  register,
  setValue,
  control
}: FormDivProps) {
  const [phone, setPhone] = useState('')

  const handleChange = (newPhone:any) => {
    setPhone(newPhone)
  }

  function checkIfYes (value: any, field: any) {
    const selected = field.options.find((opt: any) => opt.value === value)
    console.log(selected)
    return { ifYes: selected?.ifYes, value }
  }

  return (
    <Box key="fieldsLabelBox">
      <h3>{label}</h3>
      <Box display='flex' flexDirection='column' flexWrap="wrap" gap={2} key="fieldsBox">
      {fields.map((field) => {
        switch (field.type) {
          case 'text':
            return (
              <TextField
                {...register(field.name)}
                label={field.placeholder}
                variant="outlined"
                key={field.name}
                sx={{ width: '45ch' }}
              />
            )
          case 'date':
            return (
              <DateSelector
                {...register(field.name)}
                name={field.name}
                label={field.placeholder}
                control={control}
                key={field.name}
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
                key={field.name}
                sx={{ width: '45ch' }}
              />
            )
          case 'radios':
            const [radioValue, setRadioValue] = useState<string>('')
            return (
              <Box>
                <h4>{field.placeholder}</h4>
                <RadioGroup
                  row
                  id={field.name}
                  name={field.name}
                  key={field.name}
                  onChange={(event) => setRadioValue(event.target.value)}
                >
                  {field.options?.map((option:any) => {
                    return (
                      <Box key={option}>
                        <FormControlLabel
                          {...register(field.name)}
                          value={option.value}
                          label={option.label}
                          name={field.name}
                          control={<Radio id={`${field.name}_${option}`} />}
                          key={option}
                        />
                        {checkIfYes(radioValue, field).ifYes &&
                        checkIfYes(radioValue, field).value === option.value && (
                        <TextField
                          {...register(option.name)}
                          label={option.placeholder}
                          style={{ marginRight: 20 }}
                        />)}
                      </Box>
                    )
                  })}
                </RadioGroup>
              </Box>
            )
          case 'entrylist':
            return (
              <EntryList register={register} field={field} setValue={setValue} />
            )
          case 'textarea':
            return (
              <Box>
                <h4>{field.placeholder}</h4>
                <TextField
                  {...register(field.name)}
                  id="outlined-multiline-static"
                  label="Écris..."
                  multiline
                  rows={3}
                  key={field.name}
                  style={{ width: 400 }}
                />
              </Box>
            )
          case 'checkboxes':
            return (
              <Box>
                <h4>{field.placeholder}</h4>
                <FormGroup
                  id={field.name}
                  key={field.name}
                >
                  {field.options?.map((option:any) => {
                    return (
                      <FormControlLabel
                        {...register(field.name)}
                        value={option.value}
                        label={option.label}
                        name={field.name}
                        control={<Checkbox id={`${field.name}_${option}`} />}
                        key={option}
                      />
                    )
                  })}
                </FormGroup>
              </Box>
            )
          default:
            return (<p>Ce champ est invalide</p>)
        }
      })}
      </Box>
    </Box>
  )
}

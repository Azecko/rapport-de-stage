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
  options?: any;
  maxlength?: number;
};

type FormDivProps = {
  label: string;
  fields: FieldsProp[];
  register: any;
  setValue: any;
  control: any;
  localStorage: any;
};

export default function FormDiv ({
  label,
  fields,
  register,
  setValue,
  control,
  localStorage
}: FormDivProps) {
  const [phone, setPhone] = useState('')

  const handleChange = (newPhone:any) => {
    setPhone(newPhone)
  }

  function checkIfYes (value: any, field: any) {
    const selected = field.options.find((opt: any) => opt.value === value)
    return { ifYes: selected?.ifYes, value }
  }

  let parsedStorage:any
  if (localStorage) {
    parsedStorage = JSON.parse(localStorage)
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
                inputProps={{ maxLength: field.maxlength }}
                defaultValue={parsedStorage?.[field.name] || ''}
              />
            )
          case 'date':
            return (
              <DateSelector
                name={field.name}
                label={field.placeholder}
                control={control}
                key={field.name}
                dateValue={parsedStorage?.[field.name] || '01/01/2022'}
                register={register}
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
                inputProps={{ maxLength: field.maxlength }}
              />
            )
          case 'radios':
            const [radioValue, setRadioValue] = useState<string>(parsedStorage?.[field.name])
            return (
              <Box>
                <h4>{field.placeholder}</h4>
                <RadioGroup
                  row
                  id={field.name}
                  name={field.name}
                  key={field.name}
                  onChange={(event) => {
                    setRadioValue(event.target.value)
                  }}
                  value={radioValue}
                >
                  {field.options?.map((option:any) => {
                    return (
                      <Box key={option.value}>
                        <FormControlLabel
                          {...register(field.name)}
                          value={option.value}
                          label={option.label}
                          name={field.name}
                          control={<Radio id={`${field.name}_${option.value}`} />}
                          key={option}
                        />
                        {checkIfYes(radioValue, field).ifYes &&
                        checkIfYes(radioValue, field).value === option.value && (
                        <TextField
                          {...register(option.name)}
                          label={option.placeholder}
                          style={{ marginRight: 20 }}
                          inputProps={{ maxLength: option.maxlength }}
                        />)}
                      </Box>
                    )
                  })}
                </RadioGroup>
              </Box>
            )
          case 'entrylist':
            return (
              <EntryList register={register} field={field} setValue={setValue} localStorage={parsedStorage} />
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
                  inputProps={{ maxLength: field.maxlength }}
                  defaultValue={parsedStorage?.[field.name]}
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
                    const [isChecked, setIsChecked] = useState(false)
                    return (
                      <Box key={option.value}>
                        <FormControlLabel
                          {...register(field.name)}
                          value={option.value}
                          label={option.label}
                          name={field.name}
                          control={<Checkbox id={`${field.name}_${option.value}`} defaultChecked={parsedStorage?.[field.name] && [...parsedStorage?.[field.name]].includes(option.value)} />}
                          key={option}
                          onChange={(event) => {
                            setIsChecked((event.target as HTMLInputElement).checked)
                          }}
                        />
                        {isChecked && option?.ifYes && (
                          <TextField
                            {...register(option.name)}
                            label={option.placeholder}
                            style={{ marginRight: 20 }}
                            inputProps={{ maxLength: option.maxlength }}
                          />)}
                      </Box>
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

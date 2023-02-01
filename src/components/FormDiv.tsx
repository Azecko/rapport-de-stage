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
  radioValue: any;
  setRadioValue: any;
  isChecked: any;
  setIsChecked: any;
  darkMode: boolean;
};

export default function FormDiv ({
  label,
  fields,
  register,
  setValue,
  control,
  localStorage,
  setRadioValue,
  radioValue,
  isChecked,
  setIsChecked,
  darkMode
}: FormDivProps) {
  let parsedStorage:any
  if (localStorage) {
    parsedStorage = JSON.parse(localStorage)
  }

  var radioValueStorage:any
  radioValueStorage = JSON.parse(radioValue)

  var isCheckedStorage:any
  isCheckedStorage = JSON.parse(isChecked)

  return (
    <Box key="fieldsLabelBox" style={{ width: '100vw', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ color: darkMode ? 'white' : 'black' }}>{label}</h2>
      <Box display='flex' flexDirection='column' flexWrap="wrap" gap={2} key="fieldsBox">
      {fields.map((field) => {
        switch (field.type) {
          case 'text':
            return (
              <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  {...register(field.name)}
                  label={field.placeholder}
                  variant="outlined"
                  key={field.name}
                  sx={{ width: '45ch', fieldset: { borderColor: darkMode ? '#B6B6B6' : '' }, input: { color: darkMode ? 'white' : 'black' }, label: { color: darkMode ? 'white' : 'black' } }}
                  inputProps={{ maxLength: field.maxlength }}
                  defaultValue={parsedStorage?.[field.name] || ''}
                />
              </Box>
            )
          case 'date':
            return (
              <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <DateSelector
                  name={field.name}
                  label={field.placeholder}
                  control={control}
                  key={field.name}
                  dateValue={parsedStorage?.[field.name] || new Date()}
                  register={register}
                  darkMode={darkMode}
                />
              </Box>
            )
          case 'phone':
            const [phone, setPhone] = useState(parsedStorage?.[field.name])

            const handleChange = (newPhone:any) => {
              setPhone(newPhone)
            }
            return (
              <MuiTelInput
                {...register(field.name)}
                name={field.name}
                label={field.placeholder}
                control={control}
                value={phone}
                onChange={handleChange}
                key={field.name}
                sx={{ width: '45ch', fieldset: { borderColor: darkMode ? '#B6B6B6' : '' }, input: { color: darkMode ? 'white' : 'black' }, label: { color: darkMode ? 'white' : 'black' } }}
                inputProps={{ maxLength: field.maxlength }}
              />
            )
          case 'radios':

            const checkIfYes = (value: any, field: any) => {
              const selected = field.options.find((opt: any) => opt.value === JSON.parse(value)[field.name])
              return { ifYes: selected?.ifYes, value: selected?.value }
            }

            const handleRadioChange = (value:any) => {
              radioValueStorage[field.name] = value
              setRadioValue(JSON.stringify(radioValueStorage))
            }

            return (
              <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ color: darkMode ? 'white' : 'black' }}>{field.placeholder}</h3>
                <RadioGroup
                  id={field.name}
                  name={field.name}
                  key={field.name}
                  value={radioValueStorage?.[field.name]}
                  onChange={(event) => handleRadioChange(event.target.value)}
                >
                  {field.options?.map((option:any) => {
                    return (
                      <Box key={option.value}>
                        <FormControlLabel
                          {...register(field.name)}
                          value={option.value}
                          label={option.label}
                          name={field.name}
                          control={<Radio id={`${field.name}_${option.value}`} sx={{ color: darkMode ? 'gray' : 'black' }} />}
                          key={option}
                          style={{ color: darkMode ? 'white' : 'black' }}
                        />
                        {checkIfYes(radioValue, field).ifYes &&
                        checkIfYes(radioValue, field).value === option.value && (
                        <TextField
                          {...register(option.name)}
                          label={option.placeholder}
                          inputProps={{ maxLength: option.maxlength }}
                          defaultValue={parsedStorage?.[option.name] || ''}
                          sx={{ fieldset: { borderColor: darkMode ? '#B6B6B6' : '' }, input: { color: darkMode ? 'white' : 'black' }, label: { color: darkMode ? 'white' : 'black' } }}
                        />)}
                      </Box>
                    )
                  })}
                </RadioGroup>
              </Box>
            )
          case 'entrylist':
            return (
              <EntryList register={register} field={field} setValue={setValue} localStorage={parsedStorage} darkMode={darkMode} />
            )
          case 'textarea':
            return (
              <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ color: darkMode ? 'white' : 'black' }}>{field.placeholder}</h3>
                <TextField
                  {...register(field.name)}
                  id="outlined-multiline-static"
                  label="Écris..."
                  multiline
                  rows={3}
                  key={field.name}
                  sx={{ width: 400, fieldset: { borderColor: darkMode ? '#B6B6B6' : '' }, label: { color: darkMode ? 'white' : 'black' } }}
                  inputProps={{ maxLength: field.maxlength, style: { color: darkMode ? 'white' : 'black' } }}
                  defaultValue={parsedStorage?.[field.name]}
                />
              </Box>
            )
          case 'checkboxes':
            return (
              <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ color: darkMode ? 'white' : 'black' }}>{field.placeholder}</h3>
                <FormGroup
                  id={field.name}
                  key={field.name}
                  >
                  {field.options?.map((option:any) => {
                    const handleCheck = (optionValue:any) => {
                      if (option.ifYes) {
                        if (isCheckedStorage[field.name] === undefined) {
                          isCheckedStorage[field.name] = []
                        }
                        optionValue === true ? isCheckedStorage[field.name]?.push(option.value) : isCheckedStorage[field.name]?.pop(option.value)
                      }
                      setIsChecked(JSON.stringify(isCheckedStorage))
                    }
                    return (
                      <Box key={option.value}>
                        <FormControlLabel
                          {...register(field.name)}
                          value={option.value}
                          label={option.label}
                          name={field.name}
                          control={<Checkbox sx={{ color: darkMode ? 'gray' : 'black' }} id={`${field.name}_${option.value}`} defaultChecked={parsedStorage?.[field.name] && [...parsedStorage?.[field.name]].includes(option.value)} />}
                          key={option}
                          onChange={(event) => {
                            handleCheck((event.target as HTMLInputElement).checked)
                          }}
                          style={{ color: darkMode ? 'white' : 'black' }}
                        />
                        {(isCheckedStorage?.[field.name] && isCheckedStorage?.[field.name].includes(option.value)) && option?.ifYes && (
                          <TextField
                            {...register(option.name)}
                            label={option.placeholder}
                            sx={{ fieldset: { borderColor: darkMode ? '#B6B6B6' : '' }, input: { color: darkMode ? 'white' : 'black' }, label: { color: darkMode ? 'white' : 'black' } }}
                            inputProps={{ maxLength: option.maxlength }}
                            defaultValue={parsedStorage?.[option.name] || ''}
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

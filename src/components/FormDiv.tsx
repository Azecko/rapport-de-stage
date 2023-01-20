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
  setIsChecked
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
      <h2>{label}</h2>
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
                  sx={{ width: '45ch' }}
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
                sx={{ width: '45ch' }}
                inputProps={{ maxLength: field.maxlength }}
              />
            )
          case 'radios':

            const checkIfYes = (value: any, field: any) => {
              const selected = field.options.find((opt: any) => opt.value === value)
              return { ifYes: selected?.ifYes, value }
            }

            const handleRadioChange = (value:any) => {
              radioValueStorage[field.name] = value
              setRadioValue(JSON.stringify(radioValueStorage))
            }

            return (
              <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <h4>{field.placeholder}</h4>
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
                          defaultValue={parsedStorage?.[option.name] || ''}
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
              <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
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
              <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <h4>{field.placeholder}</h4>
                <FormGroup
                  id={field.name}
                  key={field.name}
                  >
                  {field.options?.map((option:any) => {
                    const handleCheck = (optionValue:any) => {
                      if (option.ifYes) {
                        optionValue === true ? isCheckedStorage?.[field.name].push(option.value) : isCheckedStorage?.[field.name].pop(option.value)
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
                          control={<Checkbox id={`${field.name}_${option.value}`} defaultChecked={parsedStorage?.[field.name] && [...parsedStorage?.[field.name]].includes(option.value)} />}
                          key={option}
                          onChange={(event) => {
                            handleCheck((event.target as HTMLInputElement).checked)
                          }}
                        />
                        {(isCheckedStorage?.[field.name] && isCheckedStorage?.[field.name].includes(option.value)) && option?.ifYes && (
                          <TextField
                            {...register(option.name)}
                            label={option.placeholder}
                            style={{ marginRight: 20 }}
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

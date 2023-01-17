/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import Entry from './Entry'

type FieldsProp = {
    type: string;
    placeholder: string;
    name: string;
    options?: any
  };

type EntryListProps = {
    field: FieldsProp
    register: any;
    setValue: any;
    localStorage:any;
}

export default function EntryList ({ register, setValue, field, localStorage }: EntryListProps) {
  if (!localStorage) {
    localStorage = {
      tasksList: [{ done: false, seen: false, text: '', liked: false, easy: false }]
    }
  }

  const [entries, setEntries] = useState<number>(localStorage.tasksList?.length || 1)
  const [entryList, setEntryList] = useState<any[]>(localStorage.tasksList || [{ done: false, seen: false, text: '', liked: false, easy: false }])

  const saveEntries = () => {
    setValue(field.name, entryList)
  }

  saveEntries()

  const controlEntry = (modifier: number) => {
    entries + modifier >= 1 && setEntries(entries + modifier)
    if (modifier === 1) {
      setEntryList([...entryList, { done: false, seen: false, text: '', liked: false, easy: false }])
    } else {
      setEntryList(entryList.slice(0, -1))
    }
    saveEntries()
  }

  return (
        <Box display="flex" flexDirection="column" key={field.name}>
            <h4>{field.placeholder}</h4>
            {
                [...Array(entries)].map((e, index) => {
                  return (
                        <Entry setValue={setValue} name={field.name} entryList={entryList} setEntryList={setEntryList} index={index} key={`${field.name}_${index}`} entries={entryList}/>
                  )
                })
            }
            <Box display="flex" flexDirection="row" key={`${field.name}_buttons`}>
                <Button onClick={() => controlEntry(1)} key="add_button">+</Button>
                <Button onClick={() => controlEntry(-1)} key="remove_button">-</Button>
                <Button onClick={() => saveEntries()} key="sabe_button">SAVE</Button>
            </Box>
        </Box>
  )
}

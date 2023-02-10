/* eslint-disable react/react-in-jsx-scope */
import { Checkbox, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { Box } from '@mui/system'
type EntryProps = {
    setValue: any,
    name: any,
    entryList: any,
    setEntryList: any,
    index: number,
    entries: any,
    darkMode: boolean,
    saveEntries: any
}

export default function Entry ({ setValue, name, entryList, setEntryList, index, entries, darkMode, saveEntries }: EntryProps) {
  const setEntryValue = (value: any, type: string) => {
    const newValue = entryList
    newValue[index][type] = value
    setEntryList(newValue)
    saveEntries()
  }

  return (
        <Box display="flex" flexDirection="row" key={index} justifyContent="center" alignItems="center">
            <FormControlLabel
                onChange={(event) => setEntryValue((event.target as HTMLInputElement).checked, 'done')}
                name="Done"
                control={<Checkbox sx={{ color: darkMode ? 'gray' : 'black' }} defaultChecked={entries[index] && entries[index].done}/>}
                label="J'ai fait"
                key={`done_${index}`}
                style={{ color: darkMode ? 'white' : 'black' }}
            />
            <FormControlLabel
                onChange={(event) => setEntryValue((event.target as HTMLInputElement).checked, 'seen')}
                name="Seen"
                control={<Checkbox sx={{ color: darkMode ? 'gray' : 'black' }} defaultChecked={entries[index] && entries[index].seen}/>}
                label="J'ai observé"
                key={`seen_${index}`}
                style={{ color: darkMode ? 'white' : 'black' }}
            />
            <TextField
                onChange={(event) => setEntryValue(event.target.value, 'text')}
                id="outlined-multiline-static"
                label="Décris l'activité..."
                multiline
                rows={2}
                key={`textarea_${index}`}
                sx={{ marginRight: 3, maginTop: 15, fieldset: { borderColor: darkMode ? '#B6B6B6' : '' }, label: { color: darkMode ? 'white' : 'black' } }}
                defaultValue={entries[index] && entries[index].text}
                inputProps={{ maxLength: 20, style: { color: darkMode ? 'white' : 'black' } }}
            />
            <RadioGroup row onChange={(event) => setEntryValue(event.target.value.toLowerCase(), 'liked')} key="liked_radios" defaultValue={entries[index] && entries[index].liked}>
                <FormControlLabel
                    control={<Radio sx={{ color: darkMode ? 'gray' : 'black' }} />} label="J'ai aimé" value={'liked'}
                    key={`liked_${index}`}
                    style={{ color: darkMode ? 'white' : 'black' }}
                />
                <FormControlLabel
                    control={<Radio sx={{ color: darkMode ? 'gray' : 'black' }} />} label="J'ai moins aimé" value={'less-liked'}
                    key={`less_liked_${index}`}
                    style={{ color: darkMode ? 'white' : 'black' }}
                />
            </RadioGroup>
            <RadioGroup row onChange={(event) => setEntryValue(event.target.value.toLowerCase(), 'easy')} key="easy_radios" defaultValue={entries[index] && entries[index].easy}>
                <FormControlLabel
                    control={<Radio sx={{ color: darkMode ? 'gray' : 'black' }} />} label="J'ai trouvé facile" value={'easy'}
                    key={`easy_${index}`}
                    style={{ color: darkMode ? 'white' : 'black' }}
                />
                <FormControlLabel
                    control={<Radio sx={{ color: darkMode ? 'gray' : 'black' }} />} label="J'ai trouvé difficile" value={'hard'}
                    key={`hard_${index}`}
                    style={{ color: darkMode ? 'white' : 'black' }}
                />
            </RadioGroup>
        </Box>
  )
}

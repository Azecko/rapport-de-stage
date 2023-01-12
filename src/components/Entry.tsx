/* eslint-disable react/react-in-jsx-scope */
import { Checkbox, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { Box } from '@mui/system'
type EntryProps = {
    setValue: any,
    name: any,
    entryList: any,
    setEntryList: any,
    index: number,
    entries: any
}

export default function Entry ({ setValue, name, entryList, setEntryList, index, entries }: EntryProps) {
  const setEntryValue = (value: any, type: string) => {
    const newValue = entryList
    newValue[index][type] = value
    setEntryList(newValue)
  }

  return (
        <Box display="flex" flexDirection="row" key={index}>
            <FormControlLabel
                onChange={(event) => setEntryValue((event.target as HTMLInputElement).checked, 'done')}
                name="Done"
                control={<Checkbox defaultChecked={entries[index] && entries[index].done}/>}
                label="J'ai fait"
                key={`done_${index}`}
            />
            <FormControlLabel
                onChange={(event) => setEntryValue((event.target as HTMLInputElement).checked, 'seen')}
                name="Seen"
                control={<Checkbox defaultChecked={entries[index] && entries[index].seen}/>}
                label="J'ai observé"
                key={`seen_${index}`}
            />
            <TextField
                onChange={(event) => setEntryValue(event.target.value, 'text')}
                id="outlined-multiline-static"
                label="Décris l'activité..."
                multiline
                rows={2}
                key={`textarea_${index}`}
                style={{ marginRight: 10 }}
                defaultValue={entries[index] && entries[index].text}
            />
            <RadioGroup row onChange={(event) => setEntryValue(event.target.value.toLowerCase(), 'liked')} key="liked_radios" defaultValue={entries[index] && entries[index].liked}>
                <FormControlLabel
                    control={<Radio />} label="J'ai aimé" value={'liked'}
                    key={`liked_${index}`}
                />
                <FormControlLabel
                    control={<Radio />} label="J'ai moins aimé" value={'less-liked'}
                    key={`less_liked_${index}`}
                />
            </RadioGroup>
            <RadioGroup row onChange={(event) => setEntryValue(event.target.value.toLowerCase(), 'easy')} key="easy_radios" defaultValue={entries[index] && entries[index].easy}>
                <FormControlLabel
                    control={<Radio />} label="J'ai trouvé facile" value={'easy'}
                    key={`easy_${index}`}
                />
                <FormControlLabel
                    control={<Radio />} label="J'ai trouvé difficile" value={'hard'}
                    key={`hard_${index}`}
                />
            </RadioGroup>
        </Box>
  )
}

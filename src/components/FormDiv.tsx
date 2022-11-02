/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable multiline-ternary */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-tabs */
import { Box, TextField } from "@mui/material";
import DateSelector from "./DateSelector";

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
  return (
    <Box>
      <h3>{label}</h3>
      {fields.map((field) => (
        <>
          {field.type === "text" ? (
            <TextField
              {...register(field.name)}
              label={field.placeholder}
              variant="outlined"
            />
          ) : (
            <DateSelector
              {...register(field.name)}
              name={field.name}
              label={field.placeholder}
              control={control}
            />
          )}
        </>
      ))}
    </Box>
  );
}

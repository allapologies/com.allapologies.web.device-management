import { MenuItem, Select, Stack, TextField } from '@mui/material';
import { FormEventHandler, ReactNode } from 'react';

export type FormValues = {
  name: string;
  type: string;
  owner: string;
  batteryStatus: string;
};

const deviceOptions = [
  'smartphone',
  'tablet',
  'laptop',
  'desktop',
  'smartwatch',
]

type Props = {
  onSubmit: (values: FormValues) => void;
  actions: ReactNode;
  initialValues?: FormValues;
};

export const DeviceForm = (props: Props) => {
  const { onSubmit, actions, initialValues } = props;

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    onSubmit(formJson as unknown as FormValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={1}>
        <TextField
          label="name"
          name="name"
          variant="standard"
          required
          defaultValue={initialValues?.name?? ''}
        />
        <Select
          label="type"
          name="type"
          variant="standard"
          required
          defaultValue={initialValues?.type?? ''}
        >
          {deviceOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="owner"
          name="owner"
          variant="standard"
          required
          defaultValue={initialValues?.owner?? ''}
        />
        <TextField
          label="battery"
          name="batteryStatus"
          type="number"
          variant="standard"
          required
          defaultValue={initialValues?.batteryStatus?? 0}
          InputProps={{
            inputProps: {
              min: 0,
              max: 100,
              step: 1,
            },
            endAdornment: ' %',
          }}
        />
      </Stack>
      {actions}
    </form>
  );
};

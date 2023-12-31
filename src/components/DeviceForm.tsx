import {
  DialogActions, DialogContent, MenuItem, Stack, TextField,
} from '@mui/material';
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
];

type Props = {
  onSubmit: (values: FormValues) => void;
  actions: ReactNode;
  initialValues?: FormValues;
};

export function DeviceForm(props: Props) {
  const { onSubmit, actions, initialValues } = props;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const values = Object
      .fromEntries(new FormData(form).entries()) as FormValues;
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogContent>
        <Stack gap={2}>
          <TextField
            label="Name"
            name="name"
            variant="standard"
            required
            defaultValue={initialValues?.name ?? ''}
          />
          <TextField
            select
            label="Type"
            name="type"
            variant="standard"
            required
            defaultValue={initialValues?.type ?? ''}
          >
            {deviceOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Owner"
            name="owner"
            variant="standard"
            required
            defaultValue={initialValues?.owner ?? ''}
          />
          <TextField
            label="Battery status"
            name="batteryStatus"
            type="number"
            variant="standard"
            required
            defaultValue={initialValues?.batteryStatus ?? 0}
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
      </DialogContent>
      <DialogActions>
        {actions}
      </DialogActions>
    </form>
  );
}

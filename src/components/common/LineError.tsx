import { Typography } from '@mui/material';

type Props = {
  error?: string;
};

export function LineError({ error }: Props) {
  return (
    <Typography variant="body1" sx={{ color: 'error.main' }} noWrap>
      {error}
    </Typography>
  );
}

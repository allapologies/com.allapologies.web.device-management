import { Typography } from '@mui/material';

type Props = {
  error?: string;
};

export const LineError = ({ error }: Props) => (
  <Typography variant="body1" sx={{ color: 'error.main' }} noWrap>
    {error}
  </Typography>
);

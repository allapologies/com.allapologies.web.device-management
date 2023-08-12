import { ReactNode } from 'react';
import { Dialog as MuiDialog, DialogTitle, } from '@mui/material';

type Props = {
  title: string;
  content: ReactNode;
};

export const Dialog = (props: Props) => {
  const {
    title,
    content,
  } = props;
  return (
    <MuiDialog open maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      {content}
    </MuiDialog>
  );
}

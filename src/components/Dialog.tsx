import { ReactNode } from 'react';
import { Dialog as MuiDialog, DialogActions, DialogContent, DialogTitle, } from '@mui/material';

type Props = {
  title: string;
  content: ReactNode;
  actions?: ReactNode;
};

export const Dialog = (props: Props) => {
  const {
    title,
    content,
    actions,
  } = props;
  return (
    <MuiDialog open maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {content}
      </DialogContent>
      <DialogActions>
        {actions}
      </DialogActions>
    </MuiDialog>
  );
}

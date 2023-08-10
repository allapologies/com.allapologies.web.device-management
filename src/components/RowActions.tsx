import { CellContext } from '@tanstack/react-table';
import { IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

import { Device } from '../domain/Device.ts';
import { deleteDevice, editDevice, useFlowControllerDispatch } from './FlowController.tsx';


export const RowActions = (props: CellContext<Device, unknown>) => {
  const dispatch = useFlowControllerDispatch();
  return (
    <div>
      <IconButton
        title="edit"
        onClick={() => dispatch(editDevice(props.row.original.id))}
      >
        <Edit />
      </IconButton>
      <IconButton
        title="delete"
        onClick={() => dispatch(deleteDevice(props.row.original.id))}
      >
        <Delete />
      </IconButton>
    </div>
  );
}
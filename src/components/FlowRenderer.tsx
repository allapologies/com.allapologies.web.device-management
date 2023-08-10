import { FLOWS, useFlowControllerState } from './FlowController.tsx';
import { NewDeviceFlow } from './NewDeviceFlow.tsx';
import { EditDeviceFlow } from './EditDeviceFlow.tsx';
import { DeleteDeviceFlow } from './DeleteDeviceFlow.tsx';

export const FlowRenderer = () => {
  const { flow } = useFlowControllerState();

  switch (flow) {
    case FLOWS.NEW_DEVICE:
      return <NewDeviceFlow />;
    case FLOWS.EDIT_DEVICE:
      return <EditDeviceFlow />;
    case FLOWS.DELETE_DEVICE:
      return <DeleteDeviceFlow />;
    default:
      return null;
  }
}

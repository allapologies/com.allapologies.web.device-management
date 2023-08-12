import { FLOWS, useFlowControllerState } from './flows';
import { NewDeviceFlow } from './NewDeviceFlow';
import { EditDeviceFlow } from './EditDeviceFlow';
import { DeleteDeviceFlow } from './DeleteDeviceFlow';

export function FlowRenderer() {
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

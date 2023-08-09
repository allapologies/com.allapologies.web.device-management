import { FLOWS, useFlowControllerState } from './FlowController.tsx';

export const FlowRenderer = () => {
  const { flow } = useFlowControllerState();

  switch (flow) {
    case FLOWS.NEW_DEVICE:
      return <div>new</div>;
    case FLOWS.EDIT_DEVICE:
      return <div>edit</div>;
    case FLOWS.DELETE_DEVICE:
      return <div>delete</div>;
    default:
      return null;
  }
}

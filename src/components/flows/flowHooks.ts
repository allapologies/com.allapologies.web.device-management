import { useContext } from 'react';
import { FlowControllerDispatchContext, FlowControllerStateContext } from './ducks.ts';

export const useFlowControllerState = () => {
  const context = useContext(FlowControllerStateContext);
  if (context === undefined) {
    throw new Error('useFlowControllerState must be used within a FlowControllerProvider');
  }
  return context;
};

export const useFlowControllerDispatch = () => {
  const context = useContext(FlowControllerDispatchContext);
  if (context === undefined) {
    throw new Error('useFlowControllerDispatch must be used within a FlowControllerProvider');
  }
  return context;
}

export const useFlowController = () => {
  return [useFlowControllerState(), useFlowControllerDispatch()] as const;
};

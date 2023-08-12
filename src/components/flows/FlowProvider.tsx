import { useReducer, FC, ReactNode } from 'react';
import { reducer, FlowControllerDispatchContext, FlowControllerStateContext } from './ducks.ts';

export const FlowProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { flow: null, selectedDeviceId: null });

  return (
    <FlowControllerStateContext.Provider value={state}>
      <FlowControllerDispatchContext.Provider value={dispatch}>
        {children}
      </FlowControllerDispatchContext.Provider>
    </FlowControllerStateContext.Provider>
  );
}

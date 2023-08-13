import { useReducer, ReactNode } from 'react';
import { reducer, FlowControllerDispatchContext, FlowControllerStateContext } from './ducks';

type Props = {
  children: ReactNode;
};

export function FlowProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, { flow: null, selectedDeviceId: null });

  return (
    <FlowControllerStateContext.Provider value={state}>
      <FlowControllerDispatchContext.Provider value={dispatch}>
        {children}
      </FlowControllerDispatchContext.Provider>
    </FlowControllerStateContext.Provider>
  );
}

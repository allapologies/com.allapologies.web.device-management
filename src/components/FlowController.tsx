import { useReducer, createContext, Dispatch, FC, ReactNode, useContext } from 'react';

export const FLOWS = {
  NEW_DEVICE: 'NEW_DEVICE',
  EDIT_DEVICE: 'EDIT_DEVICE',
  DELETE_DEVICE: 'DELETE_DEVICE',
} as const;

type State = {
  selectedDeviceId: string | null;
  flow: typeof FLOWS[keyof typeof FLOWS] | null;
};

// Actions
const CREATE_DEVICE = 'CREATE_DEVICE';
const EDIT_DEVICE = 'EDIT_DEVICE';
const DELETE_DEVICE = 'DELETE_DEVICE';
const DISMISS = 'DISMISS';

// Action creators
export const createDevice = () => ({ type: CREATE_DEVICE } as const);
export const editDevice = (deviceId: string) => ({ type: EDIT_DEVICE, deviceId } as const);
export const deleteDevice = (deviceId: string) => ({ type: DELETE_DEVICE, deviceId } as const);
export const dismiss = () => ({ type: DISMISS } as const);

type Actions =
  | ReturnType<typeof createDevice>
  | ReturnType<typeof editDevice>
  | ReturnType<typeof deleteDevice>
  | ReturnType<typeof dismiss>;

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case CREATE_DEVICE:
      return { ...state, flow: FLOWS.NEW_DEVICE };
    case EDIT_DEVICE:
      return { ...state, flow: FLOWS.EDIT_DEVICE, selectedDeviceId: action.deviceId };
    case DELETE_DEVICE:
      return { ...state, flow: FLOWS.DELETE_DEVICE, selectedDeviceId: action.deviceId };
    case DISMISS:
      return { ...state, flow: null, selectedDeviceId: null };
    default:
      return state;
  }
};

const FlowControllerStateContext = createContext<State|undefined>(undefined);
const FlowControllerDispatchContext = createContext<Dispatch<Actions>|undefined>(undefined);

export const FlowControllerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { flow: null, selectedDeviceId: null });

  return (
    <FlowControllerStateContext.Provider value={state}>
      <FlowControllerDispatchContext.Provider value={dispatch}>
        {children}
      </FlowControllerDispatchContext.Provider>
    </FlowControllerStateContext.Provider>
  );
}

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
  return [useFlowControllerState(), useFlowControllerDispatch()];
};

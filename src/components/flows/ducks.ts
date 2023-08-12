import { createContext, Dispatch } from 'react';

export const FLOWS = {
  NEW_DEVICE: 'NEW_DEVICE',
  EDIT_DEVICE: 'EDIT_DEVICE',
  DELETE_DEVICE: 'DELETE_DEVICE',
} as const;

export type State = {
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

export type Actions =
  | ReturnType<typeof createDevice>
  | ReturnType<typeof editDevice>
  | ReturnType<typeof deleteDevice>
  | ReturnType<typeof dismiss>;

export const reducer = (state: State, action: Actions): State => {
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

export const FlowControllerStateContext = createContext<State | undefined>(undefined);
export const FlowControllerDispatchContext = createContext<Dispatch<Actions> | undefined>(undefined);

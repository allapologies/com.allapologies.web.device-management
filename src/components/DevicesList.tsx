import { useDevices } from '../service/useDevices.ts';
import { deleteDevice, editDevice, useFlowControllerDispatch } from './FlowController.tsx';

export const DevicesList = () => {
  const { devices } = useDevices();
  const dispatch = useFlowControllerDispatch();

  return (
    <div>
      <h1>Devices List</h1>
      <div>
        {
          devices.map((device) => (
            <div key={device.id}>
              <div>{device.name}</div>
              <button
                onClick={() => dispatch(editDevice(device.id))}
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteDevice(device.id))}
              >
                delete
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

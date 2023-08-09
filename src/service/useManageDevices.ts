import { useQueryClient } from '@tanstack/react-query';

import { createDevice, updateDevice, deleteDevice } from './devices.ts';
import { CreateDeviceDTO } from './dto/CreateDeviceDTO.ts';
import { DeviceDTO } from './dto/DeviceDTO.ts';
import { QUERIES } from './constants.ts';

export const useManageDevices = () => {
  const queryClient = useQueryClient();

  return {
    createDevice: async (device: CreateDeviceDTO) => {
      await createDevice(device);
      await queryClient.invalidateQueries([QUERIES.DEVICES]);
    },
    updateDevice: async (device: DeviceDTO) => {
      await updateDevice(device);
      await queryClient.invalidateQueries([QUERIES.DEVICES]);
    },
    deleteDevice: async (id: string) => {
      await deleteDevice(id);
      await queryClient.invalidateQueries([QUERIES.DEVICES]);
    }
  };
};

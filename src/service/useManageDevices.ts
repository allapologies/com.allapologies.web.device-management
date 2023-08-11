import { useMutation, useQueryClient } from '@tanstack/react-query';

import * as apiService from './devices.ts';
import { QUERIES } from './constants.ts';

export const useManageDevices = () => {
  const queryClient = useQueryClient();

  const createDevice = useMutation(apiService.createDevice, {
    onSuccess: () => queryClient.invalidateQueries([QUERIES.DEVICES]),
  });

  const updateDevice = useMutation(apiService.updateDevice, {
    onSuccess: () => queryClient.invalidateQueries([QUERIES.DEVICES]),
  });

  const deleteDevice = useMutation(apiService.deleteDevice, {
    onSuccess: () => queryClient.invalidateQueries([QUERIES.DEVICES]),
  });

  return {
    createDevice,
    updateDevice,
    deleteDevice,
  };
};

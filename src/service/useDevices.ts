import { useQuery } from '@tanstack/react-query';

import { getDevices } from './devices.ts';
import { QUERIES } from './constants.ts';
import { devices } from './mocks.ts';

export const useDevices = () => {
  const { data, isLoading, error } = useQuery([QUERIES.DEVICES], getDevices, {
    initialData: devices,
  });
  return { devices: data ?? [], isLoading, error };
};

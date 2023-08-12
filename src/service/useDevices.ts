import { useQuery } from '@tanstack/react-query';

import { getDevices } from './devices';
import { QUERIES } from './constants';
import { devices } from './mocks';

export const useDevices = () => {
  const { data, isLoading, error } = useQuery([QUERIES.DEVICES], getDevices, {
    initialData: devices,
  });
  return { devices: data ?? [], isLoading, error };
};

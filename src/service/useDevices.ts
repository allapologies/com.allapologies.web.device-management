import { useQuery } from '@tanstack/react-query';

import { getDevices } from './devices.ts';
import { QUERIES } from './constants.ts';

export const useDevices = () => {
  const { data, isLoading, error } = useQuery([QUERIES.DEVICES], getDevices);
  return { devices: data ?? [], isLoading, error };
};
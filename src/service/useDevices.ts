import { useQuery } from '@tanstack/react-query';

import { getDevices } from './devices';
import { QUERIES } from './constants';

export const useDevices = () => {
  const { data, isLoading, error } = useQuery([QUERIES.DEVICES], getDevices);
  return { devices: data ?? [], isLoading, error };
};

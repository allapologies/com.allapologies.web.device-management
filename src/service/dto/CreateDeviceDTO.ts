import { DeviceDTO } from './DeviceDTO.ts';

export type CreateDeviceDTO = Omit<DeviceDTO, 'id'>;

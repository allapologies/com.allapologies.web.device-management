import { DeviceDTO } from './DeviceDTO';

export type CreateDeviceDTO = Omit<DeviceDTO, 'id'>;

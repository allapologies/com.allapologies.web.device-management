import { Device } from '../domain/Device.ts';
import { CreateDeviceDTO } from './dto/CreateDeviceDTO.ts';
import { GetDevicesDTO } from './dto/GetDevicesDTO.ts';

const url = 'http://localhost:4000/devices';

export const getDevices = async (): Promise<Device[]> => {
  const res = await fetch(url, {
    method: 'GET',
  })
  const devicesResponse = await res.json() as GetDevicesDTO;
  return devicesResponse.devices;
};

export const createDevice = async (device: CreateDeviceDTO): Promise<Device> => {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(device),
    headers: { 'Content-Type': 'application/json' },
  })
  return res.json();
}

export const updateDevice = async (device: Device): Promise<Device> => {
  const res = await fetch(`${url}/${device.id}`, {
    method: 'PUT',
    body: JSON.stringify(device),
    headers: { 'Content-Type': 'application/json' },
  })
  return res.json();
};

export const deleteDevice = async (id: string): Promise<void> => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
};

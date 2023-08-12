import axios from 'axios';

import { Device } from '../domain/Device.ts';
import { CreateDeviceDTO } from './dto/CreateDeviceDTO.ts';
import { GetDevicesDTO } from './dto/GetDevicesDTO.ts';
import { DeviceDTO } from './dto/DeviceDTO.ts';

const url = 'http://localhost:4000/devices';

export const getDevices = async (): Promise<Device[]> => {
  const res = await axios.get<GetDevicesDTO>(url);
  return res.data.devices;
};

export const createDevice = async (device: CreateDeviceDTO): Promise<Device> => {
  const res = await axios.post<DeviceDTO>(url, device)
  return res.data;
}

export const updateDevice = async (device: Device): Promise<Device> => {
  const res = await axios.put(`${url}/${device.id}`, device)
  return res.data;
};

export const deleteDevice = (id: string): Promise<void> => axios.delete(`${url}/${id}`);

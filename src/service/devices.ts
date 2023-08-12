import axios from 'axios';

import { Device } from '../domain/Device';
import { CreateDeviceDTO } from './dto/CreateDeviceDTO';
import { GetDevicesDTO } from './dto/GetDevicesDTO';
import { DeviceDTO } from './dto/DeviceDTO';

const url = 'http://localhost:4000/devices';

export const getDevices = async (): Promise<Device[]> => {
  const res = await axios.get<GetDevicesDTO>(url);
  return res.data.devices;
};

export const createDevice = async (device: CreateDeviceDTO): Promise<Device> => {
  const res = await axios.post<DeviceDTO>(url, device);
  return res.data;
};

export const updateDevice = async (device: Device): Promise<Device> => {
  const res = await axios.put(`${url}/${device.id}`, device);
  return res.data;
};

export const deleteDevice = (id: string): Promise<void> => axios.delete(`${url}/${id}`);

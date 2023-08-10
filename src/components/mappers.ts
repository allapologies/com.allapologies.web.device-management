import { FormValues } from './DeviceForm.tsx';
import { CreateDeviceDTO } from '../service/dto/CreateDeviceDTO.ts';
import { DeviceDTO } from '../service/dto/DeviceDTO.ts';

export const formValuesToDTO = (values: FormValues): CreateDeviceDTO => {
  return {
    name: values.name,
    type: values.type,
    owner: values.owner,
    batteryStatus: parseInt(values.batteryStatus, 10),
  }
};

export const dtoToFormValues = (dto: DeviceDTO): FormValues => {
  return {
    name: dto.name,
    type: dto.type,
    owner: dto.owner,
    batteryStatus: dto.batteryStatus.toString(),
  }
};

import { FormValues } from './DeviceForm';
import { CreateDeviceDTO } from '../service/dto/CreateDeviceDTO';
import { DeviceDTO } from '../service/dto/DeviceDTO';

export const formValuesToDTO = (values: FormValues): CreateDeviceDTO => ({
  name: values.name,
  type: values.type,
  owner: values.owner,
  batteryStatus: parseInt(values.batteryStatus, 10),
});

export const dtoToFormValues = (dto: DeviceDTO): FormValues => ({
  name: dto.name,
  type: dto.type,
  owner: dto.owner,
  batteryStatus: dto.batteryStatus.toString(),
});

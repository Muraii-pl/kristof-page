import { OrderStatusEnum } from '../enums/';

export interface IOrder {
  id: number;
  deviceId: number;
  model: string;
  description: string;
  comment: string;
  accepted: string;
  finished: string;
  status: OrderStatusEnum;
  manufactureId: number;
  clientId: number;
  price: number;
}

import { INameId } from './INameId';
import { UserRoleEnum } from '../enums/';

export interface IUser extends INameId {
  role: UserRoleEnum;
  email: string;
  phoneNumber: string;
}

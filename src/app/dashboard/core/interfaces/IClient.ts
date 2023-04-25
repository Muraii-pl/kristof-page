import { INameId } from './INameId';

export interface IClient extends INameId {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  email: string;
}

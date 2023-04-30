import { TableActionsEnum } from '../enums';

export interface ITableAction {
  action: TableActionsEnum,
  id: number | null;
}

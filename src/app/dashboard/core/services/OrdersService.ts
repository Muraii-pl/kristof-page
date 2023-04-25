import { Injectable } from '@angular/core';
import { DashboardPagesService } from '../../shared/interfaces';
import { IOrder } from '../interfaces/IOrder';
import { ApiService } from '../../../common/core/services/ApiService';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends DashboardPagesService<IOrder>{
  public baseUrl = 'orders';

  protected constructor(
    protected override readonly apiService: ApiService
  ) {
    super(apiService);
  }

}

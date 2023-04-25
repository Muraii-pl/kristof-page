import { Injectable } from '@angular/core';
import { ApiService } from '../../../common/core/services/ApiService';
import { DashboardPagesService } from '../../shared/interfaces';
import { INameId } from '../interfaces/';

@Injectable({
  providedIn: 'root'
})
export class DevicesService extends  DashboardPagesService<INameId>{
  public baseUrl = 'devices';

  protected constructor(
    protected override readonly apiService: ApiService
  ) {
    super(apiService);
  }

}

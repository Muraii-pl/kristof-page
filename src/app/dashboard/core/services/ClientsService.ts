import { Injectable } from '@angular/core';
import { DashboardPagesService } from '../../shared/interfaces';
import { IClient } from '../interfaces/';
import { ApiService } from '../../../common/core/services/ApiService';

@Injectable({
  providedIn: 'root'
})
export class ClientsService extends DashboardPagesService<IClient> {
  public baseUrl = 'clients';

  protected constructor(
    protected override readonly apiService: ApiService
  ) {
    super(apiService);
  }

}

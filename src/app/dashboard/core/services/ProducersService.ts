import { Injectable } from '@angular/core';
import { DashboardPagesService } from '../../shared/interfaces';
import { INameId } from '../interfaces/';
import { ApiService } from '../../../common/core/services/ApiService';

@Injectable({
  providedIn: 'root'
})
export class ProducersService extends DashboardPagesService<INameId> {
  public baseUrl = 'manufactures';

  protected constructor(
    protected override readonly apiService: ApiService
  ) {
    super(apiService);
  }

}

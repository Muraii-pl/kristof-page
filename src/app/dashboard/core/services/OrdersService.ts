import { Injectable } from '@angular/core';
import { DashboardPagesService } from '../../shared/interfaces';
import { IOrder } from '../interfaces/';
import { ApiService } from '../../../common/core/services/ApiService';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends DashboardPagesService<IOrder>{
  public baseUrl = 'orders';

  public fakeBack: IOrder[] = [
    {
      "id": 1,
      "deviceId": 123,
      "model": "iPhone X",
      "description": "Screen replacement",
      "comment": "Customer reported cracks in the screen",
      "accepted": "2022-04-20T08:00:00Z",
      "finished": "2022-04-21T16:30:00Z",
      "status": 2,
      "manufactureId": 456,
      "clientId": 789,
      "price": 200.00
    },
    {
      "id": 2,
      "deviceId": 456,
      "model": "Samsung Galaxy S10",
      "description": "Battery replacement",
      "comment": "Phone won't hold charge",
      "accepted": "2022-04-21T09:00:00Z",
      "finished": "2022-04-22T12:30:00Z",
      "status": 3,
      "manufactureId": 789,
      "clientId": 123,
      "price": 80.00
    },
    {
      "id": 3,
      "deviceId": 789,
      "model": "iPad Pro",
      "description": "Display repair",
      "comment": "Cracked screen",
      "accepted": "2022-04-22T10:00:00Z",
      "finished": "2022-04-23T14:00:00Z",
      "status": 1,
      "manufactureId": 123,
      "clientId": 456,
      "price": 350.00
    },
    {
      "id": 4,
      "deviceId": 234,
      "model": "Google Pixel 5",
      "description": "Power button replacement",
      "comment": "Power button not functioning",
      "accepted": "2022-04-23T11:00:00Z",
      "finished": "2022-04-24T17:30:00Z",
      "status": 2,
      "manufactureId": 567,
      "clientId": 890,
      "price": 120.00
    },
    {
      "id": 5,
      "deviceId": 567,
      "model": "iPhone 11",
      "description": "Camera repair",
      "comment": "Blurry photos",
      "accepted": "2022-04-24T08:30:00Z",
      "finished": "2022-04-25T11:45:00Z",
      "status": 3,
      "manufactureId": 890,
      "clientId": 234,
      "price": 90.00
    },
    {
      "id": 6,
      "deviceId": 890,
      "model": "Samsung Galaxy S21",
      "description": "Charging port repair",
      "comment": "Phone won't charge",
      "accepted": "2022-04-25T10:30:00Z",
      "finished": "2022-04-25T12:30:00Z",
      "status": 1,
      "manufactureId": 234,
      "clientId": 567,
      "price": 150.00
    },
  ]

  protected constructor(
    protected override readonly apiService: ApiService
  ) {
    super(apiService);
  }

  // public override getAll(): Observable<IOrder[]> {
  //   return of(this.fakeBack)
  // }
  //
  // public override getOne(id: number): Observable<IOrder> {
  //   return of(this.fakeBack.find((item) => item.id === id) as IOrder)
  // }

}

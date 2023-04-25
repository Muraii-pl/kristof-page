import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ITableHeader, IOrder } from '../../../../core/interfaces/';
import { GenericBasePage } from '../../../../pages/generic-base-page/generic-base-page';
import { OrdersService } from '../../../../core/services/';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderPageComponent extends GenericBasePage<IOrder> implements OnInit {

  public override tableHeader: ITableHeader[] = [
    {
      name: 'Nazwa',
      value: 'name'
    },
    {
      name: 'Nr. Zamówienia',
      value: 'nrOrder'
    },
    {
      name: 'Data',
      value: 'data',
    },
    {
      name: 'Klient',
      value: 'client',
    },
    {
      name: 'Kwota Łączna ZŁ',
      value: 'total'
    }
  ]

  constructor(
    protected override readonly cdr: ChangeDetectorRef,
    protected override readonly pageService: OrdersService
  ) {
    super(cdr, pageService)
  }

  public override ngOnInit(): void {
    super.ngOnInit();
  }

}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ITableHeader, IOrder } from '../../../../core/interfaces/';
import { GenericBasePage } from '../../../../pages/generic-base-page/generic-base-page';
import { OrdersService } from '../../../../core/services/';
import { ModalService } from '../../../../../common/core/services/ModalService';


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
      value: 'model'
    },
    {
      name: 'Nr. Zamówienia',
      value: 'id'
    },
    {
      name: 'Data',
      value: 'accepted',
    },
    {
      name: 'Klient',
      value: 'clientId',
    },
    {
      name: 'Kwota Łączna ZŁ',
      value: 'price'
    }
  ]

  public override readonly newModalName: string = 'newOrderModal';
  public override readonly editModalName: string = 'editOrderModal';
  public override readonly confirmModalName: string = 'deleteOrderModal';

  constructor(
    protected override readonly cdr: ChangeDetectorRef,
    protected override readonly pageService: OrdersService,
    protected override readonly modalService: ModalService
  ) {
    super(cdr, pageService, modalService)
  }

  public override ngOnInit(): void {
    super.ngOnInit();
  }

}

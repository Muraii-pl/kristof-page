import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ITableHeader, IOrder } from '../../../../core/interfaces/';
import { GenericBasePage } from '../../../../pages/generic-base-page/generic-base-page';
import { OrdersService } from '../../../../core/services/';
import { ModalService } from '../../../../../common/core/services/ModalService';
import { StaticDependenciesService } from '../../../../../common/core/services/StaticDependenciesService';

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

  public readonly newOrderModalName: string = 'newOrderModal';

  constructor(
    protected override readonly cdr: ChangeDetectorRef,
    protected override readonly pageService: OrdersService,
    private readonly _modalService: ModalService
  ) {
    super(cdr, pageService)
  }

  public override ngOnInit(): void {
    super.ngOnInit();
  }

  public test(): void {
    console.log('test')
    this._modalService.open(this.newOrderModalName)
  }

}

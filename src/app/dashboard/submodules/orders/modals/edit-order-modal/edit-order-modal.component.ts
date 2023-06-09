import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { NewOrderModalComponent } from '../new-order-modal/new-order-modal.component';
import { FormBuilder } from '@angular/forms';
import { ClientsService, DevicesService, OrdersService, ProducersService } from '../../../../core/services';
import { IOrder } from '../../../../core/interfaces';
import { ModalService } from '../../../../../common/core/services/ModalService';

@Component({
  selector: 'app-edit-order-modal',
  templateUrl: '../new-order-modal/new-order-modal.component.html',
  styleUrls: [ '../new-order-modal/new-order-modal.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditOrderModalComponent extends NewOrderModalComponent {

  @Input() set orderId(orderId: number) {
    if (orderId) this.loadData(orderId);
  }

  public override readonly isEditModal: boolean = true;
  public override readonly editConfirmModalName: string = 'editConfirmModalName';

  constructor(
    protected override readonly orderService: OrdersService,
    protected override readonly clientsService: ClientsService,
    protected override readonly devicesService: DevicesService,
    protected override readonly producersService: ProducersService,
    protected override readonly cdr: ChangeDetectorRef,
    protected override readonly modalService: ModalService
  ) {
    super(orderService, clientsService, devicesService, producersService, cdr, modalService);
  }

  private loadData(orderId: number): void {
    this.subs.push(
      this.orderService.getOne(orderId).subscribe((order: IOrder) => {
          this.orderForm.patchValue(order);
          this.cdr.detectChanges();
        }
      )
    );
  }

}

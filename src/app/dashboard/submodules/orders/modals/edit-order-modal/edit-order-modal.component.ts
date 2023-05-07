import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { NewOrderModalComponent } from '../new-order-modal/new-order-modal.component';
import { FormBuilder } from '@angular/forms';
import { ClientsService, DevicesService, OrdersService, ProducersService } from '../../../../core/services';
import { IOrder } from '../../../../core/interfaces';

@Component({
  selector: 'app-edit-order-modal',
  templateUrl: '../new-order-modal/new-order-modal.component.html',
  styleUrls: ['../new-order-modal/new-order-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditOrderModalComponent extends NewOrderModalComponent {

  @Input() set orderId(orderId: number) {
    this.loadData(orderId)
  }

  constructor(
    protected override readonly fb: FormBuilder,
    protected override readonly orderService: OrdersService,
    protected override readonly clientsService: ClientsService,
    protected override readonly devicesService: DevicesService,
    protected override readonly producersService: ProducersService,
    protected override readonly cdr: ChangeDetectorRef,
  ) {
    super(fb, orderService, clientsService, devicesService, producersService, cdr);
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

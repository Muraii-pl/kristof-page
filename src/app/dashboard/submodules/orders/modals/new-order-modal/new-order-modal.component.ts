import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AbstractModal } from '../../../../shared/abstract/AbstractModal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IClient, INameId, IOrder } from '../../../../core/interfaces';
import { ClientsService, DevicesService, OrdersService, ProducersService } from '../../../../core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-order-modal',
  templateUrl: './new-order-modal.component.html',
  styleUrls: ['./new-order-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewOrderModalComponent extends AbstractModal implements OnInit {

  public orderForm: FormGroup;
  public source: Observable<INameId[] | IClient[] | IOrder>[] = [
    this.clientsService.getAll(),
    this.devicesService.getAll(),
    this.producersService.getAll()
  ]

  protected readonly _formFields = {
    id: [''],
    deviceId: [''],
    model: [''],
    description: [''],
    comment: [''],
    accepted: [''],
    finished: [''],
    status: [''],
    manufactureId: [''],
    clientId: [''],
    price: ['']
  }

  public clientsList: IClient[];
  public devicesList: IOrder[];
  public producersList: INameId[];



  constructor(
    protected readonly fb: FormBuilder,
    protected readonly orderService: OrdersService,
    protected readonly clientsService: ClientsService,
    protected readonly devicesService: DevicesService,
    protected readonly producersService: ProducersService,
    protected override readonly cdr: ChangeDetectorRef,
  ) {
    super(cdr);
  }

  public override ngOnInit(): void {
    this.orderForm = this.fb.group(this._formFields)
  }

  public open(isOpen: boolean): void {
    if (isOpen) {
      this.subs.push(
        this.orderService.getAll().subscribe(res => this.devicesList = res )
        // forkJoin(this.source).subscribe((res: (INameId[] | IClient[] | IOrder)[]) => {
        //   this.clientsList = res[0] as IClient[];
        //   this.devicesList = res[1] as INameId[];
        //   this.producersList = res[2] as INameId[];
        // })
      )
    }
  }

  public test(): void {
    console.log(this.orderForm.value)
  }

  public save(): void {
  }

}

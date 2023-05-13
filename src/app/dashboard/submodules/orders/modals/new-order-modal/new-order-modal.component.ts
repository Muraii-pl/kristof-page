import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AbstractModal } from '../../../../shared/abstract/AbstractModal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IClient, INameId, IOrder } from '../../../../core/interfaces';
import { ClientsService, DevicesService, OrdersService, ProducersService } from '../../../../core/services';
import { Observable } from 'rxjs';
import { ModalService } from '../../../../../common/core/services/ModalService';

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
  public clientsList: IClient[];
  public devicesList: IOrder[];
  public producersList: INameId[];

  public readonly isEditModal: boolean = false;
  public readonly editConfirmModalName: string;



  constructor(
    protected readonly orderService: OrdersService,
    protected readonly clientsService: ClientsService,
    protected readonly devicesService: DevicesService,
    protected readonly producersService: ProducersService,
    protected override readonly cdr: ChangeDetectorRef,
    protected override readonly modalService: ModalService
  ) {
    super(cdr, modalService);
  }

  public override ngOnInit(): void {
    this.orderForm = new FormGroup({
      id: new FormControl({ value: '', disabled: true }),
      deviceId: new FormControl(''),
      model: new FormControl(''),
      description: new FormControl(''),
      comment: new FormControl(''),
      accepted: new FormControl(''),
      finished: new FormControl(''),
      status: new FormControl(''),
      manufactureId: new FormControl(''),
      clientId: new FormControl(''),
      price: new FormControl('')
    })
  }

  public open(isOpen: boolean): void {
    if (isOpen) {
      this.subs.push(
        this.orderService.getAll().subscribe(res => this.devicesList = res)
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

  public close(): void {
    if ('test') {

    } else {
      this.modalService.close(this.name)
    }
  }

  public save(): void {
  }

}

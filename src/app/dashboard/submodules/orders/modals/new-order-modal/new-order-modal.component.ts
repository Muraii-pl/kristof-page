import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractModal } from '../../../../shared/abstract/AbstractModal';
import { FormControl, FormGroup } from '@angular/forms';
import { IClient, INameId, IOrder } from '../../../../core/interfaces';
import { ClientsService, DevicesService, OrdersService, ProducersService } from '../../../../core/services';
import { forkJoin, Observable } from 'rxjs';
import { ModalService } from '../../../../../common/core/services/ModalService';
import { ConfirmModalActionEnum } from '../../../../../common/core/enums';

@Component({
  selector: 'app-new-order-modal',
  templateUrl: './new-order-modal.component.html',
  styleUrls: [ './new-order-modal.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewOrderModalComponent extends AbstractModal implements OnInit {

  public orderForm: FormGroup;
  public source: Observable<INameId[] | IClient[] | IOrder>[] = [
    this.clientsService.getAll(),
    this.devicesService.getAll(),
    this.producersService.getAll()
  ];
  public clientsList: IClient[];
  public devicesList: INameId[];
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
      manufactureId: new FormControl(''),
      clientId: new FormControl(''),
      price: new FormControl('')
    });
  }

  public open(isOpen: boolean): void {
    if (isOpen) {
      this.subs.push(
        forkJoin(this.source).subscribe((res: (INameId[]  | IOrder)[]) => {
          this.clientsList = res[0] as IClient[];
          this.devicesList = res[1] as INameId[];
          this.producersList = res[2] as INameId[];
          this.cdr.detectChanges();
        })
      );
    }
  }

  public close(closeOption: ConfirmModalActionEnum): void {
    if (closeOption === ConfirmModalActionEnum.SAVE) {
      this.save();
      this.closeResult.emit(ConfirmModalActionEnum.SAVE)
    } else if (closeOption === ConfirmModalActionEnum.CANCEL) {
      this.modalService.close(this.name);
    } else if (closeOption === ConfirmModalActionEnum.DISCARD_CHANGES) {
      this.orderForm.reset();
      this.modalService.close(this.name);
    } else {
      if (this.isEditModal) {
        if (this.orderForm.dirty) {
          this.modalService.open(this.editConfirmModalName);
        } else {
          this.modalService.close(this.name);
        }
      } else {
        this.modalService.close(this.name);
      }
    }
  }

  public save(): void {
    this.subs.push(this.orderService.post(this.orderForm.value).subscribe((res) => {
      })
    );
    this.orderForm.reset();
    this.close(ConfirmModalActionEnum.DISCARD);
  }

}

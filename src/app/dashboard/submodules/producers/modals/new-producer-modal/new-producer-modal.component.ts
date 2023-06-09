import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DevicesService, ProducersService } from '../../../../core/services';
import { AbstractModal } from '../../../../shared/abstract/AbstractModal';
import { ModalService } from '../../../../../common/core/services/ModalService';
import { ConfirmModalActionEnum } from 'src/app/common/core/enums';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-producer-modal',
  templateUrl: './new-producer-modal.component.html',
  styleUrls: [ './new-producer-modal.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProducerModalComponent extends AbstractModal implements OnInit {

  public producerForm: FormGroup;

  public readonly isEditModal: boolean = false;
  public readonly editConfirmModalName: string;
  constructor(
    protected readonly producersService: ProducersService,
    protected override readonly  cdr: ChangeDetectorRef,
    protected override readonly  modalService: ModalService
  ) {
    super(cdr, modalService);
  }

  public override ngOnInit(): void {
    this.producerForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('')
    })
  }

  public override close(closeOption: ConfirmModalActionEnum): void {
    if (closeOption === ConfirmModalActionEnum.SAVE) {
      this.save();
    } else if (closeOption === ConfirmModalActionEnum.CANCEL) {
      this.modalService.close(this.name);
    } else if (closeOption === ConfirmModalActionEnum.DISCARD_CHANGES) {
      this.producerForm.reset();
      this.modalService.close(this.name);
    } else {
      if (this.isEditModal) {
        if (this.producerForm.dirty) {
          this.modalService.open(this.editConfirmModalName);
        } else {
          this.modalService.close(this.name);
        }
      } else {
        this.modalService.close(this.name);
      }
    }  }
  public  override save(): void {
    this.producersService[this.isEditModal ? 'put' : 'post'](this.producerForm.value, this.producerForm.value.id)
    .subscribe((res) => {

    })
    this.producerForm.reset()
    this.close(ConfirmModalActionEnum.DISCARD)
  }

}

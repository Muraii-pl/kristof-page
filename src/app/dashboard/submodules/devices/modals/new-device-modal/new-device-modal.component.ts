import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DevicesService } from '../../../../core/services';
import { AbstractModal } from '../../../../shared/abstract/AbstractModal';
import { ModalService } from '../../../../../common/core/services/ModalService';
import { ConfirmModalActionEnum } from 'src/app/common/core/enums';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-device-modal',
  templateUrl: './new-device-modal.component.html',
  styleUrls: ['./new-device-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewDeviceModalComponent extends AbstractModal implements OnInit {

  public deviceForm: FormGroup;

  public readonly isEditModal: boolean = false;
  public readonly editConfirmModalName: string;

  constructor(
    protected readonly devicesService: DevicesService,
    protected override readonly cdr: ChangeDetectorRef,
    protected override readonly modalService: ModalService
  ) {
    super(cdr, modalService);
  }

  public override ngOnInit(): void {
    this.deviceForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('')
    });
  }

  public override close(closeOption: ConfirmModalActionEnum): void {
    if (closeOption === ConfirmModalActionEnum.SAVE) {
      this.save();
    } else if (closeOption === ConfirmModalActionEnum.CANCEL) {
      this.modalService.close(this.name);
    } else if (closeOption === ConfirmModalActionEnum.DISCARD_CHANGES) {
      this.deviceForm.reset();
      this.modalService.close(this.name);
    } else {
      if (this.isEditModal) {
        if (this.deviceForm.dirty) {
          this.modalService.open(this.editConfirmModalName);
        } else {
          this.modalService.close(this.name);
        }
      } else {
        this.modalService.close(this.name);
      }
    }
  }

  public override save(): void {
    this.devicesService[this.isEditModal ? 'put' : 'post'](this.deviceForm.value, this.deviceForm.value.id)
    .subscribe((res) => {

    });
    this.deviceForm.reset();
    this.close(ConfirmModalActionEnum.DISCARD);
    this.closeResult.emit(ConfirmModalActionEnum.SAVE);

  }

}

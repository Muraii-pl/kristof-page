import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AbstractModal } from '../../../../shared/abstract/AbstractModal';
import { ConfirmModalActionEnum } from '../../../../../common/core/enums';
import { ModalService } from '../../../../../common/core/services/ModalService';
import { ClientsService } from '../../../../core/services';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-client-modal',
  templateUrl: './new-client-modal.component.html',
  styleUrls: [ './new-client-modal.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewClientModalComponent extends AbstractModal implements OnInit {

  public clientForm: FormGroup;

  public readonly isEditModal: boolean = false;
  public readonly editConfirmModalName: string;

  constructor(
    protected readonly clientsService: ClientsService,
    protected override readonly cdr: ChangeDetectorRef,
    protected override readonly modalService: ModalService
  ) {
    super(cdr, modalService);
  }

  public override ngOnInit(): void {
    this.clientForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl('', [ Validators.email ])
    });
  };
  public close(closeOption: ConfirmModalActionEnum): void {
    if (closeOption === ConfirmModalActionEnum.SAVE) {
      this.save();
    } else if (closeOption === ConfirmModalActionEnum.CANCEL) {
      this.modalService.close(this.name);
    } else if (closeOption === ConfirmModalActionEnum.DISCARD_CHANGES) {
      this.clientForm.reset();
      this.modalService.close(this.name);
    } else {
      if (this.isEditModal) {
        if (this.clientForm.dirty) {
          this.modalService.open(this.editConfirmModalName);
        } else {
          this.modalService.close(this.name);
        }
      } else {
        this.modalService.close(this.name);
      }
    }
  };

  public save(): void {
    this.clientForm.get('name')
    ?.patchValue(`${ this.clientForm.value.firstName }-${ this.clientForm.value.lastName }`);

    this.subs.push(
      this.clientsService[this.isEditModal ? 'put' : 'post'](this.clientForm.value, this.clientForm.value.id)
      .subscribe(() => {
      })
    );
    this.clientForm.reset();
    this.close(ConfirmModalActionEnum.DISCARD)
    this.closeResult.emit(ConfirmModalActionEnum.SAVE)
  };

}

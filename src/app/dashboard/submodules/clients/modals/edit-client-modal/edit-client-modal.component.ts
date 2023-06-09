import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { NewClientModalComponent } from '../new-client-modal/new-client-modal.component';
import { ModalService } from '../../../../../common/core/services/ModalService';
import { ClientsService } from '../../../../core/services';
import { IClient, IOrder } from '../../../../core/interfaces';

@Component({
  selector: 'app-edit-client-modal',
  templateUrl: '../new-client-modal/new-client-modal.component.html',
  styleUrls: ['../new-client-modal/new-client-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditClientModalComponent extends NewClientModalComponent{

  @Input() set userId(userId: number) {
    if (userId) this.loadData(userId);
  }

  public override readonly isEditModal: boolean = true;
  public override readonly editConfirmModalName: string = 'editConfirmModalName';


  constructor(
    protected override readonly clientsService: ClientsService,
    protected override readonly cdr: ChangeDetectorRef,
    protected override readonly modalService: ModalService
  ) {
    super(clientsService, cdr, modalService);
  }

  private loadData(orderId: number): void {
    this.subs.push(
      this.clientsService.getOne(orderId).subscribe((client: IClient) => {
          this.clientForm.patchValue(client);
          this.cdr.detectChanges();
        }
      )
    );
  }

}

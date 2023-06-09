import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { INameId } from '../../../../core/interfaces';
import { DevicesService, ProducersService } from '../../../../core/services';
import { ModalService } from '../../../../../common/core/services/ModalService';
import { NewProducerModalComponent } from '../new-producer-modal/new-producer-modal.component';

@Component({
  selector: 'app-edit-producer-modal',
  templateUrl: '../new-producer-modal/new-producer-modal.component.html',
  styleUrls: [ '../new-producer-modal/new-producer-modal.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProducerModalComponent extends NewProducerModalComponent {


  @Input() set producerId(producerId: number) {
    if (producerId) this.loadData(producerId);
  }

  public override readonly isEditModal: boolean = true;
  public override readonly editConfirmModalName: string = 'editConfirmModalName';

  constructor(
    protected override readonly producersService: ProducersService,
    protected override readonly cdr: ChangeDetectorRef,
    protected override readonly modalService: ModalService,
  ) {
    super(producersService, cdr, modalService);
  }

  private loadData(producerId: number): void {
    this.subs.push(
      this.producersService.getOne(producerId).subscribe((producer: INameId) => {
          this.producerForm.patchValue(producer);
          this.cdr.detectChanges();
        }
      )
    );
  }
}

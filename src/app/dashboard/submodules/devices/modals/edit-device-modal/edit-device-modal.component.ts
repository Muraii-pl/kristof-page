import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { IClient, INameId } from '../../../../core/interfaces';
import { NewDeviceModalComponent } from '../new-device-modal/new-device-modal.component';
import { DevicesService } from '../../../../core/services';
import { ModalService } from '../../../../../common/core/services/ModalService';

@Component({
  selector: 'app-edit-device-modal',
  templateUrl: '../new-device-modal/new-device-modal.component.html',
  styleUrls: [ '../new-device-modal/new-device-modal.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDeviceModalComponent extends NewDeviceModalComponent {


  @Input() set deviceId(deviceId: number) {
    if (deviceId) this.loadData(deviceId);
  }

  public override readonly isEditModal: boolean = true;
  public override readonly editConfirmModalName: string = 'editConfirmModalName';

  constructor(
    protected override readonly devicesService: DevicesService,
    protected override readonly cdr: ChangeDetectorRef,
    protected override readonly modalService: ModalService,
  ) {
    super(devicesService, cdr, modalService);
  }

  private loadData(deviceId: number): void {
    this.subs.push(
      this.devicesService.getOne(deviceId).subscribe((device: INameId) => {
          this.deviceForm.patchValue(device);
          this.cdr.detectChanges();
        }
      )
    );
  }
}

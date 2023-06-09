import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDeviceModalComponent } from './new-device-modal/new-device-modal.component';
import { EditDeviceModalComponent } from './edit-device-modal/edit-device-modal.component';
import { UiModule } from '../../../../common/ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalsModule as GlobalModal } from '../../../modals/modals.module';


@NgModule({
  declarations: [
    NewDeviceModalComponent,
    EditDeviceModalComponent
  ],
  exports: [
    NewDeviceModalComponent,
    EditDeviceModalComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    ReactiveFormsModule,
    GlobalModal
  ]
})
export class ModalsModule {
}

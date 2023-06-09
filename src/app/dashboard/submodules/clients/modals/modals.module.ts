import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewClientModalComponent } from './new-client-modal/new-client-modal.component';
import { EditClientModalComponent } from './edit-client-modal/edit-client-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../../../../common/ui/ui.module';
import { ModalsModule as GlobalModal } from '../../../modals/modals.module';



@NgModule({
  declarations: [
    NewClientModalComponent,
    EditClientModalComponent
  ],
  exports: [
    NewClientModalComponent,
    EditClientModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiModule,
    GlobalModal,
  ]
})
export class ModalsModule { }

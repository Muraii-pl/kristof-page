import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderModalComponent } from './new-order-modal/new-order-modal.component';
import { UiModule } from '../../../../common/ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditOrderModalComponent } from './edit-order-modal/edit-order-modal.component';
import { ModalsModule as GlobalModal } from '../../../modals/modals.module';




@NgModule({
  declarations: [
    NewOrderModalComponent,
    EditOrderModalComponent
  ],
  exports: [
    NewOrderModalComponent,
    EditOrderModalComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    ReactiveFormsModule,
    GlobalModal,
  ]
})
export class ModalsModule { }
